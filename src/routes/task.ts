import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask, getTaskCount,
} from "../controllers/task";

const router = express.Router();

router.get("/", getTasks);
router.get("/count", getTaskCount);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
