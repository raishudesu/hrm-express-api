import prisma from "../utils/db.server";
import type { employees } from "@prisma/client";

export const addEmployee = async (data: employees) => {
  try {
    const res = await prisma.employees.create({
      data,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

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

export const getEmployee = async (idemployees: number) => {
  try {
    const employee = await prisma.employees.findFirst({
      where: {
        idemployees,
      },
    });
    return employee;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (idemployees: number) => {
  try {
    const res = await prisma.employees.delete({
      where: {
        idemployees,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const updateEmployee = async (idemployees: number, data: employees) => {
  try {
    const res = await prisma.employees.update({
      where: {
        idemployees,
      },
      data,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
