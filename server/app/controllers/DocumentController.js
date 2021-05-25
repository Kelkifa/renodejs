const documentModel = require('../models/document');

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
        console.log(req.body);
        res.send('document create');
    }
}

module.exports = new DocumentController;