import prisma from "../utils/db.server";

export const getEmployees = async () => {
  try {
    const employees = await prisma.employees.findMany({
      take: 10,
    });

    if (!employees) throw "No employees available";

    return employees;
  } catch (error) {
    throw error;
  }
};
