import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [isClosed, setIsClosed] = useState(true);
  const [currentServer, setCurrentServer] = useState({});
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState({
    typeFilters: {
      "Any Type": true,
      Vanilla: false,
      Modded: false,
    },
    wipeCycleFilters: {
      "Any Schedule": true,
      "Twice a Week": false,
      Weekly: false,
      Biweekly: false,
    },
    groupSizeFilters: {
      min: 0,
      max: 4,
    },
  });

  return (
    <DataContext.Provider
      value={{
        filterData,
        setFilterData,
        search,
        setSearch,
        currentServer,
        setCurrentServer,
        isClosed,
        setIsClosed,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
