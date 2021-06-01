const userModel = require('../models/users');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const secrectKey = 'asidsaudiuwe9qe#@&#*^#!iqoeuqpwo2132';
class UserController {
    /** [POST]//api/user/register  
     * desc: Register
     * access: public 
     */
    async register(req, res, next) {
        const { fullname, username, password, admin } = req.body;

        /** Varidator */
        if (!username || !password) {
            return res
                .status(400)    //bad request
                .json({ success: false, message: "Missing username or password" })
        }
        try {
            //Check for existing username
            const user = await userModel.findOne({ username })

            if (user) {
                return res.status(400).json({ success: false, message: "Username already exist" })
            }

            /** Good */
            const hashedPassword = await argon2.hash(password)
            const newUser = new userModel({ username, password: hashedPassword, fullname, admin: admin ? admin : false })
            await newUser.save();

            /** Return token */
            const accessToken = jwt.sign({ userId: newUser._id }, secrectKey)
            res.json({ success: true, message: "User is created successfully", accessToken });
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: "Internal server error" });
        }

    }

    /** Route: GET /api/user/login 
     * desc: Login
     * access: public
    */
    async login(req, res, next) {
        const { username, password } = req.body;
        /** Varidator */
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Missing name and/or password" });
        }
        try {
            //Checking for existing username
            const user = await userModel.findOne({ username });
            if (!user) {
                return res.status(400).json({ success: false, message: "Incorrect username or password" });
            }

            //Username is found
            const passwordValid = await argon2.verify(user.password, password);
            if (!passwordValid) {
                return res.status(400).json({ success: false, message: "Incorrect username or password" });
            }

            /** Can Login  */
            // Return token
            const accessToken = jwt.sign({ userId: user._id }, secrectKey)
            res.json({ success: true, message: "Login successfully", accessToken });

        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}

module.exports = new UserController;