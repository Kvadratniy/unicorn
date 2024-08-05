import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const wrapper = async (handler: () => Promise<any>) => {
  try {
    const res = await handler();
    return res;
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export { wrapper };
export default prisma;
