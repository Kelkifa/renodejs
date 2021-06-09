const userModel = require('../models/users');

class AdminController {
    /** [GET] /api/admin
     *  Check admin
     *  Private
     */
    async index(req, res, next) {
        // console.log(req.userId);
        try {
            const response = await userModel.findOne({ _id: req.userId }).select('admin');
            if (response.admin === true) {
                return res.json({ success: true, message: "Allow" });
            }
            return res.status(403).json({ success: false, message: "Forbidden" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Internal Server" })
        }
    }
}

module.exports = new AdminController;