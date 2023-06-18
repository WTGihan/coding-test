"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rates",
      [
        {
          rate: 4,
          comments: "Good and Yummy Pizza. Recommended!",
          customer_name: "Tharindu Gihan",
          dish_id: 1,
        },
        {
          rate: 1,
          comments: "Bad customer experience",
          customer_name: "Himasha Anjali",
          dish_id: 1,
        },
        {
          rate: 5,
          comments: "Very cheap and tasty.",
          customer_name: "Himasha Anjali",
          dish_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rates", null, {});
  },
};
