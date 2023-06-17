import { Router } from "express";
import * as Menu from "../controllers/menu";
import Auth from "../middleware/auth";

export default (app: any): any => {
  const router: any = Router();

  router.get("/", Auth, Menu.findMenu);
  router.get("/dish", Auth, Menu.findMenuWithDishes);

  app.use("/api/v1/menu", router);
};
