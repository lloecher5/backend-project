"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Food",
      [
        {
          food: "oreo",
          calories: "464",
          carbs: "71",
          protein: "5.1",
          fat: "19.2",
          fiber: " 2",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Food", null, {});
  },
};
