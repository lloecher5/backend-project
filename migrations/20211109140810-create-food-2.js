'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Food2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      food: {
        type: Sequelize.STRING
      },
      calories: {
        type: Sequelize.STRING
      },
      carbs: {
        type: Sequelize.STRING
      },
      protein: {
        type: Sequelize.STRING
      },
      fat: {
        type: Sequelize.STRING
      },
      fiber: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Food2s');
  }
};