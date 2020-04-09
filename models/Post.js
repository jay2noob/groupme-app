const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    family: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'family'
    },
    post: {
        type: String,
    },
    image: {
        type: String,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]

});

module.exports = Post = mongoose.model("post", PostSchema);