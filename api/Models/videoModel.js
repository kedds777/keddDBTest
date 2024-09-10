const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  id: { type: String }, // String
  title: { type: String }, // String
  public: {type: Boolean}, // Boolean value
  uploaded: { type: Date, default: Date.now }, // Date with default current time
  likes: { type: Number, default: 0 }, // Integer
  dislikes: { type: Number, default: 0 }, // Integer
  description: { type: String }, // String
  //channel: { type: ChannelSchema }, // Embedded document for Channel
  //comments: [CommentsSchema], // Array of embedded Comments
  views: { type: Number, default: 0 }, // Integer
  tags: [{ type: String }], // Array of strings (tags)
  thumbnail: { type: String }, // String
});

module.exports = mongoose.model("Video", VideoSchema);