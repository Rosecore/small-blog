import { create } from "zustand";
import { persist } from "zustand/middleware";

type BlogStoreState = {
  searchQuery: string;
  limit: number;
};
type BlogStoreActions = {
  onChangeSearchQuerry: (searchQuery: string) => void;
  onChangeLimit: (limit: number) => void;
  reset: () => void;
};
const initialState: BlogStoreState = {
  searchQuery: "",
  limit: 10,
};
export const useBlogStore = create<BlogStoreState & BlogStoreActions>()(
  persist(
    set => ({
      searchQuery: "",
      limit: 10,
      onChangeSearchQuerry: searchQuery =>
        set({
          searchQuery: searchQuery,
        }),
      onChangeLimit: limit =>
        set({
          limit: limit,
        }),
      reset: () => set(initialState),
    }),
    {
      name: "blog-store",
    }
  )
);
