'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Food2.init({
    food: DataTypes.STRING,
    calories: DataTypes.STRING,
    carbs: DataTypes.STRING,
    protein: DataTypes.STRING,
    fat: DataTypes.STRING,
    fiber: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food2',
  });
  return Food2;
};