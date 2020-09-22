'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Warehouse.init({
    sku: DataTypes.INTEGER,
    products_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    category:DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};