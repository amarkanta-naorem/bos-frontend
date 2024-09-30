import React from "react";

const SearchBar = ({ courses }) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div className="relative ml-10">
      <input
        type="search"
        className="w-[13.2rem] md:w-96 p-2 py-2 rounded-lg bg-stone-50 border outline-none"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
