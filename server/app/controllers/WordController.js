const wordModel = require('../models/words');
const userModel = require('../models/users');

class WordController {
    /**[GET] /api/word
     *  Get all data from word model
     *  Public
     */
    async index(req, res, next) {
        try {
            const response = await wordModel.find();
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
                //Check admin
                const { admin } = await userModel.findOne({ _id: req.userId }).select('admin -_id');
                if (admin === true) {
                    const storeWord = new wordModel(obj);
                    storeWord.save();
                    return res.json({ success: true, message: "Store Successfully" });
                }
                return res.status(403).json({ success: false, message: "Forbidden" });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server" });
            }
        }
        return res.status(400).json({ success: false, message: "Bad Request" });
    }
    /** [POST] /api/word/find
     * Find data
     * public
     */
    async FindWord(req, res, next) {
        const { type, value } = req.body;
        if (type && value) {
            try {
                const response = await wordModel.find({ [type]: { $regex: `${value}`, $options: 'i' } }).exec();
                return res.json({ success: true, words: response });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server" });
            }
        }
        return res.status(400).json({ success: false, message: "Bad Request" });
    }
    /** [PUT] /api/word/:id/update
     *  update word
     *  private
     */
    async update(req, res, next) {
        if (req.body) {
            delete req.body.deleted;
            delete req.body._id;
            delete req.body.createdAt;
            delete req.body.updatedAt;
            delete req.body.__v;
            try {
                const { admin } = await userModel.findOne({ _id: req.userId }).select('admin -_id');
                if (admin === true) {
                    await wordModel.updateOne({ _id: req.params.id }, req.body);
                    return res.json({ success: true, message: "Update Successfully" });
                }
                return res.status(403).json({ success: false, message: "Forbidden" });
            } catch (error) {
                return res.status(500).json({ success: false, message: "Internal Server" });
            }
        }
        return res.status(400).json({ success: false, message: "Bad Request" });
    }
    /** [DELETE] /api/word/:id/delete
     *  sort delete a word
     *  private
     */
    async delete(req, res, next) {
        const id = req.params.id;
        if (id) {
            try {
                //Check admin
                const { admin } = await userModel.findOne({ _id: req.userId }).select('admin -_id');
                if (admin === true) {
                    await wordModel.delete({ _id: id });
                    return res.json({ success: true, message: "Delete Successfully" });
                }
                return res.status(403).json({ success: false, message: "Forbidden" });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server" });
            }
        }
        return res.status(400).json({ success: false, message: "Bad Request" });
    }
}

module.exports = new WordController;