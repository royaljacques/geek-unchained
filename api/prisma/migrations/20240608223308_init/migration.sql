-- CreateTable
CREATE TABLE "Games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partyName" TEXT NOT NULL,
    "winner" TEXT NOT NULL DEFAULT 'null',
    "chasseur" BOOLEAN NOT NULL DEFAULT false,
    "cupidon" BOOLEAN NOT NULL DEFAULT false
);
