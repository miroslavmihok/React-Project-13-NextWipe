import React from "react";
import ServerContainer from "./ServerContainer";
import ReactCountryFlag from "react-country-flag";
import { useServerData } from "../../serverData/serverDataContext";

const Servers = ({ servers, isEmpty, dataLoaded, onTransferServerData }) => {

  const { setCurrentServer } = useServerData();

  const clickedServerHandler = (server) => {
    setCurrentServer(server);
    onTransferServerData(server);
  };

  return (
    <>
      <div className="relative z-10 max-w-[54%] pl-[20px] flex flex-col bg-[#222320] justify-start w-full pr-[5px] pb-[20px]">
        <div className="flex font-bold text-[#727272] w-[98%] uppercase">
          <div className="w-[70%] h-[40px] flex items-center">
            <h1 className="font-['Poppins']">SERVER information</h1>
          </div>
          <div className="w-[15%] h-[40px] flex justify-center items-center">
            <h1 className="font-['Poppins']">NEXT WIPE IN</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-[7px] max-h-[calc(100vh-40px)] overflow-y-scroll custom-scrollbar pr-[5px] ">
          {dataLoaded && isEmpty && servers.length === 0 && (
            <p className="font-['Poppins'] text-[1.2rem] font-semibold text-[#E6DBD1] text-center pt-3">
              No servers found, try adjusting the filters
            </p>
          )}
          {servers.map((server) => (
            <ServerContainer
              key={server.server_id}
              name={server.name}
              type={server.type}
              wipe={server.last_wipe}
              fill={"100%"}
              groupsize={server.group_size}
              nextwipe={server.next_wipe}
              country={
                <ReactCountryFlag
                  countryCode={server.country}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                />
              }
              description={server.rust_description}
              web_url={server.rust_url}
              onClick={() => clickedServerHandler(server)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Servers;
