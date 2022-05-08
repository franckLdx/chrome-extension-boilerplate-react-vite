import { atom } from "recoil";

export const filterState = atom<string | undefined>({
  key: "filterState",
  default: undefined,
});
