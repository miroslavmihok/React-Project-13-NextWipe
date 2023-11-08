import React from "react";

const Footer = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-[#1a242a]  ">
      <ul className=" mx-auto flex max-w-[70vw] items-center justify-between space-x-12 whitespace-nowrap text-white">
        <li>
          <button className="font-['Poppins']">Facebook</button>
        </li>
        <li className="hidden font-['Poppins'] md:flex">
          <button>Imprint</button>
        </li>
        <li>
          <button className="font-['Poppins']">About</button>
        </li>
        <li className="hidden font-['Poppins'] md:flex">
          <button>Privacy Policy</button>
        </li>
        <li className="hidden font-['Poppins'] lg:flex">
          <button>Terms and Conditions</button>
        </li>
        <li className="hidden font-['Poppins'] md:flex">
          <button>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
