-- CreateTable
CREATE TABLE "TestModel" (
    "id" SERIAL NOT NULL,
    "list1" TEXT[],
    "list2" INTEGER[],
    "list3" JSONB[],

    CONSTRAINT "TestModel_pkey" PRIMARY KEY ("id")
);
