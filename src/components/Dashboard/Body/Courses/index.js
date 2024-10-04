import React, { useEffect, useState } from "react";
import ButtonLists from "./Buttons/buttonLists";
import DataTable from "./Table/table";

const Course = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://127.0.0.1:8000/api/course");
    const json = await data.json();
    setCourse(json.data);
  };

  return (
    <div className="w-[86.5rem] md:w-full h-[86vh] overflow-x-scroll no-scrollbar bg-stone-100">
      <div className="flex justify-between items-center px-5 md:px-10 pt-3 md:pt-5">
        <h1 className="text-2xl font-extrabold text-teal-950">Courses</h1>
        <p className="text-xs text-teal-950 font-mono">
          <a href="/">Dashboard</a> / Courses
        </p>
      </div>
      <hr className="w-11/12 h-1 mx-auto my-3" />
      <ButtonLists courses={courses} />
      <DataTable courses={courses} />
    </div>
  );
};

export default Course;
