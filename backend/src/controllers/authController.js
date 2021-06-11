const registerController = (req, res) => {
    return res.status(200).send({ message: 'Register Page...' });
};

const loginController = (req, res) => {
    console.log(req.body);
    res.json(req.body);
};

module.exports = { registerController, loginController };
