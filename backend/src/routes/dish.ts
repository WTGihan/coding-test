import * as Dish from "../controllers/dish";
import Auth from "../middleware/auth";

export default (app: any) => {
  const router = require("express").Router();

  router.get("/", Auth, Dish.findDishes);

  app.use("/api/v1/dish", router);
};
