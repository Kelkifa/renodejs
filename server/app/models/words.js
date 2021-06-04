const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const words = new Schema(
    {
        description: { type: String },
        topic: { type: String },
        word: { type: String, required: true },
        mean: { type: String },
        image: { type: String },
    },
    {
        timestamps: true
    }
);
words.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('words', words);
