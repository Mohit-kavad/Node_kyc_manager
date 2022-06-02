const userRoutes = require("./users");
const authRoutes = require("./auth");
const kycRoutes = require("./kycs");

module.exports = (app) => {
  userRoutes(app);
  authRoutes(app);
  kycRoutes(app);
};
