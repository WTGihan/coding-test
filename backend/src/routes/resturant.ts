import * as Resturant from "../controllers/resturant";
import Auth from "../middleware/auth";

export default (app: any) => {
  const router = require("express").Router();

  router.get("/", Auth, Resturant.findAll);

  app.use("/api/v1/resturant", router);
};
