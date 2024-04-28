import React from "react";

const Select = ({allData,defaultOption,setFunc,initValue}) => {
  return (
    <div>
      <select
        className="px-4 py-2 pr-8 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
        value={initValue}
        onChange={(e) => setFunc(e.target.value)}
      >
        <option disabled value="all">
          Select {defaultOption}
        </option>
        {allData.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
