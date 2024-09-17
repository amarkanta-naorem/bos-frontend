import React from "react";

const FilterButton = () => {
  return (
    <div>
      <button className="relative overflow-x-hidden border border-teal-800 py-1 md:py-2 px-2 mx-2 text-teal-800 font-bold rounded inline-flex items-center group">
        <span className="relative z-10 flex items-center group-hover:text-white duration-700">
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#115e59"
            className="w-4 h-4 ml-2 group-hover:fill-white duration-700"
          >
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-teal-800 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
      </button>
    </div>
  );
};

export default FilterButton;
