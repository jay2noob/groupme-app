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
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    image: {
      type: String,
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
    date: {
      type: Date,
    }
  }],
  posts: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    text: {
      type: String,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    postImage: {
      type: Buffer,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        }
      }
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        text: {
          type: String,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        }
      }
    ]
  }],
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Group = mongoose.model("group", GroupSchema);
