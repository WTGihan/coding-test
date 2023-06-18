import { Router } from "express";
import * as Auth from "../controllers/auth";

export default (app: any): any => {
  const router: any = Router();

  router.post("/login", Auth.login);
  router.post("/signup", Auth.signUp);
  router.post("/refresh", Auth.refresh);

  app.use("/api/v1/", router);
};
