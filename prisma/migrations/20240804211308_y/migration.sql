/*
  Warnings:

  - You are about to drop the column `abonnementTypeId` on the `Abonement` table. All the data in the column will be lost.
  - You are about to drop the column `abonnementId` on the `CompletedVisit` table. All the data in the column will be lost.
  - Added the required column `abonementTypeId` to the `Abonement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Abonement" DROP CONSTRAINT "Abonement_abonnementTypeId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedVisit" DROP CONSTRAINT "CompletedVisit_abonnementId_fkey";

-- AlterTable
ALTER TABLE "Abonement" DROP COLUMN "abonnementTypeId",
ADD COLUMN     "abonementTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CompletedVisit" DROP COLUMN "abonnementId",
ADD COLUMN     "abonementId" INTEGER;

-- AddForeignKey
ALTER TABLE "Abonement" ADD CONSTRAINT "Abonement_abonementTypeId_fkey" FOREIGN KEY ("abonementTypeId") REFERENCES "AbonementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedVisit" ADD CONSTRAINT "CompletedVisit_abonementId_fkey" FOREIGN KEY ("abonementId") REFERENCES "Abonement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
