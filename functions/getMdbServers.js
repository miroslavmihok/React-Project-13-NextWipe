const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;
const dbName = "server_data";
const collectionName = "servers";

// Function to fetch data from MongoDB
const handler = async () => {
  try {
    const client = new MongoClient(mongoURL);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();
    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};

module.exports = {
  handler,
};
