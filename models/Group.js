const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],

});

module.exports = Group = mongoose.model("group", GroupSchema);
