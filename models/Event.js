const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  groupID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "profile",
  },
  going: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile",
      },
    },
  ],
  maybe: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile",
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile",
      },
      text: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
  },
});

module.exports = Event = mongoose.model("event", EventSchema);
