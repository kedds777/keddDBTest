const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://admin:NvsRHQ2sS8TocN3g@kedd-cluster.ilkozbn.mongodb.net/?retryWrites=true&w=majority&appName=Kedd-Cluster";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('kedd-db');
    const collection = database.collection('kedd-collection');
    const doc = {random: "Hello!"};

    const result = await collection.insertOne(doc);
    console.log(`A doc has been inserted: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);