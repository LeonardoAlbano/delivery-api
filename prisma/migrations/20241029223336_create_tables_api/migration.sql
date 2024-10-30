/*
  Warnings:

  - Added the required column `reservationTime` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservation" ADD COLUMN     "reservationTime" TIMESTAMP(3) NOT NULL;
