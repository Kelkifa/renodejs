const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const users = new Schema(
    {
        fullname: { type: String },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);
users.plugin(mongoose_delete);
users.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('users', users);
