import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import ReactSlider from "react-slider";

const Filters = () => {
  const [filterData, setFilterData] = useState({
    typeFilters: {
      "Any Type": true,
      Vanilla: false,
      Modded: false,
    },
    wipeCycleFilters: {
      "Any Schedule": true,
      "Twice a Week": false,
      Weekly: false,
      Biweekly: false,
      Monthly: false,
    },
    groupSizeFilters: {
      min: 0,
      max: 4,
    }
  });

  const handleTypeChange = (name) => {
    const updatedTypeFilters = { ...filterData.typeFilters };

    if (name === "Any Type") {
      for (const filter in updatedTypeFilters) {
        updatedTypeFilters[filter] = filter === name;
      }
    } else {
      updatedTypeFilters[name] = !updatedTypeFilters[name];
      updatedTypeFilters["Any Type"] = false;
    }

    setFilterData({
      ...filterData,
      typeFilters: updatedTypeFilters,
    });
  };

  const handleWipeCycleChange = (name) => {
    const updatedWipeCycleFilters = { ...filterData.wipeCycleFilters };

    if (name === "Any Schedule") {
      for (const filter in updatedWipeCycleFilters) {
        updatedWipeCycleFilters[filter] = filter === name;
      }
    } else {
      updatedWipeCycleFilters[name] = !updatedWipeCycleFilters[name];
      updatedWipeCycleFilters["Any Schedule"] = false;
    }

    setFilterData({
      ...filterData,
      wipeCycleFilters: updatedWipeCycleFilters,
    });
  };

  const handleGroupSizeChange = (event) => {
    filterData.groupSizeFilters.min = event[0];
    filterData.groupSizeFilters.max = event[1];
    console.log(filterData);
  }

  return (
    <div className="w-[20%] max-h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-start bg-[#793629]/80 lg:px-[40px] 2xl:px-[60px] py-[50px] gap-[40px] overflow-hidden">
      <FilterComponent
        title="SERVER TYPE"
        list={["Any Type", "Vanilla", "Modded"]}
        selected={filterData.typeFilters}
        onChange={handleTypeChange}
      />
      {/* <FilterComponent title="COUNTRY" list={['Africa', 'Asia', 'Australia/Oceania', 'Europe', 'North America', 'South America']} /> */}
      <FilterComponent
        title="WIPE SCHEDULE"
        list={["Any Schedule", "Twice a Week", "Weekly", "Biweekly", "Monthly"]}
        selected={filterData.wipeCycleFilters}
        onChange={handleWipeCycleChange}
      />
      <div className="text-white">
        <h1 className="font-['Poppins'] font-[600] text-[16px] mb-[10px] text-[#E6DBD1]">
          MAX GROUP
        </h1>
        <ReactSlider
          className=" bg-[#000]"
          thumbClassName="example-thumb"
          trackClassName="example-track bg-[#E6DBD1] h-[5px] top-[7px]"
          defaultValue={[0, 4]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => (
            <div
              {...props}
              className="bg-[#000] font-['Poppins'] w-[20px] text-center cursor-pointer text-[12px] "
            >
              {state.valueNow}
            </div>
          )}
          pearling
          minDistance={1}
          min={0}
          max={4}
          onChange={handleGroupSizeChange}
        />
      </div>
      <div className="h-[25px] w-full flex items-center">
        <input
          key={`${Math.floor(Math.random() * 1000000)}`}
          name="search-bar"
          text="text"
          placeholder="Search"
          className="w-[100%] font-['Poppins'] text-[11px] bg-black/20 h-[30px] py-[5px] px-[10px] focus:border-0 select:outline-none active;outline-none"
        />
        <div className="w-[30px] min-h-[30px] cursor-pointer bg-black/20 flex flex-col justify-center items-center px-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="my-auto fill-[#727272] mb-[7px]"
            id="search"
          >
            <g data-name="Layer 2">
              <path
                d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                data-name="search"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filters;
