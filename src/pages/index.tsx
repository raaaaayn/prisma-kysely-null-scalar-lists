import { TestModel } from "@prisma/client";
import { useEffect, useState } from "react";
import { getTestModels, getTestModelsKysely } from "~/services/getTestModels";
import { KyselyTestModalSelectOne } from "./api/test-kysely";

export default function Home() {
  const [prismaSelect, setPrismaSelect] = useState<TestModel | null>(null);
  const [kyselySelect, setKyselySelect] =
    useState<KyselyTestModalSelectOne | null>(null);

  useEffect(() => {
    getTestModels().then((res) => {
      console.debug(res);
      setPrismaSelect(res);
    });

    getTestModelsKysely().then((res) => {
      console.debug(res);
      setKyselySelect(res);
    });
  }, []);

  return (
    <div>
      {prismaSelect && (
        <p className="m-3">
          {"{"}
          {Object.keys(prismaSelect).map((d) => {
            return (
              <span className="block ml-3">
                {/*@ts-expect-error*/}
                <span>{d}: </span>{" "}
                <span className="bg-green-100">
                  {JSON.stringify(prismaSelect[d])},{" "}
                </span>
              </span>
            );
          })}
          {"}"}
        </p>
      )}

      {kyselySelect && (
        <p className="m-3">
          {"{"}
          {Object.keys(kyselySelect).map((d) => {
            return (
              <span className="block ml-3">
                {/*@ts-expect-error*/}
                <span>{d}: </span>{" "}
                <span className="bg-green-100">
                  {JSON.stringify(kyselySelect[d])},{" "}
                </span>
              </span>
            );
          })}
          {"}"}
        </p>
      )}
    </div>
  );
}
