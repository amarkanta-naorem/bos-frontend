import React from "react";

const SearchBar = () => {
  return (
    <div className="relative ml-10">
      <input
        type="search"
        className="w-[13.2rem] md:w-96 p-2 py-2 rounded-lg bg-gray-100 border outline-none"
        placeholder="Search..."
      />
      <button className="absolute end-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="20px"
          fill="#042f2e"
          className="cursor-pointer"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;