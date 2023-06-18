"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Menus",
      [
        {
          name: "Bundles",
          resturant_id: 1,
        },
        {
          name: "Salads",
          resturant_id: 1,
        },
        {
          name: "Hot Power Bowls",
          resturant_id: 1,
        },
        {
          name: "Vegan Menu",
          resturant_id: 1,
        },
        {
          name: "Rainbow Wraps",
          resturant_id: 1,
        },
        {
          name: "Snacks & Sides",
          resturant_id: 1,
        },
        {
          name: "Smoothies, shakes & juice",
          resturant_id: 1,
        },
        {
          name: "Cold Drinks",
          resturant_id: 1,
        },
        {
          name: "Yoghurt & fruit",
          resturant_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
