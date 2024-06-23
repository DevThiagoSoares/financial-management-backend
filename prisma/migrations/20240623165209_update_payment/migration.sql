/*
  Warnings:

  - Added the required column `valuePaid` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "settled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "valuePaid" DOUBLE PRECISION NOT NULL;
