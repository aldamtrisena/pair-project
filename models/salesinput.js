'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesInput extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SalesInput.init({
    items: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'SalesInput',
  });
  return SalesInput;
};