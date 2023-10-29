// ServerListContainer.js
import React, { useState, useEffect } from 'react';
import ServerContainer from './ServerContainer';
import ReactCountryFlag from 'react-country-flag';

const ServerListContainer = ({ serverData }) => {
  const [visibleServers, setVisibleServers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const delayBetweenServers = 200; // Adjust as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= serverData.length) {
        clearInterval(interval);
        return;
      }

      setVisibleServers(prevVisibleServers => [...prevVisibleServers, serverData[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }, delayBetweenServers);

    return () => {
      clearInterval(interval);
    };
  }, [serverData, currentIndex]);

  return (
    <div className="flex flex-col space-y-[7px] max-h-[calc(100vh-40px)] overflow-y-scroll custom-scrollbar pr-[5px] ">
      {visibleServers.map((server) => (
        <ServerContainer
        key={server.server_id} // Assuming server_id is the unique identifier
        name={server.name}
        type={server.type}
        wipe={server.last_wipe}
        fill={'100%'}
        groupsize={server.group_size} // Fetched from MongoDB data
        nextwipe={server.next_wipe} // Calculated from MongoDB data
        country={
          <ReactCountryFlag
            countryCode={server.country}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
          />
        }
      />
      ))}
    </div>
  );
};

export default ServerListContainer;