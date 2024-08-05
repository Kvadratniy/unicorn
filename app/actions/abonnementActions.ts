"use server";
import prisma, { wrapper } from "@/app/lib/prisma";
import { type AbonementType, type Abonement } from "@prisma/client";

interface ListParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

type AbonementTypeDTO = Pick<
  AbonementType,
  "name" | "price" | "numberOfLessons" | "monthDuration" | "serviceId"
>;

type AbonementDTO = Pick<Abonement, "clientId" | "abonementTypeId">;

export const createAbonnementType = async (data: AbonementTypeDTO) => {
  return wrapper(async () =>
    prisma.abonementType.create({
      data,
    })
  );
};

export const createAbonnement = async (data: AbonementDTO) => {
  return wrapper(async () =>
    prisma.abonement.create({
      data,
    })
  );
};

export async function getAbonnementTypes({
  page = 1,
  pageSize = 10,
}: ListParams): Promise<{
  items: AbonementType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const items = await prisma.abonementType.findMany({
      skip,
      take: pageSize,
      include: {
        service: true,
      },
    });
    const totalItems = await prisma.abonementType.count();

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}

export async function getAbonnements({
  page = 1,
  pageSize = 10,
}: ListParams): Promise<{
  items: AbonementType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const items = await prisma.abonement.findMany({
      skip,
      take: pageSize,
    });
    const totalItems = await prisma.abonement.count();

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}
