// mongoDBAPI.js

const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;
const dbName = "server_data";
const collectionName = "servers";

// Function to fetch data from MongoDB
const fetchMongoDBData = async () => {
  try {
    const client = new MongoClient(mongoURL);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();
    client.close();

    return data;
  } catch (error) {
    console.error("Error fetching MongoDB data:", error);
    throw error;
  }
};

module.exports = {
  fetchMongoDBData,
};