import React from "react";
import { useData } from "../../../dataContext/dataContext";

const FilterButton = () => {
  const { setIsClosed } = useData();

  return (
    <div className="hidden max-xl:fixed max-xl:right-[1rem] max-xl:top-[1rem] max-xl:z-40 max-xl:block">
      <button
        className="font-['Poppins'] outline-0"
        onClick={() => setIsClosed(false)}
      >
        <i className="fa-solid fa-bars text-4xl text-[#E6DBD1]"></i>
      </button>
    </div>
  );
};

export default FilterButton;
