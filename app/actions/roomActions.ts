"use server";
import prisma, { wrapper } from '@/app/lib/prisma';
import { type Location } from "@prisma/client";

type LocationDTO = Pick<Location, "name" | "description">;

// Create a new location
export const createLocation = async (data: LocationDTO) => {
  return wrapper(async () => {
    return await prisma.location.create({
      data,
    });
  });
};

// Get all locations
export const getAllLocations = async () => {
  return wrapper(async () => {
    const locations = await prisma.location.findMany({
      include: {
        services: {
          include: {
            service: true,
          },
        },
      },
    });

    return locations.map((location) => ({
      id: location.id,
      name: location.name,
      description: location.description,
      createdAt: location.createdAt,
      updatedAt: location.updatedAt,
      services: location.services.map((service) => ({
        id: service.service.id,
        name: service.service.name,
        description: service.service.description,
        createdAt: service.service.createdAt,
        updatedAt: service.service.updatedAt,
      })),
    }));
  });
};

// Get a single location by ID
export const getLocationById = async (id: number) => {
  return wrapper(async () => {
    return await prisma.location.findUnique({
      where: { id },
    });
  });
};

// Update a location by ID
export const updateLocation = async (
  id: number,
  name?: string,
  description?: string
) => {
  return wrapper(async () => {
    return await prisma.location.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
  });
};

// Delete a location by ID
export const deleteLocation = async (id: number) => {
  return wrapper(async () => {
    return await prisma.location.delete({
      where: { id },
    });
  });
};

// Filter locations by name
export const filterLocationsByName = async (name: string) => {
  return wrapper(async () => {
    return await prisma.location.findMany({
      where: { name: { contains: name } },
    });
  });
};

// Paginate locations
export const paginateLocations = async (page: number, pageSize: number) => {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const locations = await prisma.location.findMany({
      skip,
      take: pageSize,
    });
    const totalLocations = await prisma.location.count();
    return {
      data: locations,
      total: totalLocations,
      page,
      pageSize,
    };
  });
};

// Filter and paginate locations
export const filterAndPaginateLocations = async (
  name: string,
  page: number,
  pageSize: number
) => {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const locations = await prisma.location.findMany({
      where: { name: { contains: name } },
      skip,
      take: pageSize,
    });
    const totalLocations = await prisma.location.count({
      where: { name: { contains: name } },
    });
    return {
      data: locations,
      total: totalLocations,
      page,
      pageSize,
    };
  });
};

export const getLocationsSelect = async () => {
  return wrapper(async () => {
    const locations = await prisma.location.findMany();
    return locations.map((el) => ({
      value: el.id.toString(),
      label: el.name,
    }));
  });
};