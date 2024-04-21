import { TestModel } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/utils/db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TestModel | null>,
) {
  const result = await prisma.testModel.findFirst();

  res.status(200).json(result);
}
