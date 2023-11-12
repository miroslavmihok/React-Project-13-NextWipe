import React from "react";

const Footer = () => {
  return (
    <div className="hidden flex-col justify-around bg-[#1a242a] py-[3rem] max-xl:flex">
      <p className="px-[4rem] pb-[1rem] text-center font-['Poppins'] text-[12px] font-[600] text-[#E6DBD1]">
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
  );
};

export default Footer;
