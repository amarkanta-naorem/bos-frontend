import React, { Fragment } from "react";

const ExcelExportButton = () => {
  return (
    <Fragment>
      <button className="relative overflow-x-hidden border border-[#1D6F42] py-2 px-10 md:px-4 mx-2 text-[#1D6F42] font-bold rounded inline-flex items-center group">
        <span className="relative z-10 flex items-center group-hover:text-white duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#1D6F42"
            className="w-4 h-4 me-2 group-hover:fill-white duration-700"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z" />
          </svg>
          Excel
        </span>
        <div className="absolute inset-0 bg-[#1D6F42] transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
      </button>
    </Fragment>
  );
};

export default ExcelExportButton;
