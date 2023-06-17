import { Router } from "express";
import * as Auth from "../controllers/auth";

export default (app: any): any => {
  const router: any = Router();

  router.get("/login", Auth.login);
  router.get("/signup", Auth.signUp);
  router.get("/refresh", Auth.refresh);

  app.use("/api/v1/", router);
};
