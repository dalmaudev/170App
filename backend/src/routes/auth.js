const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/login", loginController);

router.post("/register", registerController);

module.exports = router;
