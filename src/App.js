import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Logo/Header";
import Servers from "./components/Content/Servers";
import Filters from "./components/Filters/Filters";
import ServerModal from "./components/_Modal/ServerModal";
import { useFilterData } from "./filterData/filterDataContext";
import { useServerData } from "./serverData/serverDataContext";

function App() {
  const [serverData, setServerData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { filterData, setFilterData } = useFilterData();
  const { search } = useFilterData();
  const { currentServer } = useServerData();

  // fetching all server data into serverData state
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
          setDataLoaded(true);
          // console.log("Success fetching server data:", data);
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

  // ---------------------------------------------------
  // start of FILTERS
  // ---------------------------------------------------
  // filter function
  const filterServerData = (array) => {
    let updatedServerData = array;
    // types
    if (!filterData.typeFilters["Any Type"]) {
      const filteredVanilla = [];
      const filteredModded = [];

      if (filterData.typeFilters.Vanilla) {
        filteredVanilla.push(
          ...updatedServerData.filter((item) => item.type === "official"),
        );
      }
      if (filterData.typeFilters.Modded) {
        filteredModded.push(
          ...updatedServerData.filter((item) => item.type === "modded"),
        );
      }

      updatedServerData = [...filteredVanilla, ...filteredModded];
    }
    // schedule
    if (!filterData.wipeCycleFilters["Any Schedule"]) {
      const filteredTwiceAWeek = [];
      const filteredWeekly = [];
      const filteredBiweekly = [];

      if (filterData.wipeCycleFilters["Twice a Week"]) {
        filteredTwiceAWeek.push(
          ...updatedServerData.filter((item) => item.wipe_cycle < 7),
        );
      }

      if (filterData.wipeCycleFilters["Weekly"]) {
        filteredWeekly.push(
          ...updatedServerData.filter((item) => item.wipe_cycle === 7),
        );
      }

      if (filterData.wipeCycleFilters["Biweekly"]) {
        filteredBiweekly.push(
          ...updatedServerData.filter((item) => item.wipe_cycle === 14),
        );
      }

      updatedServerData = [
        ...filteredTwiceAWeek,
        ...filteredWeekly,
        ...filteredBiweekly,
      ];
    }

    // group_size
    updatedServerData = updatedServerData.filter(
      (item) =>
        item.group_size >= filterData.groupSizeFilters.min &&
        item.group_size <= filterData.groupSizeFilters.max,
    );

    setFilteredData(updatedServerData);

    // showing error msg for empty arrays
    if (updatedServerData.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  // clearing filters and data
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
        },
        groupSizeFilters: {
          min: 0,
          max: 4,
        },
      });
    }
  };

  // filter by name ( searchbar )
  const filteredByName = filteredData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  // ---------------------------------------------------
  // end of FILTERS
  // ---------------------------------------------------

  const dialog = useRef();

  const displayModal = () => {
    dialog.inert = true;
    dialog.current.showModal();
    dialog.inert = false;
  };

  const handleClose = () => {
    dialog.current.close();
  };

  return (
    <div className="absolute h-fit max-h-[100vh] w-full bg-[url('./assets/photos/2853513.png')] bg-cover">
      <div className="flex h-[100vh] w-[100%] bg-[#808080]/40">
        <ServerModal
          ref={dialog}
          server={currentServer}
          onClose={handleClose}
        />
        <Header />
        <Filters onClearFilters={clearFiltersAndReset} />
        <Servers
          servers={filteredByName}
          isEmpty={isEmpty}
          dataLoaded={dataLoaded}
          onTransferServerData={displayModal}
        />
      </div>
    </div>
  );
}

export default App;
