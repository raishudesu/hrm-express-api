import { Request, Response } from "express";

export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    return res.json("working");
  } catch (error) {}
};
