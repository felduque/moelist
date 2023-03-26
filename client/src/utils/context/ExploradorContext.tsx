import { createContext } from "react";

import { ContentType, filterType } from "../types";

type ExploradorContextType = {
  items: ContentType[];
  filters: filterType | {};
  setItems: (items: ContentType[]) => void;
  setFilters: (filters: filterType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const ExploradorContext = createContext<ExploradorContextType>({
  items: [],
  filters: {},
  setItems: () => {},
  setFilters: () => {},
  loading: true,
  setLoading: () => {},
});
