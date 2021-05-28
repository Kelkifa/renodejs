const documentModel = require('../models/document');
const storeDocument = require('../cores/storeDocument');
const getDocumentType = require('../cores/getDocumentType');

class DocumentController {
    /** GET /api/document */
    async index(req, res, next) {
        const { id, type, update } = req.query;
        try {
            var types = await documentModel.find({}).select('type -_id');
            types = getDocumentType(types);
            if (!type && !id) {
                return res.json({ success: true, types })
            }
            else if (type && (id || update)) {
                try {
                    var [document, titles] = await Promise.all([
                        documentModel.findOne({ _id: id || update }),
                        documentModel.find({ type }).select('parent_part')
                    ]);
                    return res.json({ success: true, types, document, titles });

                } catch (error) {
                    console.log(error);
                    return res.status(400).json({ success: false, message: "Internal Server" });
                }
            }
            else if (type) {
                try {
                    var titles = await documentModel.find({ type }).select('parent_part');
                    return res.json({ success: true, titles, types });
                } catch (error) {
                    console.log(error);
                    return res.status(400).json({ success: false, message: "Internal Server" });
                }
            }
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, message: "Internal Server error" });
        }


        return res.status(400).json({ success: false, message: "Bad request" })
    }










    // //[GET] /api/document
    // index(req, res, next) {
    //     const { id, type } = req.query;
    //     if (id || update) {
    //         var cache = id ? id : update;
    //         documentModel.find({ type })
    //             .then(documents => {
    //                 documentModel.findOne({ _id: cache })
    //                     .then(document => {
    //                         res.json({ document, documents });
    //                     })
    //             })
    //     }
    //     else if (type) {
    //         documentModel.find({ type })
    //             .then(documents => {
    //                 res.json(documents);
    //             })
    //     }
    //     else {
    //         res.json("not thing");
    //     }
    // }
    // //[POST] /api/document/create
    // create(req, res, next) {
    //     var obj = storeDocument(req.body);
    //     var data = new documentModel(obj);
    //     data.save();
    //     res.redirect('back');
    // }
    // //[PUT] /api/document/:id/update
    // update(req, res, next) {
    //     const { id } = req.params;
    //     var obj = storeDocument(req.body);
    //     documentModel.updateOne({ _id: id }, obj)
    //         .then(() => {
    //             res.redirect('back');
    //         })
    // }
    // //[DELETE] /api/document/:id/delete
    // delete(req, res, next) {
    //     const { id } = req.params;
    //     documentModel.delete({ _id: id })
    //         .then(() => {
    //             res.redirect('/document');
    //         })
    //         .catch(err => {
    //             res.status(404).json({ success: fasle, message: err.message });
    //         })
    // }

}

module.exports = new DocumentController;