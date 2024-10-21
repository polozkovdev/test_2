import React, { ReactNode } from "react";
import { postStore } from "@/entities/post";
import { userStore } from "@/entities/user";

interface StoreContextProps {
  postStore: typeof postStore;
  userStore: typeof userStore;
}

export const StoreContext = React.createContext<StoreContextProps | undefined>({
  postStore,
  userStore,
});

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={{ postStore, userStore }}>
      {children}
    </StoreContext.Provider>
  );
};
