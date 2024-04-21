import { TestModel } from "@prisma/client";
import { KyselyTestModalSelectOne } from "~/pages/api/test-kysely";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const getTestModels = async () => {
  const res = await fetch(`${getBaseUrl()}/api/test`);
  const testModels: TestModel | null = await res.json();

  return testModels;
};

export const getTestModelsKysely = async () => {
  const res = await fetch(`${getBaseUrl()}/api/test-kysely`);
  const testModels: KyselyTestModalSelectOne | null = await res.json();

  return testModels;
};
