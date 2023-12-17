import express from "express";
import { getEmployeesController } from "../controllers/employees.controller";

export const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);
