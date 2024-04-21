import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/utils/db";

export type KyselyTestModalSelectOne = {
  id: number;
  list1: string[];
  list2: number[];
  list3: unknown[];
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<KyselyTestModalSelectOne | null>,
) {
  const [result] = await prisma.$kysely
    .selectFrom("TestModel")
    .selectAll()
    .limit(1)
    .execute();

  res.status(200).json(result);
}
