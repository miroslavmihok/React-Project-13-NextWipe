import React from "react";

const FilterItem = ({ name, isSelected, onClick }) => {
  return (
    <div
      className="flex w-max cursor-pointer items-center justify-start py-[5px]"
      onClick={onClick}
    >
      {isSelected ? (
        <img
          src="/tick-icon.svg"
          className="mr-[8px] h-[14px] w-[14px] rounded-full border-[1px] border-[#E6DBD1] bg-[#E6DBD1] p-[2.2px]"
          alt="tick_image"
        />
      ) : (
        <div className="mr-[8px] !min-h-[14px] !min-w-[14px] rounded-full border-[1px] border-[#E6DBD1]"></div>
      )}
      <h6 className="font-['Poppins'] text-[12px]">{name}</h6>
    </div>
  );
};

export default FilterItem;
