import { Router } from "express";

const router = Router();

let todos: string[] = [];

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a todo
router.post("/", (req, res) => {
  const newTodo = req.body.text;
  todos.push(newTodo);
  res.status(201).json({ message: "Todo added", data: newTodo });
});

// Update a todo
router.put("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const newText = req.body.text;
  if (index >= 0 && index < todos.length) {
    todos[index] = newText;
    res.status(200).json({ message: "Todo updated", data: newText });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Delete a todo
router.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    res.status(200).json({ message: "Todo deleted" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

export default router;