import { createContext } from "react";

export const ExploradorContext = createContext({
  items: [],
  setItems: () => {},
});
