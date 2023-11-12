import React from "react";

import rust from "../../../assets/photos/rustlogo.png";

import ForceWipeCountdown from "../Countdown/ForceWipeCountdown";

const Header = () => {
  return (
    <div className=" flex h-[100%] w-[24%] flex-col items-center  justify-between bg-black/40 pt-[24px] max-xl:h-fit max-xl:w-full">
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center pt-2 text-[3rem] text-white max-sm:text-[1.5rem]">
          <h1 className="pr-[0.7rem]">NEXT</h1>
          <img
            src={rust}
            className="h-[2.5rem] w-[2.5rem] max-sm:h-[1.5rem] max-sm:w-[1.5rem]"
            alt="logo"
          />
          <h1 className="pl-[0.7rem]">WIPE</h1>
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
      <div className="flex flex-col gap-[14px] pb-[14px] max-xl:hidden">
        <p className="px-[30px] text-center font-['Poppins'] text-[12px] font-[600] text-[#E6DBD1]">
          This site is not affiliated with, nor endorsed by{" "}
          <b className="font-['Poppins'] text-[#9c392D]">
            <button href="https://facepunch.com/">Facepunch Studios LTD</button>
          </b>{" "}
          . All trademarks belong to their respective owners and are used for
          information only. That awesome Rust font was created by{" "}
          <b className="font-['Poppins'] text-[#9c392D]">
            <button href="https://www.dafont.com/ben-kohan.d5358">
              Ben Kohan
            </button>
          </b>{" "}
          .
        </p>
        <p className="px-[30px] text-center font-['Poppins'] text-[12px] font-[600] text-[#E6DBD1]">
          <button href="#">Imprint</button> · Terms And Conditions · Privacy
          Policy
        </p>
        <p className="m-0 flex font-['Poppings']"></p>
      </div>
    </div>
  );
};

export default Header;
