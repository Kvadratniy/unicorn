"use server";
import { Profile } from "@prisma/client";
import prisma, { wrapper } from "@/app/lib/prisma";

type ProfileDTO = Pick<Profile, "name" | "phone" | "about" | "userId">;

interface ProfileListType {
  page?: number;
  pageSize?: number;
  search?: string;
}

export const getProfileById = async (id: number) => {
  return await prisma.profile.findUnique({
    where: { id },
  });
};

export const createProfile = async (data: ProfileDTO) => {
  return wrapper(async () => {
    const profile = await prisma.profile.create({
      data,
    });
    return profile;
  });
};

export const associateProfile = (id: number, userId: number) => {
  return wrapper(async () => {
    await prisma.profile.update({
      where: {
        id,
      },
      data: {
        userId,
      },
    });
  });
};

export async function getProfiles({
  page = 1,
  pageSize = 10,
  search = "",
}: ProfileListType): Promise<{
  items: Profile[];
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
        phone?: {
          contains: string;
          mode: "insensitive";
        };
      }[];
    } = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
      ];
    }

    // Fetch the list of users with pagination and search
    const items = await prisma.profile.findMany({
      where,
      skip,
      take: pageSize,
    });

    // Count the total number of users for the given search
    const totalItems = await prisma.profile.count({ where });

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}

// Update a profile
export const updateProfile = async (id: number, data: ProfileDTO) => {
  try {
    const profile = await prisma.profile.update({
      where: {
        id,
      },
      data,
    });
    return profile;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating profile");
  }
};

// Delete a profile
export const deleteProfile = async (id: number) => {
  try {
    const profile = await prisma.profile.delete({
      where: {
        id,
      },
    });
    return profile;
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting profile");
  }
};
