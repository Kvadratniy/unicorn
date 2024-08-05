"use server";
import prisma, { wrapper } from "@/app/lib/prisma";
import {
  type Booking,
  type BookingToEmployees,
  type BookingToService,
  type BookingToClient,
} from "@prisma/client";

type BookingDTO = Pick<
  Booking,
  "comment" | "startDate" | "endDate" | "creatorId" | "roomId"
>;

interface ListParams {
  page?: number;
  pageSize?: number;
}

export const createFullBooking = async (
  data: BookingDTO,
  employeeId: number,
  clientId: number,
  serviceId: number
) => {
  return wrapper(async () => {
    const newBooking = await prisma.booking.create({
      data,
    });

    return Promise.all([
      prisma.bookingToEmployees.create({
        data: {
          bookingId: newBooking.id,
          employeeId,
        },
      }),

      prisma.bookingToClient.create({
        data: {
          bookingId: newBooking.id,
          clientId,
        },
      }),

      prisma.bookingToService.create({
        data: {
          bookingId: newBooking.id,
          serviceId,
        },
      }),
    ]);
  });
};

export const createBooking = async (data: BookingDTO) => {
  return wrapper(async () =>
    prisma.booking.create({
      data,
    })
  );
};

export const addBookingEmployee = async (data: BookingToEmployees) => {
  return wrapper(async () =>
    prisma.bookingToEmployees.create({
      data,
    })
  );
};

export const addBookingClient = async (data: BookingToClient) => {
  return wrapper(async () =>
    prisma.bookingToClient.create({
      data,
    })
  );
};

export const addBookingService = async (data: BookingToService) => {
  return wrapper(async () =>
    prisma.bookingToService.create({
      data,
    })
  );
};

export async function getBookings({
  page = 1,
  pageSize = 10,
}: ListParams): Promise<{
  items: Booking[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  return wrapper(async () => {
    const skip = (page - 1) * pageSize;
    const items = await prisma.booking.findMany({
      skip,
      take: pageSize,
    });

    const totalItems = await prisma.booking.count();

    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
    };
  });
}
