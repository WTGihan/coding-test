import db from "../models";
import * as MenuSchema from "../schemas/menu";
import { validateSchema } from "../util/schema";

const Menu = db.Menu;
const Dish = db.Dish;
const Rate = db.Rate;

export const findMenu = async (req: any, res: any) => {
  try {
    const menuResult = await Menu.findAll();
    res.status(200).send(menuResult);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occured while retrieving Menu",
    });
  }
};

export const findMenuWithDishes = async (req: any, res: any) => {
  try {
    const { resturant_id } = req.query;
    if (!resturant_id) {
      return res.status(400).send({ message: "Missing restaurant ID" });
    }
    const menuResult = await Menu.findAll({
      where: { resturant_id: resturant_id },
    });

    const menuArray = menuResult.map((menu: any) => {
      const menuData = menu.toJSON();
      return {
        ...menuData,
        dishes: [],
      };
    });

    for (const menu of menuArray) {
      const dishesResult = await Dish.findAll({
        where: { menu_id: menu.id },
      });

      const dishesArray = dishesResult.map((dish: any) => {
        const dishData = dish.toJSON();
        return {
          ...dishData,
          ratings: [],
        };
      });

      menu.dishes = dishesArray;

      for (const dish of dishesArray) {
        const ratingResult = await Rate.findAll({
          where: { dish_id: dish.id },
        });

        dish.ratings = ratingResult;
      }
    }

    res.status(200).send(menuArray);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving Menu",
    });
  }
};
