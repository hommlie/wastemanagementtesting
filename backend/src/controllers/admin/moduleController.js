const db = require('../../models');
const Module = db.Module;
const Permission = db.Permission;
const sequelize = db.sequelize;
const { generatePermissionsForModule } = require('../../helpers/permissionHelper');

exports.listModules = async (req, res) => {
  try {
    const modules = await Module.findAll({ include: [{ model: Permission, as: 'permissions', include: [{ model: db.Action, as: 'action' }] }] });
    return res.json({ status: 1, data: modules });
  } catch (err) { return res.status(500).json({ status:0, message: err.message }); }
};

exports.createModule = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { code, title } = req.body;
    if (!code || !title) { await t.rollback(); return res.status(400).json({ status:0, message: 'code and title required' }); }
    const mod = await Module.create({ code: String(code).trim(), title: String(title).trim() }, { transaction: t });
    await generatePermissionsForModule(mod, t);
    await t.commit();
    const m = await Module.findByPk(mod.id, { include: [{ model: Permission, as: 'permissions' }] });
    return res.status(201).json({ status: 1, message: 'Module created', data: m });
  } catch (err) { await t.rollback(); return res.status(500).json({ status:0, message: err.message }); }
};

exports.deleteModule = async (req, res) => {
  try {
    const { id } = req.params;
    const mod = await Module.findByPk(id);
    if (!mod) return res.status(404).json({ status:0, message: 'Module not found' });
    await mod.destroy();
    return res.json({ status:1, message: 'Module deleted' });
  } catch (err) { return res.status(500).json({ status:0, message: err.message }); }
};
