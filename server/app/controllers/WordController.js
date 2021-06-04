const wordModel = require('../models/words');

class WordController {
    /**[GET] /api/word
     *  Get all data from word model
     *  Public
     */
    async index(req, res, next) {
        try {
            const response = await wordModel.find();
            console.log(response);
            res.json({ success: true, words: response });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Interval Server" });
        }
    }
}

module.exports = new WordController;