// import qs, { ParsedQs } from "qs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { URLParamKeysType } from "./constants.ts";

export const useURLParams = (keys: URLParamKeysType[]) => {
  const [params, setParams] = useState<Record<string, string>>(
    keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {}),
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const updatedParams: Partial<Record<URLParamKeysType, string>> = {};
    for (const key of keys) {
      const serializedParam = searchParams.get(key);
      if (serializedParam) {
        updatedParams[key] = "";
      }
    }
    setParams(updatedParams);
  }, [searchParams]);

  return params;
};
