import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Logo/Header";
import Servers from "./components/Content/Servers";
import Filters from "./components/Filters/Filters";

function App() {
  const [serverData, setServerData] = useState([]);
  
  useEffect(() => {
    const fetchServerData = async () => {
      let isLoading = false;
      try {
        if (!isLoading) {
          isLoading = true;
          const response = await fetch("/bmservers");
          const data = await response.json();
          setServerData(data);
          console.log("Success fetching server data:", data);
        }
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
      isLoading = false;
    };

    fetchServerData();
  }, []);

  return (
    <div className="absolute w-[100%] h-fit !max-h-[100vh] bg-[url('./assets/photos/2853513.png')] bg-cover">
      <div className="bg-[#808080]/40 h-[100vh] w-[100%] flex">
        <Header />
        <Filters />
        <Servers server={serverData} />
      </div>
    </div>
  );
}

export default App;