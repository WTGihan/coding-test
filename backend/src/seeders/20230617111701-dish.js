"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          name: "Halloumi and Roasted Veg",
          description:
            "Grilled halloumi, sweet potato, roasted peppers, roasted tomatoes, pickled red onion, pesto and balsamic vinaigrette.",
          price: 11.99,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
        {
          name: "Avocado Caesar Salad",
          description:
            "Your choice of chicken or salmon with with avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice",
          price: 12.49,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/157ed1e5-9c96-4b3d-a788-768c9f65993e/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
        {
          name: "The Italian",
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/157ed1e5-9c96-4b3d-a788-768c9f65993e/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
        {
          name: "Superfood salad",
          description:
            "feta, beetroot, cranberry, edamame, carrot, seeds & french dressing",
          price: 11.49,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/38572259-158c-4312-a19e-3786437acc6f/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
        {
          name: "Salmon Greens and Grains",
          description:
            "smoked roast salmon with avocado, pesto, supergrains, edamame, sweet potato, baby plum tomatoes, lemon juice and olive oil",
          price: 11.49,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/a28d5f70-6539-4b92-92f2-f00db7328c9f/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
        {
          name: "Parmesan Chicken Salad",
          description:
            "Your chioce of chicken or grilled chicken thigh with parmesan crisps, pesto, roasted peppers, baby plum tomatoes & ranch dressing",
          price: 10.99,
          menu_id: 6,
          image_url:
            "https://rs-menus-api.roocdn.com/images/e46d0de2-e053-4b63-8f88-556f2a1c0601/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
