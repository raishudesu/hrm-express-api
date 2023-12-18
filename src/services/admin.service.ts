import prisma from "../utils/db.server";
import bcrypt from "bcrypt";

export const adminAuth = async (username: string, password: string) => {
  try {
    const admin = await prisma.admins.findUnique({
      where: {
        username,
      },
    });

    if (!admin) throw "Admin does not exist";

    const authenticated = await bcrypt.compare(password, admin.password);

    if (!authenticated) throw "Incorrect password";

    return admin;
  } catch (error) {
    throw error;
  }
};
