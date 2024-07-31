const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        "created": {
          "type": "String"
        },
        "firstName": {
          "type": "String"
        },
        "lastName": {
          "type": "String"
        },
        "username": {
          "type": "String"
        },
        "email": {
          "type": "String"
        },
        "watchHistory": {
          "type": [
            "String"
          ]
        },
        "playlist": {
          "type": [
            "String"
          ]
        },
        "likedVideos": {
          "type": [
            "String"
          ]
        },
        "yourChannels": {
          "type": [
            "String"
          ]
        },
        "following": {
          "type": [
            "String"
          ]
        },
        "algorithmStuff": {
          "type": "String"
        }
      }
)

module.exports = mongoose.model("User", UserSchema);

