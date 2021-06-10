const router = require("express").Router();

router.post("/login", (req, res) => {
  return res.status(200).send({ message: "Login Page..." });
});

router.post("/register", (req, res) => {
  return res.status(200).send({ message: "Register Page..." });
});

module.exports = router;
