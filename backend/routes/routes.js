const express = require("express");
const router = express.Router();
const {
  getTodo,
  sendTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getTodo);
router.post("/", sendTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
