require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // const dbName = "todoList";
    const db = client.db("todoList");
    collection = db.collection("todos");

    console.log("connected to db");
  } catch (error) {
    console.error(error);
  }
}

const getCollection = () => {
  return collection;
};

module.exports = { connectDB, getCollection };
