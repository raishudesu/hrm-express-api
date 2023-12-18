import express from "express";
import {
  getEmployeeController,
  getEmployeesController,
} from "../controllers/employees.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const employeesRouter = express.Router();

employeesRouter.get("/", [authMiddleware], getEmployeesController);

employeesRouter.get("/:id", [authMiddleware], getEmployeeController);
