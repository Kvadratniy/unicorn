/*
  Warnings:

  - You are about to drop the `Abonnement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AbonnementType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_abonnementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "AbonnementType" DROP CONSTRAINT "AbonnementType_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedVisit" DROP CONSTRAINT "CompletedVisit_abonnementId_fkey";

-- DropTable
DROP TABLE "Abonnement";

-- DropTable
DROP TABLE "AbonnementType";

-- CreateTable
CREATE TABLE "AbonementType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "numberOfLessons" INTEGER,
    "monthDuration" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "AbonementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abonement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "abonnementTypeId" INTEGER NOT NULL,
    "completedLessons" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Abonement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AbonementType_serviceId_key" ON "AbonementType"("serviceId");

-- AddForeignKey
ALTER TABLE "AbonementType" ADD CONSTRAINT "AbonementType_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonement" ADD CONSTRAINT "Abonement_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonement" ADD CONSTRAINT "Abonement_abonnementTypeId_fkey" FOREIGN KEY ("abonnementTypeId") REFERENCES "AbonementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_abonnementId_fkey" FOREIGN KEY ("abonnementId") REFERENCES "Abonement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
