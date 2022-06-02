const kycController = require("./../controllers/kycController");
const { verifyToken, restrictTO } = require("../middlewares/auth");

module.exports = (app) => {
  app.post("/kyc", verifyToken, kycController.kycDetails);
};
