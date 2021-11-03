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
    }
  };
  User.init({
    food: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    fiber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};