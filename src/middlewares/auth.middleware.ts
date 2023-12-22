import { NextFunction, Request, Response } from "express";
import { adminAuth } from "../services/admin.service";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const headers = req.headers;
    const adminUsername = headers["admin-username"];
    const adminPassword = headers["admin-password"];

    if (!adminUsername || !adminPassword)
      return res.status(401).json({
        ok: false,
        message: "Unauthorized. Enter complete admin credentials",
      });

    await adminAuth(
      adminUsername as string,
      adminPassword as string
    );

    next();
  } catch (error) {
    return res.status(401).json({ ok: false, error });
  }
};
