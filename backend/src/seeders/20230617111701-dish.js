"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          name: "Vegetable Pizza",
          description: "For Vegan Family",
          price: 100.22,
          menu_id: 1,
        },
        {
          name: "Chicken Ham Burger",
          description: "For Non Vegan Family",
          price: 150.22,
          menu_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
