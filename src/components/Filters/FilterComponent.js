import React from "react";
import FilterItem from "./FilterItem";

const FilterComponent = ({ title, list, selected, onChange }) => {
  return (
    <div className="text-white">
      <h1 className="font-['Poppins'] text-[16px] font-[600] text-[#E6DBD1]">
        {title}
      </h1>
      <div className="flex flex-col justify-start px-[12px]">
        {list.map((item, index) => {
          return (
            <FilterItem
              key={index}
              name={item}
              isSelected={selected[item]}
              onClick={() => onChange(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterComponent;
