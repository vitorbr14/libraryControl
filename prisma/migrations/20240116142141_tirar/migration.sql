/*
  Warnings:

  - Made the column `name` on table `Author` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "name" SET NOT NULL;
