const db = require('../../models');
const RolePermission = db.RolePermission;
const sequelize = db.sequelize;

exports.getRolePermissions = async (req, res) => {
  try {
    const { roleId } = req.params;
    const perms = await RolePermission.findAll({ where: { role_id: roleId }, include: [{ model: db.Permission, as: 'permission', include: [{ model: db.Module, as: 'module' }, { model: db.Action, as: 'action' }] }] });
    return res.json({ status:1, data: perms.map(rp => rp.permission) });
  } catch (err) { return res.status(500).json({ status:0, message:err.message }); }
};

exports.assignPermissions = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { roleId } = req.params;
    const { permissionIds } = req.body;
    if (!Array.isArray(permissionIds)) { await t.rollback(); return res.status(400).json({status:0, message:'permissionIds array required'}); }
    // remove existing
    await RolePermission.destroy({ where: { role_id: roleId }, transaction: t });
    if (permissionIds.length > 0) {
      const rows = permissionIds.map(pid => ({ role_id: roleId, permission_id: pid }));
      await RolePermission.bulkCreate(rows, { transaction: t, ignoreDuplicates: true });
    }
    await t.commit();
    return res.json({ status:1, message:'Permissions assigned' });
  } catch (err) { await t.rollback(); return res.status(500).json({status:0, message:err.message}); }
};
