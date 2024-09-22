/*
  Warnings:

  - You are about to drop the `RoomToService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoomToService" DROP CONSTRAINT "RoomToService_roomId_fkey";

-- DropForeignKey
ALTER TABLE "RoomToService" DROP CONSTRAINT "RoomToService_serviceId_fkey";

-- DropTable
DROP TABLE "RoomToService";

-- CreateTable
CREATE TABLE "LocationToService" (
    "locationId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "LocationToService_pkey" PRIMARY KEY ("locationId","serviceId")
);

-- AddForeignKey
ALTER TABLE "LocationToService" ADD CONSTRAINT "LocationToService_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationToService" ADD CONSTRAINT "LocationToService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
