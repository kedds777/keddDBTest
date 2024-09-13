const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  accountId: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now, // Automatically sets the date/time when a new user is created
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  authToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  preferences: {
    darkMode: {
      type: Boolean,
      default: false,
    },
    searchHistory: {
      type: [String], // Array of strings
      default: [],
    },
    watchHistory: {
      type: [String], // Array of strings
      default: [],
    },
    likedVideos: {
      type: [String], // Array of strings
      default: [],
    },
    yourChannels: {
      type: [String], // Array of strings
      default: [],
    },
    subscriptions: {
      type: [String], // Array of strings
      default: [],
    },
    algorithmStuff: {
      type: String,
    },
  },
});

module.exports = mongoose.model("User", UserSchema);
