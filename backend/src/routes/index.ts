import dishRoutes from "./dish";
import menuRoutes from "./menu";
import resturantRoutes from "./resturant";
import authRoutes from "./auth";

export default (app: any) => {
  authRoutes(app);
  dishRoutes(app);
  menuRoutes(app);
  resturantRoutes(app);
};
