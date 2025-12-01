const db = require('../../models');
const Action = db.Action;
const Permission = db.Permission;
const Module = db.Module;
const sequelize = db.sequelize;

exports.listActions = async (req, res) => {
  try {
    const actions = await Action.findAll();
    return res.json({ status:1, data: actions });
  } catch (err) { return res.status(500).json({ status:0, message:err.message }); }
};

exports.createAction = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { code, title } = req.body;
    if (!code || !title) { await t.rollback(); return res.status(400).json({ status:0, message:'code & title required' }); }
    const a = await Action.create({ code: code.trim(), title: title.trim() }, { transaction: t });
    // create permission entries for existing modules
    const modules = await Module.findAll({ transaction: t });
    const perms = modules.map(m => ({ module_id: m.id, action_id: a.id, permission_key: `${m.code}.${a.code}`, label: `${m.title} - ${a.title}` }));
    await Permission.bulkCreate(perms, { transaction: t, ignoreDuplicates: true });
    await t.commit();
    return res.status(201).json({ status:1, data: a });
  } catch (err) { await t.rollback(); return res.status(500).json({ status:0, message: err.message }); }
};
