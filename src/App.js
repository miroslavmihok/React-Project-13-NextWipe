import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Logo/Header";
import Servers from "./components/Content/Servers";
import Filters from "./components/Filters/Filters";
import { useFilterData } from "./filterData/filterDataContext";

function App() {
  const [serverData, setServerData] = useState([]);
  const { filterData, setFilterData } = useFilterData();
  const [filteredData, setFilteredData] = useState([]);
  const { search } = useFilterData();
  const [filteredByNameData, setFilteredByNameData] = useState([]);

  // Fetching all server data into serverData state
  useEffect(() => {
    const fetchServerData = async () => {
      let isLoading = false;
      try {
        if (!isLoading) {
          isLoading = true;
          const response = await fetch("/bmservers");
          const data = await response.json();
          setServerData(data);
          setFilteredData(data);
          console.log("Success fetching server data:", data);
        }
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
      isLoading = false;
    };
    fetchServerData();
  }, []);

  useEffect(() => {
    filterServerData(serverData);
  }, [filterData, serverData]);

  useEffect(() => {
    filterByName(filteredData);
  }, [search]);

  // filter function
  const filterServerData = (array) => {
    let updatedServerData = array;

    if (!filterData.typeFilters["Any Type"]) {
      const filteredVanilla = [];
      const filteredModded = [];

      if (filterData.typeFilters.Vanilla) {
        filteredVanilla.push(
          ...updatedServerData.filter((item) => item.type === "official")
        );
      }
      if (filterData.typeFilters.Modded) {
        filteredModded.push(
          ...updatedServerData.filter((item) => item.type === "modded")
        );
      }

      updatedServerData = [...filteredVanilla, ...filteredModded];
    }

    if (!filterData.wipeCycleFilters["Any Schedule"]) {
      if (filterData.wipeCycleFilters["Twice a Week"]) {
        updatedServerData = updatedServerData.filter(
          (item) => item.wipe_cycle < 7
        );
      }

      if (filterData.wipeCycleFilters["Weekly"]) {
        updatedServerData = updatedServerData.filter(
          (item) => item.wipe_cycle === 7
        );
      }

      if (filterData.wipeCycleFilters["Biweekly"]) {
        updatedServerData = updatedServerData.filter(
          (item) => item.wipe_cycle === 14
        );
      }

      if (filterData.wipeCycleFilters["Monthly"]) {
        updatedServerData = updatedServerData.filter(
          (item) => item.wipe_cycle === 30
        );
      }
    }

    updatedServerData = updatedServerData.filter(
      (item) =>
        item.group_size >= filterData.groupSizeFilters.min &&
        item.group_size <= filterData.groupSizeFilters.max
    );

    setFilteredData(updatedServerData);
  };

  const filterByName = (array) => {
    let filteredByName = array.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredByNameData(filteredByName);
  };

  const finalFilteredData = filteredByNameData.length
    ? filteredByNameData
    : filteredData;

  const clearFiltersAndReset = (bool) => {
    if (bool) {
      setFilteredData(serverData);
      setFilterData({
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
          Monthly: false,
        },
        groupSizeFilters: {
          min: 0,
          max: 4,
        },
      });
    }
  };

  return (
    <div className="absolute w-[100%] h-fit !max-h-[100vh] bg-[url('./assets/photos/2853513.png')] bg-cover">
      <div className="bg-[#808080]/40 h-[100vh] w-[100%] flex">
        <Header />
        <Filters onClearFilters={clearFiltersAndReset} />
        <Servers server={finalFilteredData} />
      </div>
    </div>
  );
}

export default App;
