/*
  Warnings:

  - Added the required column `comment` to the `Favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `Favorites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorites" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "rate" INTEGER NOT NULL;
