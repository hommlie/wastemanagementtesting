module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define('RolePermission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role_id: { type: DataTypes.INTEGER, allowNull: false },
    permission_id: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'role_permissions', timestamps: false });

  RolePermission.associate = models => {
    RolePermission.belongsTo(models.Role, { as: 'role', foreignKey: 'role_id' });
    RolePermission.belongsTo(models.Permission, { as: 'permission', foreignKey: 'permission_id' });
  };

  return RolePermission;
};
