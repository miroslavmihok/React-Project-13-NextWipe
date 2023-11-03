import React from "react";
import ServerContainer from "./ServerContainer";
import ReactCountryFlag from "react-country-flag";

const Servers = (props) => {
  return (
    <>
      <div className="relative z-10 max-w-[54%] pl-[20px] flex flex-col bg-[#222320] justify-start w-full pr-[5px] pb-[20px]">
        <div className="flex justify-between font-bold text-[#727272] w-[85%] h-[40px] uppercase items-center ">
          <h1 className="font-['Poppins']">SERVER information</h1>
          <h1 className="font-['Poppins']">NEXT WIPE IN</h1>
        </div>
        <div className="flex flex-col space-y-[7px] max-h-[calc(100vh-40px)] overflow-y-scroll custom-scrollbar pr-[5px] ">
          {props.server.map((server) => (
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Servers;
