const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const keyTrain = new Schema(
    {
        content: { type: String },
        name: { type: String, unique: true }
    },
    {
        timestamps: true
    }
);
keyTrain.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('keytrains', keyTrain);
