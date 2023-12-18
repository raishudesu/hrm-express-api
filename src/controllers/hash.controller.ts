import { hash } from "bcrypt";
import { Request, Response } from "express";

export const hashController = async (req: Request, res: Response) => {
  try {
    const { text } = req.params;
    const hashedPwd = await hash(text, 10);

    return res.status(200).json(hashedPwd);
  } catch (error) {
    return res.status(500).json(error);
  }
};
