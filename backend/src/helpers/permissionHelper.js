const db = require('../models');
const Action = db.Action;
const Permission = db.Permission;

async function generatePermissionsForModule(moduleInstance, transaction = null) {
  const actions = await Action.findAll({ transaction });
  const toCreate = actions.map(a => ({
    module_id: moduleInstance.id,
    action_id: a.id,
    permission_key: `${moduleInstance.code}.${a.code}`,
    label: `${moduleInstance.title} - ${a.title}`
  }));
  // bulkCreate and ignore duplicates
  await Permission.bulkCreate(toCreate, { transaction, ignoreDuplicates: true });
}

module.exports = { generatePermissionsForModule };
