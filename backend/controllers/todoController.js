const { ObjectId } = require("mongodb");
const { getCollection } = require("../db/db");

// ! Fetching a list of todo items

const getTodo = async (req, res) => {
  try {
    const todoCollection = getCollection();
    const todos = await todoCollection.find().toArray();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const sendTodo = async (req, res) => {
  try {
    const todoCollection = getCollection();

    const { task } = req.body;

    if (!task || typeof task !== "string") {
      return res.status(400).json({ error: "Invalid task format" });
    }

    const newTodo = await todoCollection.insertOne({ task, done: false });
    res.status(201).json({ message: "Todo added", todo: newTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoCollection = getCollection();
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const todoDelete = await todoCollection.deleteOne({
      _id: new ObjectId(id),
    });
    console.log("deleted", todoDelete);

    if (todoDelete.deletedCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("kai tari jhala", error);
  }
};

module.exports = { getTodo, sendTodo, deleteTodo };
