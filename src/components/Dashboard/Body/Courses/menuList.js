import React from "react";

const MenuList = () => {
  return (
    <div className="w-full shadow-sm bg-zinc-100 px-5 md:px-10 py-3 md:py-5">
      <ul className="flex flex-wrap">
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Dashboard</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Courses</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Bundled Courses</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Instructor</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Student</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Enrollment</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Manage Fee</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
        <li className="relative overflow-hidden cursor-pointer border mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2">
          <div class="relative z-10">Report</div>
          <div class="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
