const express = require("express");
const router = express.Router();
const {
  getTodo,
  sendTodo,
  deleteTodo,
  updateTodo,
  patchUpdateTodo,
} = require("../controllers/todoController");

router.get("/", getTodo);
router.post("/", sendTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);
router.patch("/:id", patchUpdateTodo);

module.exports = router;
