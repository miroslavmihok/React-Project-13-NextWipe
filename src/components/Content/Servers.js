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
      <div className="relative z-10 flex w-full max-w-[54%] flex-col justify-start bg-[#222320] pb-[20px] pl-[20px] pr-[5px]">
        <div className="flex w-[98%] font-bold uppercase text-[#727272]">
          <div className="flex h-[40px] w-[60%] items-center">
            <h1 className="font-['Poppins']">SERVER information</h1>
          </div>
          <div className="flex h-[40px] w-[20%] items-center justify-center">
            <h1 className="font-['Poppins']">NEXT WIPE IN</h1>
          </div>
        </div>
        <div className="custom-scrollbar flex max-h-[calc(100vh-40px)] flex-col space-y-[7px] overflow-y-scroll pr-[5px] ">
          {dataLoaded && isEmpty && servers.length === 0 && (
            <p className="pt-3 text-center font-['Poppins'] text-[1.2rem] font-semibold text-[#E6DBD1]">
              No servers found, try adjusting the filters
            </p>
          )}
          {servers.map((server) => (
            <ServerContainer
              key={server.server_id}
              name={server.name}
              type={server.type}
              wipe={server.last_wipe}
              ip={server.ip}
              port={server.port}
              // fill={"100%"}
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
