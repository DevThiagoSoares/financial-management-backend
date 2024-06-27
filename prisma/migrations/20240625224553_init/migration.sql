/*
  Warnings:

  - Added the required column `format_instalment` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "format_instalment" INTEGER NOT NULL;
