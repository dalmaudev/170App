// Documentación: https://expressjs.com/en/4x/api.html#req
// Status codes: https://httpstatuses.com/

const User = require('../models/user');

const registerController = async (req, res) => {
    const body = req.body;
    try {
        const user = new User(body);
        await user.save();
        res.status(201).json({ message: `${req.body.name} registrado correctamente` });
    } catch (error) {
        console.error(error);
    }
};

const loginController = (req, res) => {
    return res.status(200).send({ message: 'Login Page...' });
};

module.exports = { registerController, loginController };
