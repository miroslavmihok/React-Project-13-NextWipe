import React, { useState } from 'react'

const FilterItem = ({name}) => {
    const [checked, setChecked] = useState(false);
  return (
    <div className="flex py-[5px] justify-start items-center cursor-pointer w-max" onClick={() => setChecked(!checked)}>
      {checked ? (
        <img
          src="/tick-icon.svg"
          className="w-[14px] h-[14px] bg-[#E6DBD1] p-[2.2px] border-[1px] border-[#E6DBD1] rounded-full mr-[8px]"
          alt="tick_image"
        />
      ) : (
        <div className="!min-w-[14px] !min-h-[14px] border-[1px] border-[#E6DBD1] rounded-full mr-[8px]"></div>
      )}
      <h6 className="font-['Poppins'] text-[12px]">{name}</h6>
    </div>
  );
}

export default FilterItem