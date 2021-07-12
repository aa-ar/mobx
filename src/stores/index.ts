import { createContext } from "react";

import MyStore from "./MyStore";

export const rootStore = {
  MyStore
};

export const storeContext = createContext(rootStore);
export const StoreProvider = storeContext.Provider;
