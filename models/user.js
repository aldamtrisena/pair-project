'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, {through : models.TransaksiProductUser})
      User.hasMany(models.TransaksiProductUser)
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};