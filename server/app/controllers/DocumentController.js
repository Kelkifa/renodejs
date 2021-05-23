const documentModel = require('../models/document');

class DocumentController {
    index(req, res, next) {
        if(req.query.type){
            documentModel.find({type: req.query.type})
                .then(documents => {
                    // console.log(documents);
                    console.log("query:  " + req.query.type);
                    res.json(documents);
                })
        }
                else{
                    res.json("not thing");

                }
    }
}

module.exports = new DocumentController;