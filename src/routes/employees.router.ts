import express from "express";
import { getEmployeesController } from "../controllers/employees.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const employeesRouter = express.Router();

employeesRouter.get("/", [authMiddleware], getEmployeesController);
