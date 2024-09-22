"use server";
import prisma, { wrapper } from "@/app/lib/prisma";
import { type AbonnementType, type Abonnement } from "@prisma/client";

interface ListParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

type AbonnementTypeDTO = Pick<
  AbonnementType,
  "name" | "price" | "numberOfLessons" | "monthDuration"
>;

// @ts-ignore
type AbonnementDTO = Pick<Abonnement, "clientId" | "abonnementTypeId">;

export const createAbonnementType = async (
  data: AbonnementTypeDTO,
  serviceIds: number[]
) => {
  return wrapper(async () => {
    await prisma.abonnementType.create({
      data: {
        ...data,
        services: {
          create: serviceIds.map(serviceId => ({
            service: { connect: { id: serviceId } } // Создание записи для каждого serviceId
          })),
        },
      },
    });
  });
};

export const createAbonnement = async (data: AbonnementDTO) => {
  return wrapper(async () =>
    prisma.abonnement.create({
      // @ts-ignore
      data,
    })
  );
};

export async function getAbonnementTypes({
  page = 1,
  pageSize = 10,
}: ListParams): Promise<{
  items: AbonnementType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const items = await prisma.abonnementType.findMany({
      skip,
      take: pageSize,
      include: {
        services: {
          include: {
            service: true, // Включаем данные о связанных услугах
          },
        },
      },
    });
    const totalItems = await prisma.abonnementType.count();

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
  items: AbonnementType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const items = await prisma.abonnement.findMany({
      skip,
      take: pageSize,
    });
    const totalItems = await prisma.abonnement.count();

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}
