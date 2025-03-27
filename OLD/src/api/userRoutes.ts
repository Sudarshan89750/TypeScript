import express from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../services/userService";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

router.get("/", async (_, res) => {
  const users = await getUsers();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

router.put("/:id", async (req, res) => {
  const updatedUser = await updateUser(req.params.id, req.body);
  updatedUser ? res.json(updatedUser) : res.status(404).json({ error: "User not found" });
});

router.delete("/:id", async (req, res) => {
  const deletedUser = await deleteUser(req.params.id);
  deletedUser ? res.json({ message: "User deleted" }) : res.status(404).json({ error: "User not found" });
});

export default router;
