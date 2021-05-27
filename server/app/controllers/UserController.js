const userModel = require('../models/users');
const argon2 = require('argon2');

class UserController {
    //[POST]//api/user/register
    async register(req, res, next) {
        const { username, password } = req.body;

        // Varidation
        if (!username || !password) {
            return res
                .status(400)    //bad request
                .json({ success: false, message: "Missing username or password" })
        }

        userModel.findOne({ username })
            .then(user => {
                if (user)
                    return res.status(400).json({ success: false, message: "username already exist" });

                // Good post

            })
            .catch(erro => {
                res.json({ success: false, message: "eo cho vao " })
            })

    }
}

module.exports = new UserController;