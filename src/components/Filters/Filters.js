import React from "react";
import FilterComponent from "./FilterComponent";
import ReactSlider from "react-slider";

const Filters = ({ setSelectedType, setSelectedWipeCycle, setSelectedGroupSize }) => {
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleWipeCycleChange = (wipeCycle) => {
    setSelectedWipeCycle(wipeCycle);
  };

  const handleGroupSizeChange = (groupSize) => {
    setSelectedGroupSize(groupSize);
  };

  return (
    <div className="w-[20%] max-h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-start bg-[#793629]/80 lg:px-[40px] 2xl:px-[60px] py-[50px] gap-[40px] overflow-hidden">
      <FilterComponent
        title="SERVER TYPE"
        list={["Any Type", "Vanilla", "Modeded"]}
        onChange={handleTypeChange}
      />
      {/* <FilterComponent title="COUNTRY" list={['Africa', 'Asia', 'Australia/Oceania', 'Europe', 'North America', 'South America']} /> */}
      <FilterComponent
        title="WIPE SCHEDULE"
        list={["Any Schedule", "Twice a Week", "Weekly", "Biweekly", "Monthly"]}
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
          max={4}
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
