import prisma, { wrapper } from '@/app/lib/prisma';
import { type User, type Role } from "@prisma/client";

interface UserFilter {
  name?: string;
  email?: string;
  role?: Role;
}

interface GetUsersInput {
  page?: number;
  pageSize?: number;
  search?: string;
}

export async function getUsers({
  page = 1,
  pageSize = 10,
  search = "",
}: GetUsersInput): Promise<{
  items: User[];
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
        email?: {
          contains: string;
          mode: "insensitive";
        };
      }[];
    } = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    // Fetch the list of users with pagination and search
    const items = await prisma.user.findMany({
      where,
      skip,
      take: pageSize,
    });

    // Count the total number of users for the given search
    const totalItems = await prisma.user.count({ where });

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}

export async function getUserById({ id }: { id: number }) {
  return wrapper(async () => {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  });
}

// Удаление пользователя
export async function deleteUser(id: number): Promise<User> {
  return wrapper(async () => {
    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  });
}

// Получение пользователей по фильтру
export async function getUsersByFilter(filter: UserFilter): Promise<User[]> {
  return wrapper(async () => {
    const users = await prisma.user.findMany({
      where: {
        AND: [
          filter.name ? { name: filter.name } : {},
          filter.email ? { email: filter.email } : {},
          filter.role ? { role: filter.role } : {},
        ],
      },
      include: {
        accounts: true,
        sessions: true,
      },
    });
    return users;
  });
}

export const getUserSelect = async () => {
  return wrapper(async () => {
    const users = await prisma.user.findMany();
    return users.map((el) => ({
      value: el.id.toString(),
      label: el.name,
    }));
  });
};
