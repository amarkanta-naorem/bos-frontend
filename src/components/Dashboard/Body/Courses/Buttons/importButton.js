import React, { Fragment } from "react";

const ImportButton = () => {
  return (
    <Fragment>
      <button className="relative overflow-x-hidden border border-teal-800 py-1 md:py-2 px-2 md:px-4 mx-2 text-teal-800 font-bold rounded inline-flex items-center group">
        <span className="relative z-10 flex items-center group-hover:text-white duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#115e59"
            className="w-4 h-4 me-2 group-hover:fill-white duration-700"
          >
            <path d="M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z" />
          </svg>
          Import
        </span>
        <div className="absolute inset-0 bg-teal-800 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
      </button>
    </Fragment>
  );
};

export default ImportButton;
