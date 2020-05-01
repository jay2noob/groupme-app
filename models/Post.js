const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  groupID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "profile"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  postImage: {
    type: Buffer
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile"
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile"
      },
      text: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now
      },
    },
  ],
});

module.exports = Post = mongoose.model("post", PostSchema);
