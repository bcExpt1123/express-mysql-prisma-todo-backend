import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/task";

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const total = await taskService.getTaskCount();
    const completed = await taskService.getTaskCount(true);
    res.json({total, completed});
  } catch (err) {
    next(err);
  }
};

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.params.id) {
      res.status(400).json({
        error: "Missing id",
      });
      return;
    }
    if(isNaN(Number(req.params.id))) {
      res.status(400).json({
        error: "Invalid id",
      });
      return;
    }
    const task = await taskService.getTask(req.params.id);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, color } = req.body;
    if(!title) {
      res.status(400).json({
        error: "Missing title",
      });
      return;
    }
    if(!color) {
      res.status(400).json({
        error: "Missing color",
      });
      return;
    }
    const task = await taskService.createTask({ title, color });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if(isNaN(Number(id))) {
      res.status(400).json({
        error: "Invalid id",
      });
      return;
    }
    const { title, color, completed } = req.body;
    const existingTask = await taskService.getTask(id);
    if(!existingTask) {
      res.status(400).json({
        error: "Not found task with id " + id,
      })
    }
    const isCompleted = typeof completed === "undefined" ? undefined : completed === "true";
    const task = await taskService.updateTask(Number(id), { title, color, completed: isCompleted });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if(isNaN(Number(id))) {
      res.status(400).json({
        error: "Invalid id",
      });
      return;
    }
    const existingTask = await taskService.getTask(id);
    if(!existingTask) {
      res.status(400).json({
        error: "Not found task with id " + id,
      })
    }
    await taskService.deleteTask(Number(id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
