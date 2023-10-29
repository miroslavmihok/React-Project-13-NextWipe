import React from 'react'
import FilterItem from './FilterItem';

const FilterComponent = ({title, list}) => {
  return (
    <div className="text-white">
      <h1 className="font-['Poppins'] font-[600] text-[16px] text-[#E6DBD1]">{title}</h1>
      <div className="flex flex-col justify-start px-[12px]">
        {list.map((item, index) => {
            return <FilterItem key={index} name={item} />;
        })}
      </div>
    </div>
  );
}

export default FilterComponent