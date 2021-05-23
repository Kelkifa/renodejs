const documentModel = require('../models/document');

class DocumentController {
    index(req, res, next) {
        documentModel.find()
            .then(documents => {
                console.log("query:  " + req.query.type);
                res.json(documents);
            })
    }
}

module.exports = new DocumentController;