import React, { useState } from 'react';

import rust from '../../../assets/photos/rustlogo.png';

import ForceWipeCountdown from '../Countdown/ForceWipeCountdown';

const Header = () => {
  return (
    <div className=" w-[24%] flex flex-col items-center justify-between  bg-black/40 pt-[24px] h-[100%]">
      <div>
        {/* Logo */}
        <div className="flex items-center   text-[10px] sm:text-[48px]   text-white pt-2">
          <h1 className="pr-[0.7rem] ">NEXT</h1>
          <img src={rust} className="w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem]" />
          <h1 className="pl-[0.7rem] ">WIPE</h1>
        </div>
        {/* Get Ready for next wipe */}
        <div className="text-[#6e6e6e] text-[18px] text-center sm:text-[20px] sm:pt-3 mb-5">
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
        <p className="font-['Poppins'] text-[12px] font-[600] text-center px-[30px] text-[#E6DBD1]">
          This site is not affiliated with, nor endorsed by <b className="font-['Poppins'] text-[#9c392D]">Facepunch Studios LTD</b> . All trademarks belong to their
          respective owners and are used for information only. That awesome Rust font was created by <b className="font-['Poppins'] text-[#9c392D]">Ben Kohan</b> .
        </p>
        <p className="font-['Poppins'] text-[12px] font-[600] text-center px-[30px] text-[#E6DBD1]">
          Imprint · Terms And Conditions · Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Header;
