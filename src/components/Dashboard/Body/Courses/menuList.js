import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="w-full shadow-sm bg-zinc-100 px-5 md:px-10 py-3 md:py-5">
      <ul className="flex flex-wrap">
        <li
          className={`relative overflow-hidden cursor-pointer mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2
          ${isActive("/system/dashboard") ? "bg-stone-200" : "border"}
          `}
        >
          <Link to={"/system/dashboard"}>
            <div className="md:relative z-10">Dashboard</div>
            <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
          </Link>
        </li>
        <li
          className={`relative overflow-hidden cursor-pointer mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2
          ${isActive("/system/course") ? "bg-stone-200" : "border"}
          `}
        >
          <Link to={"/system/course"}>
            <div className="md:relative z-10">Courses</div>
            <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Bundled Courses</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Instructor</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Student</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Enrollment</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Manage Fees</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div className="md:relative z-10">Report</div>
          <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
