module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    module_id: { type: DataTypes.INTEGER, allowNull: false },
    action_id: { type: DataTypes.INTEGER, allowNull: false },
    permission_key: { type: DataTypes.STRING, allowNull: false, unique: true },
    label: { type: DataTypes.STRING }
  }, { tableName: 'permissions', timestamps: false });

  Permission.associate = models => {
    Permission.belongsTo(models.Module, { as: 'module', foreignKey: 'module_id' });
    Permission.belongsTo(models.Action, { as: 'action', foreignKey: 'action_id' });
    Permission.hasMany(models.RolePermission, { as: 'role_permissions', foreignKey: 'permission_id' });
  };

  return Permission;
};
