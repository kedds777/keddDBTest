const mongoose = require('mongoose');
require('dotenv').config()
const data = require('../dataLoad.js');
const Video = require('./Models/videoModel.js');
//const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
//const uri = "mongodb+srv://admin:NvsRHQ2sS8TocN3g@kedd-cluster.ilkozbn.mongodb.net/kedd-db?retryWrites=true&w=majority&appName=Kedd-Cluster";

const connectDB = async () => {
  try{    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");

    //One time load of the database
    if(process.env.LOAD_DB === 'true'){
    for(let i=0; i<process.env.DB_LOAD_COUNT; i++){
      let video = new Video(data[i]);
      video = await video.save();
    }
  }
  }
  catch(e){
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = connectDB;