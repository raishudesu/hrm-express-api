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
      include: {
        employees_education: {
          include: {
            institutions: true,
          },
        },
        employees_relatives: {
          include: {
            Relatives: true,
          },
        },
        employees_ext_involvements: {
          include: {
            institutions: true,
          },
        },
        employees_has_trainings: {
          include: {
            trainings: true,
          },
        },
        employees_prof_eligibility: {
          include: {
            professional_exams: true,
          },
        },
        employees_unitassignments: {
          include: {
            departments: true,
          },
        },
        service_records: {
          include: {
            contract_types: true,
            job_positions: true,
          },
        },
        skills_has_employees: {
          include: {
            skills: true,
          },
        },
      },
    });
    if (!employee) throw "Such employee does not exist";
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
