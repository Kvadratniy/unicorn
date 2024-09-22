/*
  Warnings:

  - You are about to drop the column `abonementTypeId` on the `Abonnement` table. All the data in the column will be lost.
  - You are about to drop the column `abonementId` on the `CompletedVisit` table. All the data in the column will be lost.
  - You are about to drop the `AbonementTypeToService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `abonnementTypeId` to the `Abonnement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AbonementTypeToService" DROP CONSTRAINT "AbonementTypeToService_abonementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "AbonementTypeToService" DROP CONSTRAINT "AbonementTypeToService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_abonementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedVisit" DROP CONSTRAINT "CompletedVisit_abonementId_fkey";

-- AlterTable
ALTER TABLE "Abonnement" DROP COLUMN "abonementTypeId",
ADD COLUMN     "abonnementTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CompletedVisit" DROP COLUMN "abonementId",
ADD COLUMN     "abonnementId" INTEGER;

-- DropTable
DROP TABLE "AbonementTypeToService";

-- CreateTable
CREATE TABLE "abonnementTypeToService" (
    "abonnementTypeId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "abonnementTypeToService_pkey" PRIMARY KEY ("abonnementTypeId","serviceId")
);

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_abonnementTypeId_fkey" FOREIGN KEY ("abonnementTypeId") REFERENCES "AbonnementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_abonnementId_fkey" FOREIGN KEY ("abonnementId") REFERENCES "Abonnement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abonnementTypeToService" ADD CONSTRAINT "abonnementTypeToService_abonnementTypeId_fkey" FOREIGN KEY ("abonnementTypeId") REFERENCES "AbonnementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abonnementTypeToService" ADD CONSTRAINT "abonnementTypeToService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
