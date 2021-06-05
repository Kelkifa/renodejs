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
            return res.json({ success: true, words: response });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Interval Server" });
        }
    }
    /**[POST]
     * Store data
     * private
     */
    async store(req, res, next) {
        const obj = req.body;
        if (obj) {
            try {
                const storeWord = new wordModel(obj);
                storeWord.save();
                return res.json({ success: true, message: "Store Successfully" });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server" });
            }
        }
        return res.status(400).json({ success: false, message: "Bad Request" });
    }
}

module.exports = new WordController;