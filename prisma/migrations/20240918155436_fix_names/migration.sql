/*
  Warnings:

  - You are about to drop the `Abonement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AbonementType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Abonement" DROP CONSTRAINT "Abonement_abonementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Abonement" DROP CONSTRAINT "Abonement_profileId_fkey";

-- DropForeignKey
ALTER TABLE "AbonementTypeToService" DROP CONSTRAINT "AbonementTypeToService_abonementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedVisit" DROP CONSTRAINT "CompletedVisit_abonementId_fkey";

-- DropTable
DROP TABLE "Abonement";

-- DropTable
DROP TABLE "AbonementType";

-- CreateTable
CREATE TABLE "AbonnementType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "numberOfLessons" INTEGER,
    "monthDuration" INTEGER NOT NULL,

    CONSTRAINT "AbonnementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abonnement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "endDateAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "abonementTypeId" INTEGER NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_abonementTypeId_fkey" FOREIGN KEY ("abonementTypeId") REFERENCES "AbonnementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_abonementId_fkey" FOREIGN KEY ("abonementId") REFERENCES "Abonnement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbonementTypeToService" ADD CONSTRAINT "AbonementTypeToService_abonementTypeId_fkey" FOREIGN KEY ("abonementTypeId") REFERENCES "AbonnementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
