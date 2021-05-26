const documentModel = require('../models/document');
const storeDocument = require('../cores/storeDocument');

class DocumentController {
    //[GET] /api/document
    index(req, res, next) {
        if (req.query.type) {
            documentModel.find({ type: req.query.type })
                .then(documents => {
                    // console.log(documents);
                    console.log("query:  " + req.query.type);
                    res.json(documents);
                })
        }
        else {
            res.json("not thing");

        }
    }
    //[POST] /api/document/create
    create(req, res, next) {
        var obj = storeDocument(req.body);
        var data = new documentModel(obj);
        data.save();
        res.json(req.body);
    }
}

module.exports = new DocumentController;