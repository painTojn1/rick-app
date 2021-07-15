import React from "react";

const Filter = ({ onValueChange }) => {
  return (
    <div className="flex place-content-center">
      <input
        placeholder="Search"
        className="p-2"
        onChange={(e) => onValueChange(e.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
