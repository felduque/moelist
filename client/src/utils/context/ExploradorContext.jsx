import { createContext } from "react";

export const ExploradorContext = createContext({
  items: [],
  filters: {},
  setItems: () => {},
  setFilters: () => {},
  loading: true,
  setLoading: () => {},
});
