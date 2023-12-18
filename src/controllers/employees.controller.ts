import { Request, Response } from "express";
import { getEmployee, getEmployees } from "../services/employees.service";

export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const employees = await getEmployees();
    return res.status(200).json({ ok: true, employees });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

export const getEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const employee = await getEmployee(Number(id));
    return res.status(200).json({ ok: true, employee });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
