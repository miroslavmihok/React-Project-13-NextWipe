import React, { useState } from "react";

import rust from "../../../assets/photos/rustlogo.png";

import ForceWipeCountdown from "../Countdown/ForceWipeCountdown";

const Header = () => {
  return (
    <div className=" flex h-[100%] w-[24%] flex-col items-center  justify-between bg-black/40 pt-[24px]">
      <div>
        {/* Logo */}
        <div className="flex items-center   pt-2 text-[10px]   text-white sm:text-[48px]">
          <h1 className="pr-[0.7rem] ">NEXT</h1>
          <img
            src={rust}
            className="h-[1.5rem] w-[1.5rem] sm:h-[2.5rem] sm:w-[2.5rem]"
            alt="logo"
          />
          <h1 className="pl-[0.7rem] ">WIPE</h1>
        </div>
        {/* Get Ready for next wipe */}
        <div className="mb-5 text-center text-[18px] text-[#6e6e6e] sm:pt-3 sm:text-[20px]">
          <p>Get Ready for Next Wipe</p>
        </div>
        {/* Get Ready for next wipeNext FOrce Wipe is in 10day 20h 23m! */}
        <ForceWipeCountdown />
      </div>
      {/* <div className="flex  flex-col gap-[20px] text-start w-[100%] font-semibold text-[32px] text-[#E6DBD1] pl-[50px] ">
        <h1 className="font-['Poppins']">NEWS</h1>
        <h1 className="font-['Poppins']">SERVERS</h1>
        <h1 className="font-['Poppins']">ABOUT</h1>
      </div> */}
      <div className="flex flex-col gap-[14px] pb-[14px]">
        <p className="px-[30px] text-center font-['Poppins'] text-[12px] font-[600] text-[#E6DBD1]">
          This site is not affiliated with, nor endorsed by{" "}
          <b className="font-['Poppins'] text-[#9c392D]">
            Facepunch Studios LTD
          </b>{" "}
          . All trademarks belong to their respective owners and are used for
          information only. That awesome Rust font was created by{" "}
          <b className="font-['Poppins'] text-[#9c392D]">Ben Kohan</b> .
        </p>
        <p className="px-[30px] text-center font-['Poppins'] text-[12px] font-[600] text-[#E6DBD1]">
          Imprint · Terms And Conditions · Privacy Policy
        </p>
        <p className="m-0 flex font-['Poppings']"></p>
      </div>
    </div>
  );
};

export default Header;
