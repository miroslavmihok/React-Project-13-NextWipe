import React, { useEffect } from "react";
import FilterComponent from "./FilterComponent";
import ReactSlider from "react-slider";
import { useFilterData } from "../../filterData/filterDataContext";

const Filters = (props) => {
  const { filterData, setFilterData } = useFilterData();
  const { search, setSearch } = useFilterData();

  const handleTypeChange = (name) => {
    const updatedTypeFilters = { ...filterData.typeFilters };

    if (name === "Any Type") {
      for (const filter in updatedTypeFilters) {
        updatedTypeFilters[filter] = filter === name;
      }
    } else {
      updatedTypeFilters[name] = !updatedTypeFilters[name];
      if (!updatedTypeFilters.Vanilla && !updatedTypeFilters.Modded) {
        updatedTypeFilters["Any Type"] = true;
      } else {
        updatedTypeFilters["Any Type"] = false;
      }
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
      if (
        !updatedWipeCycleFilters["Twice a Week"] &&
        !updatedWipeCycleFilters["Weekly"] &&
        !updatedWipeCycleFilters["Biweekly"]
      ) {
        updatedWipeCycleFilters["Any Schedule"] = true;
      } else {
        updatedWipeCycleFilters["Any Schedule"] = false;
      }
    }

    setFilterData({
      ...filterData,
      wipeCycleFilters: updatedWipeCycleFilters,
    });
  };

  const handleGroupSizeChange = (e) => {
    const updatedGroupSizeFilters = { ...filterData.groupSizeFilters };
    updatedGroupSizeFilters.min = e[0];
    updatedGroupSizeFilters.max = e[1];

    setFilterData({
      ...filterData,
      groupSizeFilters: updatedGroupSizeFilters,
    });
  };

  const handleSearchBarChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {}, [search]);

  const clearFiltersHandler = () => {
    props.onClearFilters(true);
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
        list={["Any Schedule", "Twice a Week", "Weekly", "Biweekly"]}
        selected={filterData.wipeCycleFilters}
        onChange={handleWipeCycleChange}
      />
        <div className="text-[#E6DBD1]">
          <h1 className="font-['Poppins'] font-[600] text-[16px] mb-[10px] text-[#E6DBD1]">
            MAX GROUP
          </h1>
          <ReactSlider
            className=" bg-[#000] mb-[2rem]"
            thumbClassName="example-thumb"
            trackClassName="example-track bg-[#E6DBD1] h-[5px] top-[7px]"
            defaultValue={[1, 4]}
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
            // minDistance={1}
            min={1}
            max={4}
            value={[filterData.groupSizeFilters.min, filterData.groupSizeFilters.max]}
            onChange={handleGroupSizeChange}
          />
        </div>
      <div className="text-[#E6DBD1]">
        <h1 className="font-['Poppins'] font-[600] text-[16px] mb-[10px] text-[#E6DBD1] uppercase">
            search by name
          </h1>
        <div className="h-[25px] w-full flex items-center">
          <input
            // key={`${Math.floor(Math.random() * 1000000)}`}
            name="search-bar"
            type="text"
            placeholder="Search Servers..."
            value={search}
            className="w-full h-[30px] font-['Poppins'] text-[0.8rem] bg-black/20 text-[#E6DBD1] py-[5px] px-[10px] focus:border-0 select:outline-none focus:outline-none placeholder:text-[#E6DBD1]"
            onChange={handleSearchBarChange}
          />
          <div className="w-[30px] min-h-[30px] cursor-pointer bg-black/20 flex flex-col justify-center items-center px-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="my-auto fill-[#E6DBD1] mb-[7px]"
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
      <div className="h-[45px] w-full flex justify-start">
        <div className="h-full w-[40%] bg-[#282822] hover:bg-[#3b3b33]">
          <button className="h-full w-full text-center font-['Poppins'] text-[#E6DBD1] font-[600] text-[0.8rem] uppercase" onClick={clearFiltersHandler}>
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
