/*
  Warnings:

  - You are about to drop the column `validity` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `validate` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "validate" DATETIME NOT NULL,
    "value" REAL NOT NULL,
    "payed" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "Email" TEXT,
    CONSTRAINT "Ticket_Email_fkey" FOREIGN KEY ("Email") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("Email", "createdAt", "deletedAt", "id", "name", "payed", "updatedAt", "value") SELECT "Email", "createdAt", "deletedAt", "id", "name", "payed", "updatedAt", "value" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
