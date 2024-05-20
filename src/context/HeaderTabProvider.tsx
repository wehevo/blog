
import { TabType } from '@/types/enum';
import React, { createContext, useContext, useState } from 'react';

type HeaderTabContextType = {
  tabType: TabType;
  changeTabType: (tabType: TabType) => void;
};

const defaultValue = {
  tabType: TabType.Home,
  changeTabType: () => {}
};

const HeaderTabContext = createContext<HeaderTabContextType>(defaultValue);

type Props = {
  children: any;
};

export const HeaderTabProvider: React.FC<Props> = ({ children }) => {
  const [tabType, setTabType] = useState<TabType>(TabType.Home);

  const context = {
    tabType,
    changeTabType: (tabType: TabType) => setTabType(tabType)
  };

  return <HeaderTabContext.Provider value={context}>{children}</HeaderTabContext.Provider>;
}

export const useContextHeaderTab = () => {
  const context = useContext(HeaderTabContext);
  if (!context) {
    throw new Error(
      'HeaderTabContext hook must be used inside HeaderTabContextProvider'
    );
  }

  return context;
};
