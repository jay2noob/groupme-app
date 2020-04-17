const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state'
    }

});

module.exports = City = mongoose.model("city", CitySchema);
