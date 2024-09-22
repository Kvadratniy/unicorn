"use server";
import prisma, { wrapper } from '@/app/lib/prisma';
import { type Profile, type ProfileToService, type Shift } from "@prisma/client";

interface ListParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

type EmployeeDTO = Pick<Profile, "userId">;
type ShiftDTO = Pick<Shift, "date" | "startTime" | "endTime" | "employeeId">;

export async function getServiceEmployees({
  page = 1,
  pageSize = 10,
}: ListParams): Promise<{
  items: Profile[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;

    const items = await prisma.profile.findMany({
      skip,
      take: pageSize,
    });
    const totalItems = await prisma.profile.count();

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}

export const getEmployeesSelect = async () => {
  return wrapper(async () => {
    const employees = await prisma.profile.findMany({
      include: {
        user: true,
      },
    });
    return employees.map((el) => ({
      value: el.id.toString(),
      label: el.user?.name,
    }));
  });
};

export const createEmployee = async (data: EmployeeDTO) => {
  return wrapper(async () => {
    return await prisma.profile.create({
      //@ts-ignore
      data,
    });
  });
};

export const createEmployeeService = async (data: ProfileToService) => {
  return wrapper(async () => {
    return await prisma.profileToService.create({
      data,
    });
  });
};

export const createShift = async (data: ShiftDTO) => {
  return wrapper(async () => {
    return await prisma.shift.create({
      data,
    });
  });
};
