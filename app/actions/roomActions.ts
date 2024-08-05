"use server";
import prisma, { wrapper } from '@/app/lib/prisma';
import { type Room } from "@prisma/client";

type RoomDTO = Pick<Room, "name" | "description">;

// Create a new room
export const createRoom = async (data: RoomDTO) => {
  return wrapper(async () => {
    return await prisma.room.create({
      data,
    });
  });
};

// Get all rooms
export const getAllRooms = async () => {
  return wrapper(async () => {
    const rooms = await prisma.room.findMany({
      include: {
        services: {
          include: {
            service: true,
          },
        },
      },
    });

    return rooms.map((room) => ({
      id: room.id,
      name: room.name,
      description: room.description,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt,
      services: room.services.map((service) => ({
        id: service.service.id,
        name: service.service.name,
        description: service.service.description,
        createdAt: service.service.createdAt,
        updatedAt: service.service.updatedAt,
      })),
    }));
  });
};

// Get a single room by ID
export const getRoomById = async (id: number) => {
  return wrapper(async () => {
    return await prisma.room.findUnique({
      where: { id },
    });
  });
};

// Update a room by ID
export const updateRoom = async (
  id: number,
  name?: string,
  description?: string
) => {
  return wrapper(async () => {
    return await prisma.room.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
  });
};

// Delete a room by ID
export const deleteRoom = async (id: number) => {
  return wrapper(async () => {
    return await prisma.room.delete({
      where: { id },
    });
  });
};

// Filter rooms by name
export const filterRoomsByName = async (name: string) => {
  return wrapper(async () => {
    return await prisma.room.findMany({
      where: { name: { contains: name } },
    });
  });
};

// Paginate rooms
export const paginateRooms = async (page: number, pageSize: number) => {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const rooms = await prisma.room.findMany({
      skip,
      take: pageSize,
    });
    const totalRooms = await prisma.room.count();
    return {
      data: rooms,
      total: totalRooms,
      page,
      pageSize,
    };
  });
};

// Filter and paginate rooms
export const filterAndPaginateRooms = async (
  name: string,
  page: number,
  pageSize: number
) => {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const rooms = await prisma.room.findMany({
      where: { name: { contains: name } },
      skip,
      take: pageSize,
    });
    const totalRooms = await prisma.room.count({
      where: { name: { contains: name } },
    });
    return {
      data: rooms,
      total: totalRooms,
      page,
      pageSize,
    };
  });
};

export const getRoomsSelect = async () => {
  return wrapper(async () => {
    const rooms = await prisma.room.findMany();
    return rooms.map((el) => ({
      value: el.id.toString(),
      label: el.name,
    }));
  });
};