import React, { createContext, useContext, useState } from "react";

const FilterDataContext = createContext();

export function useFilterData() {
  return useContext(FilterDataContext);
}

export function FilterDataProvider({ children }) {
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
    <FilterDataContext.Provider
      value={{ filterData, setFilterData, search, setSearch }}
    >
      {children}
    </FilterDataContext.Provider>
  );
}
