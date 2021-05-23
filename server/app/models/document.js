const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const documents = new Schema(
    {
        type: { type: String },
        parent_part: {
            title: { type: String }
        },
        children_parts: [
            {
                _id: false,
                index: Number,
                title: String,
                content: [String],
                sort: [Number]
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('documents', documents);
