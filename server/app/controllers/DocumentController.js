const documentModel = require('../models/document');

class DocumentController {
    index(req, res, next) {
        documentModel.find()
            .then(documents => {
                res.json(documents);
            })
    }
}

module.exports = new DocumentController;