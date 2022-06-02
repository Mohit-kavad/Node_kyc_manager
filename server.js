const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./src/routes");
const { sequelize } = require("./models");

dotenv.config({ path: "./.env" });

app.use(express.json());

// routers

routes(app);

// server

app.listen(process.env.PORT, async () => {
  console.log(`server running on port ${process.env.PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
