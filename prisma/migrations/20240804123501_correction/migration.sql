/*
  Warnings:

  - You are about to drop the column `customerId` on the `Abonnement` table. All the data in the column will be lost.
  - You are about to drop the column `sessionsLeft` on the `Abonnement` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `EmployToService` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `EmployToService` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `RoomToService` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `RoomToService` table. All the data in the column will be lost.
  - You are about to drop the `AbonnementToService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[creatorId,roomId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `abonnementTypeId` to the `Abonnement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PLANED', 'REJECTED', 'CLOSED');

-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_customerId_fkey";

-- DropForeignKey
ALTER TABLE "AbonnementToService" DROP CONSTRAINT "AbonnementToService_abonnementId_fkey";

-- DropForeignKey
ALTER TABLE "AbonnementToService" DROP CONSTRAINT "AbonnementToService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_userId_fkey";

-- DropIndex
DROP INDEX "Booking_creatorId_key";

-- DropIndex
DROP INDEX "Booking_employeeId_key";

-- DropIndex
DROP INDEX "Booking_roomId_key";

-- DropIndex
DROP INDEX "Booking_serviceId_key";

-- DropIndex
DROP INDEX "Booking_studentId_key";

-- AlterTable
ALTER TABLE "Abonnement" DROP COLUMN "customerId",
DROP COLUMN "sessionsLeft",
ADD COLUMN     "abonnementTypeId" INTEGER NOT NULL,
ADD COLUMN     "completedLessons" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "employeeId",
DROP COLUMN "serviceId",
DROP COLUMN "studentId",
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'PLANED',
ALTER COLUMN "comment" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EmployToService" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";

-- AlterTable
ALTER TABLE "RoomToService" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";

-- DropTable
DROP TABLE "AbonnementToService";

-- DropTable
DROP TABLE "Student";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "about" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbonnementType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "numberOfLessons" INTEGER,
    "monthDuration" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "AbonnementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedVisit" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "abonnementId" INTEGER,
    "price" DECIMAL(65,30),

    CONSTRAINT "CompletedVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingToService" (
    "bookingId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "BookingToService_pkey" PRIMARY KEY ("bookingId","serviceId")
);

-- CreateTable
CREATE TABLE "BookingToEmployees" (
    "bookingId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "BookingToEmployees_pkey" PRIMARY KEY ("bookingId","employeeId")
);

-- CreateTable
CREATE TABLE "BookingToClient" (
    "bookingId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "BookingToClient_pkey" PRIMARY KEY ("bookingId","clientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE INDEX "Shift_employeeId_idx" ON "Shift"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Shift_employeeId_date_startTime_endTime_key" ON "Shift"("employeeId", "date", "startTime", "endTime");

-- CreateIndex
CREATE UNIQUE INDEX "AbonnementType_serviceId_key" ON "AbonnementType"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedVisit_bookingId_key" ON "CompletedVisit"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_creatorId_roomId_key" ON "Booking"("creatorId", "roomId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbonnementType" ADD CONSTRAINT "AbonnementType_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_abonnementTypeId_fkey" FOREIGN KEY ("abonnementTypeId") REFERENCES "AbonnementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_abonnementId_fkey" FOREIGN KEY ("abonnementId") REFERENCES "Abonnement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToService" ADD CONSTRAINT "BookingToService_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToService" ADD CONSTRAINT "BookingToService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToEmployees" ADD CONSTRAINT "BookingToEmployees_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToEmployees" ADD CONSTRAINT "BookingToEmployees_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToClient" ADD CONSTRAINT "BookingToClient_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingToClient" ADD CONSTRAINT "BookingToClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
