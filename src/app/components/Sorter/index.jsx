import React, { useState } from "react";
import CheckedIcon from "../Svgs/CheckedIcon";
import Icon from "../Svgs/Icon";

const Sorter = ({ onSort, setOnSort }) => {
  const [selectedOption, setSelectedOption] = useState("priceLowToHigh");

  const options = [
    { value: "priceLowToHigh", label: "Price Low to High" },
    { value: "priceHighToLow", label: "Price High to Low" },
    { value: "dateNewToOld", label: "New to Old" },
    { value: "dateOldToNew", label: "Old to New" },
  ];

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setOnSort(value);
  };

  return (
    <div className="pl-[104px] pt-5">
      <h1 className="text-greyscale500 text-[13px] font-semibold mb-3">
        Sorting
      </h1>
      <div className="w-[296px] h-[184px] container bg-white rounded-sm border-none shadow-sm pt-6 pl-6 grid grid-flow-row gap-1 ">
        {options.map((option) => (
          <div key={option.value} className="flex items-center ">
            <label className="flex items-center">
              <input
                type="radio"
                name="sortOption"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleSortChange}
                className=" invisible"
              />
              <span className=" mr-2 hover:cursor-pointer">
                {selectedOption === option.value ? <CheckedIcon /> : <Icon />}
              </span>
              <span className="text-black600 text-sm font-normal tracking-[.01em] ">
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorter;
