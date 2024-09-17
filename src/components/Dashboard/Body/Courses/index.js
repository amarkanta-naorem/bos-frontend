import React, { Fragment } from "react";
import ButtonLists from "./buttonLists";
import Table from "./table";

const Course = () => {
  return (
    <Fragment>
      <div className="w-[86.5rem] md:w-full h-[86vh] overflow-x-scroll no-scrollbar bg-stone-100">
        <div className="flex justify-between items-center px-5 md:px-10 pt-3 md:pt-5">
          <h1 className="text-2xl font-extrabold text-teal-950">Courses</h1>
          <p className="text-xs text-teal-950">Dashboard / Courses</p>
        </div>
        <hr className="w-11/12 h-1 mx-auto my-3" />
        <ButtonLists />
        <Table />
      </div>
    </Fragment>
  );
};

export default Course;
