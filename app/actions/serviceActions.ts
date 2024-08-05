
"use server";
import prisma, { wrapper } from '@/app/lib/prisma';
import {
  type Service,
  type RoomToService,
} from "@prisma/client";

interface ListParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export const createService = async ({
  name,
  description,
  roomId,
}: Pick<Service, "name" | "description"> & Pick<RoomToService, "roomId">) => {
  return wrapper(async () => {
    const newService = await prisma.service.create({
      data: {
        name,
        description,
      },
    });

    if (roomId) {
      await prisma.roomToService.create({
        data: {
          roomId,
          serviceId: newService.id,
        },
      });
    }

    return;
  });
};

export const createRoomToService = async (data: RoomToService) => {
  return wrapper(async () => {
    return await prisma.roomToService.create({
      data,
    });
  });
};

export async function getServices({
  page = 1,
  pageSize = 10,
  search = "",
}: ListParams): Promise<{
  items: Service[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const where: {
      OR?: {
        name?: {
          contains: string;
          mode: "insensitive";
        };
        description?: {
          contains: string;
          mode: "insensitive";
        };
      }[];
    } = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const items = await prisma.service.findMany({
      where,
      skip,
      take: pageSize,
      include: {
        rooms: {
          include: {
            room: true,
          },
        },
      },
    });

    const totalItems = await prisma.service.count({ where });

    return {
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        rooms: item.rooms.map((r) => ({
          id: r.room.id,
          name: r.room.name,
          description: r.room.description,
          createdAt: r.room.createdAt,
          updatedAt: r.room.updatedAt,
        })),
      })),
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}

export const getAllServices = async () => {
  return wrapper(async () => {
    const services = await prisma.service.findMany();
    return services;
  });
};

export const getServiceSelect = async () => {
  return wrapper(async () => {
    const services = await prisma.service.findMany();
    return services.map((el) => ({
      value: el.id.toString(),
      label: el.name,
    }));
  });
};
