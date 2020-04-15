const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],

});

module.exports = Group = mongoose.model("group", GroupSchema);
