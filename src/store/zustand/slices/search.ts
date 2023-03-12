import { StateCreator } from "zustand";

export type Search = {
  search: string;
  setSearch: (search: string) => void;
};

export const createSearchSlice: StateCreator<Search, [], [], Search> = (
  set
) => ({
  search: "",
  setSearch: (search) => set(() => ({ search })),
});
