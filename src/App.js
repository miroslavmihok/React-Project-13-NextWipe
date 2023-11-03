import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Logo/Header";
import Servers from "./components/Content/Servers";
import Filters from "./components/Filters/Filters";

function App() {
  const [serverData, setServerData] = useState([]);
  const [selectedType, setSelectedType] = useState("Any Type");
  const [selectedWipeCycle, setSelectedWipeCycle] = useState("Any Schedule");
  const [selectedGroupSize, setSelectedGroupSize] = useState("Any Size");

  useEffect(() => {
    const fetchServerData = async () => {
      let isLoading = false;
      try {
        if (!isLoading) {
          isLoading = true;
          const response = await fetch("/bmservers");
          const data = await response.json();
          setServerData(data);
          console.error("Success fetching server data:", data);
        }
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
      isLoading = false;
    };

    fetchServerData();
  }, []);

  // Filter the server data based on selected filters
  const filteredData = serverData.filter((server) => {
    // Filter by type
    if (selectedType !== "Any Type" && server.type !== selectedType) {
      return false;
    }

    // Filter by wipe cycle
    if (selectedWipeCycle !== "Any Schedule") {
      if (
        (selectedWipeCycle === "Twice a Week" &&
          (server.wipe_cycle === 3 || server.wipe_cycle === 4)) ||
        (selectedWipeCycle === "Weekly" && server.wipe_cycle === 7) ||
        (selectedWipeCycle === "Biweekly" && server.wipe_cycle === 14) ||
        (selectedWipeCycle === "Monthly" && server.wipe_cycle > 14)
      ) {
        return true;
      } else {
        return false;
      }
    }

    // Filter by group size
    if (
      selectedGroupSize !== "Any Size" &&
      selectedGroupSize !== server.group_size
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="absolute w-[100%] h-fit !max-h-[100vh] bg-[url('./assets/photos/2853513.png')] bg-cover">
      <div className="bg-[#808080]/40 h-[100vh] w-[100%] flex">
        <Header />
        <Filters
          setSelectedType={setSelectedType}
          setSelectedWipeCycle={setSelectedWipeCycle}
          setSelectedGroupSize={setSelectedGroupSize}
        />
        <Servers server={filteredData} />
      </div>
    </div>
  );
}

export default App;
