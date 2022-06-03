/*
  Warnings:

  - You are about to drop the column `createDateTime` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `lastChangedDateTime` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `createDateTime` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastChangedDateTime` on the `users` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "createDateTime",
DROP COLUMN "lastChangedDateTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createDateTime",
DROP COLUMN "lastChangedDateTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
