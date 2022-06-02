const userController = require("../controllers/userController");
const { verifyToken ,restrictTO} = require("../middlewares/auth");

module.exports = (app) => {
  app.get("/users", verifyToken, restrictTO('admin'), userController.getAlluser);
  app.delete("/users/:id",verifyToken, restrictTO('admin'), userController.deleteUser);
};
