import React, { Fragment } from "react";

const CreateCourseButton = () => {
  return (
    <Fragment>
      <button className="relative overflow-x-hidden border border-teal-950 py-1 md:py-2 px-2 md:px-4 mx-2 text-teal-950 font-bold rounded inline-flex items-center group">
        <span className="relative z-10 flex items-center group-hover:text-white duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#115e59"
            className="w-4 h-4 me-2 group-hover:fill-white duration-700"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          Create
        </span>
        <div className="absolute inset-0 bg-teal-950 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
      </button>
    </Fragment>
  );
};

export default CreateCourseButton;
