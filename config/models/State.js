const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
    }

});

module.exports = State = mongoose.model("state", StateSchema);
