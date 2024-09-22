const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // await prisma.service.createMany({
  //   data: [
  //     { name: 'Уроки вокала 1' },
  //     { name: 'Уроки звука 1' },
  //     { name: 'Уроки барабанов 1' },
  //     { name: 'Уроки вокала 2' },
  //     { name: 'Уроки барабанов 2' },
  //   ],
  // });

  await prisma.locationToService.create({
    data: {
      roomId: 1,
      serviceId: 3,
      assignedBy: 'admin',
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
