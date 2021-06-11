const registerController = (req, res) => {
  return res.status(200).send({ message: "Register Page..." });
};

const loginController = (req, res) => {
  return res.status(200).send({ message: "Login Page..." });
};

module.exports = { registerController, loginController };
