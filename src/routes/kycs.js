const kycController = require("./../controllers/kycController");
const { verifyToken, restrictTO } = require("../middlewares/auth");
// const { verifyKyc } = require("./../middlewares/kyc");

module.exports = (app) => {
  app.get("/kyc", verifyToken, restrictTO("admin"), kycController.getAllKyc);
  app.put("/kyc", verifyToken, kycController.updateKyc);
  app.put(
    "/kyc/:id",
    verifyToken,
    restrictTO("admin"),
    kycController.KycUpdateByAdmin
  );
};
