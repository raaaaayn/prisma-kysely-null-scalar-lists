import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.testModel.create({
    data: {},
  });
};

main();
