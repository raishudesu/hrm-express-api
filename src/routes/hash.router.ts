import express from "express";
import { hashController } from "../controllers/hash.controller";

export const hashRouter = express.Router();

hashRouter.get("/:text", hashController);
