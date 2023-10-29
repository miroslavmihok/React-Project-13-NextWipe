import React from "react";

const Footer = () => {
  return (
    <div className="h-20 bg-[#1a242a] flex items-center justify-between  ">
      <ul className=" flex justify-between max-w-[70vw] mx-auto text-white space-x-12 items-center whitespace-nowrap">
        <li>
          <button className="font-['Poppins']">Facebook</button>
        </li>
        <li className="hidden md:flex font-['Poppins']">
          <button>Imprint</button>
        </li>
        <li>
          <button className="font-['Poppins']">About</button>
        </li>
        <li className="hidden md:flex font-['Poppins']">
          <button>Privacy Policy</button>
        </li>
        <li className="hidden lg:flex font-['Poppins']">
          <button>Terms and Conditions</button>
        </li>
        <li className="hidden md:flex font-['Poppins']">
          <button>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
