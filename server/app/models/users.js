const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const users = new Schema(
    {
        username: { type: String },
        password: { type: String },
        admin: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);
users.plugin(mongoose_delete);
users.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('users', users);
