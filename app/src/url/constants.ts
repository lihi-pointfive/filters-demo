export const URLParamKeys = {
  search: "search",
  filters: "filters",
} as const;

export type URLParamKeysType = (typeof URLParamKeys)[keyof typeof URLParamKeys];
