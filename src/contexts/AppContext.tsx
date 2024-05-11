'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

interface AppContextInterface {
  isSidebarVisible: boolean;
  setSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

const defaultAppContext: AppContextInterface = {
  isSidebarVisible: false,
  setSidebarVisible: () => true,
};

export const AppContext =
  React.createContext<AppContextInterface>(defaultAppContext);

const AppProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isSidebarVisible, setSidebarVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
