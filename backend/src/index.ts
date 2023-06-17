import db from "./models/index";
import routes from "./routes";
import express from "express";

require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http:localhost:3000",
  })
);
db.sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
