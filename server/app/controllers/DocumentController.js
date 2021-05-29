const documentModel = require('../models/document');
const storeDocument = require('../cores/storeDocument');
const getDocumentType = require('../cores/getDocumentType');

class DocumentController {
    /** GET /api/document */
    async index(req, res, next) {
        const { id, type, update } = req.query;

        if (!id && !type && !update) {
            try {
                var types = await documentModel.find().select('type -_id');
                types = getDocumentType(types);
                return res.json({ success: true, types });
            } catch (error) {
                console.log(error);
                return res.status(400).json({ success: false, message: "Internal Server" });
            }
        }
        if (type) {
            try {
                var titles = await documentModel.find({ type }).select('parent_part');
                return res.json({ success: true, titles });
            } catch (error) {
                console.log(error);
                return res.status(400).json({ success: false, message: "Internal Server" });
            }
        }

        return res.status(400).json({ success: false, message: "Bad request" })
    }

}




module.exports = new DocumentController;


// if(type){
//     try{
//         var types = await documentModel.find().select('type -_id');
//         types = getDocumentType(types);
//         return res.json({success:true, types});
//     }catch(error){
//         console.log(error);
//         return res.status(400).json({ success: false, message: "Internal Server" });
//     }
// }
// if(update){
//     try{
//         var document = await documentModel.findOne({_id: update})
//         return res.json({ success: true, document});
//     }catch(error){
//         console.log(error);
//         return res.status(400).json({ success: false, message: "Internal Server" });
//     }
// }
// if(id){
//     try{
//         var document = await documentModel.findOne({_id: id})
//         return res.json({ success: true, document});
//     }catch(error){
//         console.log(error);
//         return res.status(400).json({ success: false, message: "Internal Server" });
//     }
// }



// try {
//     var types = await documentModel.find({}).select('type -_id');
//     types = getDocumentType(types);
//     if (!type && !id) {
//         return res.json({ success: true, types })
//     }
//     else if (type && (id || update)) {
//         try {
//             var [document, titles] = await Promise.all([
//                 documentModel.findOne({ _id: id || update }),
//                 documentModel.find({ type }).select('parent_part')
//             ]);
//             return res.json({ success: true, types, document, titles });

//         } catch (error) {
//             console.log(error);
//             return res.status(400).json({ success: false, message: "Internal Server" });
//         }
//     }
//     else if (type) {
//         try {
//             var titles = await documentModel.find({ type }).select('parent_part');
//             return res.json({ success: true, titles, types });
//         } catch (error) {
//             console.log(error);
//             return res.status(400).json({ success: false, message: "Internal Server" });
//         }
//     }
// } catch (err) {
//     console.log(err)
//     return res.status(400).json({ success: false, message: "Internal Server error" });
// }
// return res.status(400).json({ success: false, message: "Bad request" })