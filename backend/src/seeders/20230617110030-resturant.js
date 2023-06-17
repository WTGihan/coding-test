"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Resturants",
      [
        {
          name: "Pizza Hut",
          address: "Kaluwella Galle Road",
          description: "Links the food with Pizza",
        },
        {
          name: "Dominos",
          address: "Town Hall Galle Road",
          description: "Links the food with Pizza",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Resturants", null, {});
  },
};
