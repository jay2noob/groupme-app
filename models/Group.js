const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile'
  }],
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }],
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Group = mongoose.model("group", GroupSchema);
