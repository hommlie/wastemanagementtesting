module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: 'modules', timestamps: false });

  Module.associate = models => {
    Module.hasMany(models.Permission, { as: 'permissions', foreignKey: 'module_id' });
  };

  return Module;
};
