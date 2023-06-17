export const getMenuWithDishes = {
  type: "object",
  properties: {
    resturant_id: { type: "integer", minimum: 1 },
  },
  required: ["resturant_id"],
  additionalProperties: false,
};
