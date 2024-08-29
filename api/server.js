const mongoose = require('mongoose');
//const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://admin:NvsRHQ2sS8TocN3g@kedd-cluster.ilkozbn.mongodb.net/kedd-db?retryWrites=true&w=majority&appName=Kedd-Cluster";

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  }
  catch(e){
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = connectDB;