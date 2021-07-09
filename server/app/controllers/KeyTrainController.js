const keytrainModel = require('../models/keyTrain');

class KeyTrainController {
    async index(req, res, next) {
        try {
            var content = await keytrainModel.findOne({ name: "story" }).select('content name');
            return res.json({ success: true, content })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Bad Request" })
        }
    }
}

module.exports = new KeyTrainController