const documentModel = require('../models/document');
const storeDocument = require('../cores/storeDocument');
const typesParseArr = require('../cores/typesParseArr');

class DocumentController {
    //[GET] /api/document
    async index(req, res, next) {
        const { id, type, update } = req.query;

        try {
            //Get types
            const data = await documentModel.find().select('type -_id');
            const types = typesParseArr(data);

            if (type) {
                try {
                    const titles = await documentModel.find({ type: type }).select('parent_part');
                    if (id || update) {
                        const doc = await documentModel.findOne({ _id: id || update });
                        return res.json({ success: true, types, doc, titles });
                    }
                    return res.json({ success: true, types, titles })
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ success: false, message: "Internal Server Error" })
                }
            }
            return res.json({ success: true, types });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }



    //[POST] /api/document/create
    async create(req, res, next) {
        // var obj = storeDocument(req.body);
        // var data = new documentModel(obj);
        // data.save();
        // res.redirect('back');
        if (req.body) {
            const obj = storeDocument(req.body);
            var storeData = new documentModel(obj);
            try {
                await storeData.save();
                const response = await documentModel.findOne({ parent_part: { title: obj.parent_part.title } }).select('_id')
                return res.json({ success: true, message: "Finish storing", id: response._id });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }
        return res.status(400).json({ notifi: 'bad request' });
    }
    //[PUT] /api/document/:id/update
    async update(req, res, next) {
        console.log(req.body);
        if (req.body) {
            const { id } = req.params;
            const obj = storeDocument(req.body);
            console.log(obj);
            try {
                await documentModel.updateOne({ _id: id }, obj);
                return res.json({ success: true, message: "Update Successfully", id });
            } catch (error) {
                console.log(error);
                return res.state(500).json({ success: false, massage: "Internal Server" })
            }
        }
        return res.state(400).json({ success: false, massage: "Bad request" });
    }
    //[DELETE] /api/document/:id/delete
    async delete(req, res, next) {
        const { id } = req.params;
        console.log(id);
        try {
            await documentModel.delete({ _id: id });
            res.json({ success: true, message: "Delete Successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Internal Server" });
        }
    }

}

module.exports = new DocumentController;