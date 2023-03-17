/*
  Warnings:

  - You are about to drop the column `Email` on the `Ticket` table. All the data in the column will be lost.

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
    "email" TEXT,
    CONSTRAINT "Ticket_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("createdAt", "deletedAt", "id", "name", "payed", "updatedAt", "validate", "value") SELECT "createdAt", "deletedAt", "id", "name", "payed", "updatedAt", "validate", "value" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
