const express = require("express");
const router = express.Router();
const {
  getTodo,
  sendTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.get("/", getTodo);
router.post("/", sendTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;
