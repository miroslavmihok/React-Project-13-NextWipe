//ServerContainer.js

import React, { useState } from 'react';

const ServerContainer = ({ name, type, wipe, fill, country, groupsize, nextwipe }) => {
  const [fav, setFav] = useState(Boolean);
  return (
    <div className="w-[100%] bg-[#312F2C] flex justify-start py-[5px]">
      <div className="flex w-[70%]">
        {/* <div className="w-[25px] h-[25px] m-[10px] my-auto" onClick={() => setFav(!fav)}>
          <svg
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3.36 -3.36 54.66 54.66"
            className={`${fav ? 'fill-[#ED8A19]' : 'fill-[#00000000]'}`}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="2.20524"
            >
              <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
            </g>

            <g id="SVGRepo_iconCarrier">
              <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
            </g>
          </svg>
        </div> */}
        <div className="flex justify-start ml-5 items-center gap-[10px]">
          <div className="mb-auto">{country}</div>
          <div className="flex flex-col justify-between gap-[14px]">
            <h1 className="font-['Poppins'] text-[14px] font-semibold text-[#E6DBD1]">{name}</h1>
            <div className="flex justify-start gap-[10px]">
              <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">Last Wipe </span>
                <span className="font-['Poppins'] text-[#9c392D]">{wipe}</span>
              </h1>
              <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">Max Group </span>
                <span className="font-['Poppins'] text-[#9c392D]">{groupsize}</span>
              </h1>
              <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">Fill on Wipe </span>
                <span className="font-['Poppins'] text-[#9c392D]">{fill}</span>
              </h1>
              <div className="font-['Poppins'] h-max capitalize text-[11px] px-[5px] leading-[11px] py-[3px] rounded text-[#E6dbd1] font-[600]  bg-[#22415B]">
                {type}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[15%] my-auto text-center">
        <h1 className="font-['Poppins'] text-[#a2a2a2] text-[12px] font-[600]">{nextwipe}</h1>
      </div>
      <div className="w-[15%] flex flex-col justify-center items-center">
        <h4 className=" bg-black/30 rounded px-[7px] cursor-pointer py-[5px] font-['Poppins'] uppercase text-[14px] font-bold text-[#e6dbd1]">
          Connect
        </h4>
      </div>
    </div>
  );
};

export default ServerContainer;
