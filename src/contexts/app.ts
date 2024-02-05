import React, { useContext } from "react";

interface IAppContext {
  isMobile: boolean;
  isAllowed: boolean;
  setIsMobile?: (params: boolean) => void;
  setIsAllowed: (params: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({
  isMobile: false,
  isAllowed: false,
  setIsAllowed: () => {},
});

export function useAppContext() {
  const appContext = useContext(AppContext);

  return appContext;
}
