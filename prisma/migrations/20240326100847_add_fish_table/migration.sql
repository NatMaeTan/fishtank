-- CreateTable
CREATE TABLE "Fish" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "type" STRING NOT NULL,

    CONSTRAINT "Fish_pkey" PRIMARY KEY ("id")
);
