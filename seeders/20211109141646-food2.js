"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Food2s",
      [
        {
          food: "oreo",
          calories: "464",
          carbs: "71",
          protein: "5.1",
          fat: "19.2",
          fiber: " 2",
          url: "google.com",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Food2s", null, {});
  },
};
