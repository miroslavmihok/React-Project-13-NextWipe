import React from "react";

const ServerContainer = ({
  name,
  type,
  wipe,
  fill,
  country,
  groupsize,
  nextwipe,
  ip,
  port,
  onClick,
}) => {
  // const [fav, setFav] = useState(Boolean);

  return (
    <div
      className="flex w-[100%] cursor-pointer justify-start bg-[#312F2C] py-[0.8rem] max-sm:flex-col max-sm:justify-center"
      onClick={onClick}
    >
      <div className="flex w-[50%] min-w-[50%] max-w-[50%] max-sm:w-full max-sm:min-w-full max-sm:max-w-full max-sm:justify-center">
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
        <div className="ml-5 flex min-w-full max-w-full items-center justify-start gap-[10px] max-sm:ml-0 max-sm:min-w-full max-sm:max-w-full max-sm:px-[1rem]">
          <div className="mb-auto min-w-[6%] max-sm:hidden">{country}</div>
          <div className="flex min-w-[94%] max-w-[94%] flex-col justify-between gap-[14px]">
            <h1 className="inline-block truncate font-['Poppins'] text-[14px] font-semibold text-[#E6DBD1] max-sm:inline-block max-sm:truncate max-sm:text-center">
              {name}
            </h1>
            <div className="flex justify-start gap-[10px] max-sm:justify-center">
              <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">
                  Last Wipe{" "}
                </span>
                <span className="font-['Poppins'] text-[#9c392D]">{wipe}</span>
              </h1>
              <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">
                  Max Group{" "}
                </span>
                <span className="font-['Poppins'] text-[#9c392D]">
                  {groupsize}
                </span>
              </h1>
              {/* <h1 className="font-['Poppins'] text-[12px] font-semibold text-[#E6DBD1]">
                <span className="font-['Poppins'] text-[#727272]">
                  Fill on Wipe{" "}
                </span>
                <span className="font-['Poppins'] text-[#9c392D]">{fill}</span>
              </h1> */}
              <div className="h-max rounded bg-[#22415B] px-[5px] py-[3px] font-['Poppins'] text-[11px] font-[600] capitalize leading-[11px]  text-[#E6dbd1]">
                {type}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-auto w-[25%] text-center max-sm:w-[100%]">
        <h1 className="font-['Poppins'] text-[0.85rem] font-[600] text-[#a2a2a2] max-sm:py-[0.5rem]">
          {nextwipe}
        </h1>
      </div>
      <div className="flex w-[25%] justify-center gap-[0.5rem] px-[0.25rem] max-sm:w-[100%]">
        <button
          className="items-center max-sm:w-full"
          onClick={(e) => {
            e.stopPropagation();
            const serverAdress = `client.connect ${ip}:${port}`;
            navigator.clipboard.writeText(serverAdress);
          }}
        >
          <h4 className=" cursor-pointer rounded bg-black/30 px-[7px] py-[5px] font-['Poppins'] text-[0.8rem] font-bold uppercase text-[#e6dbd1] max-sm:text-[0.75rem]">
            Copy IP
          </h4>
        </button>
        <button
          className="items-center max-xl:hidden"
          onClick={(e) => {
            e.stopPropagation();
            const url = `steam://connect/${ip}:${port}`;
            window.open(url, "_blank");
          }}
        >
          <h4 className=" cursor-pointer rounded bg-black/30 px-[7px] py-[5px] font-['Poppins'] text-[0.8rem] font-bold uppercase text-[#e6dbd1]">
            Connect
          </h4>
        </button>
      </div>
    </div>
  );
};

export default ServerContainer;
