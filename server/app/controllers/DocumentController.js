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
        console.log(req.body);
        const { parentPartTitle, childrenPartContent, type } = req.body;
        if (req.body) {
            const obj = {
                type,
                parent_part: { title: parentPartTitle.title },
                children_parts: childrenPartContent.map((value, index) => {
                    const ChildrenPartTitle = value.content.shift();
                    value.sort.shift();
                    return {
                        content: value.content,
                        sort: value.sort,
                        index,
                        title: ChildrenPartTitle,
                    }
                })
            }
            var storeData = new documentModel(obj);
            try {
                await storeData.save();
                return res.json({ success: true, message: "Finish storing" });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }
        return res.status(400).json({ notifi: 'bad request' });
    }
    //[PUT] /api/document/:id/update
    update(req, res, next) {
        const { id } = req.params;
        var obj = storeDocument(req.body);
        documentModel.updateOne({ _id: id }, obj)
            .then(() => {
                res.redirect('back');
            })
    }
    //[DELETE] /api/document/:id/delete
    delete(req, res, next) {
        const { id } = req.params;
        documentModel.delete({ _id: id })
            .then(() => {
                res.redirect('/document');
            })
            .catch(err => {
                res.status(404).json({ success: fasle, message: err.message });
            })
    }

}

module.exports = new DocumentController;