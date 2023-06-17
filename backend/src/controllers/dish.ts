import db from "../models";

const Dish = db.Dish;

export const findDishes = async (req: any, res: any) => {
  try {
    const dishesResult = await Dish.findAll();
    res.status(200).send(dishesResult);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occured while retrieving Menu",
    });
  }
};
