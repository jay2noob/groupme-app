const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  description: {
    type: String
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  }],
  events: [{
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'event'
    }
  }],
  posts: [{
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  }],
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Group = mongoose.model("group", GroupSchema);
