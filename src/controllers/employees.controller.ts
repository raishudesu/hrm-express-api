import { Request, Response } from "express";
import { getEmployees } from "../services/employees.service";

export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const employees = await getEmployees();
    return res.status(200).json({ ok: true, employees });
  } catch (error) {
    return res.status(200).json({ ok: false, error });
  }
};
