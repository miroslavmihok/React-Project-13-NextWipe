import React, { useState } from "react";
import { useData } from "../../dataContext/dataContext";

const Validator = () => {
  const [userInput, setUserInput] = useState("");
  const { setIsValidated } = useData();

  const password = process.env.REACT_APP_PASSWORD;
  // const password = "test";

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim() === password) {
      setIsValidated(true);
    }
  };

  return (
    <div className="absolute z-50 flex h-screen w-screen items-center justify-center bg-[#312F2C] ">
      <div className="flex h-[40%] flex-col items-center justify-evenly rounded-xl border border-none bg-[#403d39] bg-gradient-to-tr from-[#65615a] via-[#7d7770] to-[#65615a] shadow-2xl shadow-black max-sm:w-[80%] sm:min-w-[400px]">
        <div className="flex h-[40%] w-full flex-col items-center justify-between px-[6%] pt-[6%]">
          <div className="flex w-[80%] items-center justify-center">
            <i className="fa-solid fa-right-to-bracket mr-[5%] text-3xl font-semibold text-[#E6DBD1]"></i>
            <h1 className="font-['Poppins'] text-3xl font-semibold text-[#E6DBD1]">
              Authorise
            </h1>
          </div>
          <p className="text-center font-['Poppins'] text-[1rem] text-[#E6DBD1]">
            Please enter your password to load the page.
          </p>
        </div>
        <div className="flex h-[60%] w-full flex-col items-center justify-center">
          <form className="flex h-full w-full flex-col justify-evenly p-[6%]">
            <label
              className="font-['Poppins'] text-[#E6DBD1]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex h-[22%] w-full items-center rounded-sm border border-none bg-white shadow-sm shadow-black/20 focus-within:border-4">
              <i className="fa-solid fa-lock px-[4%] text-[#222320]"></i>
              <input
                className="h-full w-full bg-transparent font-['Poppins'] outline-none placeholder:text-[0.8rem]"
                type="password"
                id="password"
                placeholder="Enter your Password"
                required
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></input>
            </div>
            <button
              className="h-[26%] w-full rounded-md border border-none bg-[#222320] font-['Poppins'] font-semibold text-[#E6DBD1] hover:bg-[#E6DBD1] hover:text-black/70"
              type="submit"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validator;
