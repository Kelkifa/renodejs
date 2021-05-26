const documentModel = require('../models/document');
const storeDocument = require('../cores/storeDocument');

class DocumentController {
    //[GET] /api/document
    index(req, res, next) {
        if (req.query.id) {
            documentModel.find({ type: req.query.type })
                .then(documents => {
                    documentModel.findOne({ _id: req.query.id })
                        .then(document => {
                            res.json({ document, documents });
                        })
                })
        }
        else if (req.query.type) {
            documentModel.find({ type: req.query.type })
                .then(documents => {
                    res.json(documents);
                })
        }
        else {
            res.json("not thing");
        }
    }
    //[GET] /api/document/:id/update
    getUpdate(req, res, next) {
        const id = req.params.id;
        documentModel.findOne({ _id: id })
            .then(data => {
                res.json(data);
            })
    }
    //[POST] /api/document/create
    create(req, res, next) {
        var obj = storeDocument(req.body);
        var data = new documentModel(obj);
        data.save();
        res.redirect('back');
    }
}

module.exports = new DocumentController;