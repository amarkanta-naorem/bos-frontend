import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const menuOpen = useSelector((store) => store.dashboard.isMenuOpen);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path);
  return (
    menuOpen && (
      <div className="w-[13rem] md:w-[13.5rem] h-[86vh] absolute md:static z-50 md:z-0 bg-stone-200 overflow-y-scroll no-scrollbar">
        <div className="flex justify-center">
          <ul className="my-2">
            <li
              className={`relative overflow-hidden cursor-pointer p-5 mx-4 my-7 rounded-md font-thin transition-colors duration-1000 group
              ${isActive("/system/dashboard") ? "bg-stone-300" : "bg-gray-100"}
              `}
            >
              <Link to={"/system/dashboard"}>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="40px"
                    fill="#042f2e"
                  >
                    <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z" />
                  </svg>
                  Dashboard
                </div>
                <div className="absolute inset-0 bg-stone-300 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
              </Link>
            </li>

            <li
              className={`relative overflow-hidden cursor-pointer p-5 mx-4 my-7 rounded-md font-thin transition-colors duration-1000 group
              ${isActive("/system/course") ? "bg-stone-300" : "bg-gray-100"}
              `}
            >
              <Link to={"/system/course"}>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    height="40px"
                    fill="#042f2e"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                  </svg>
                  Courses
                </div>
                <div className="absolute inset-0 bg-stone-300 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
              </Link>
            </li>

            <li className="relative overflow-hidden cursor-pointer bg-gray-100 p-5 mx-4 my-7 rounded-md font-thin transition-colors duration-1000 group">
              <div className="relative z-10 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height="40px"
                  fill="#042f2e"
                >
                  <path d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3 128 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32l50.7 0-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0 73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-128 0c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3 88.4 0 7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176l-40.4 0z" />
                </svg>
                Library
              </div>
              <div className="absolute inset-0 bg-stone-300 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
            </li>
          </ul>
        </div>
        <div className="px-5 my-3 text-center text-sm text-gray-700 select-none">
          &copy; <span className="font-serif italic">BeOnSchool</span> is
          proudly owned by{" "}
          <span className="font-serif italic">Amarkanta Naorem</span>
        </div>
      </div>
    )
  );
};

export default Sidebar;
