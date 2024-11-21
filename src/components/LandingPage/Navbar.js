import React from "react";
import Heart from "../../assets/icons/heart.svg";
import Cart from "../../assets/icons/cart.svg";
import Setting from "../../assets/icons/setting.svg";
import Search from "../../assets/icons/search.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import Logo from "../../assets/images/Logo.svg";

const categories = [
  "Software Development",
  "Data Science",
  "Communication",
  "Business Development and Analysis",
];
const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between py-4 md:py-8 mx-3 md:mx-10">
        <div className="flex items-center justify-between w-full md:w-1/2">
          {/* Logo */}
          <img
            className="w-[9rem] md:w-56 cursor-pointer"
            src={Logo}
            alt="BeOnSchool-logo"
          />
          {/* Navbar Search Bar */}
          <form className="relative">
            <input
              className="border px-2 md:p-2 md:w-[30rem] outline-none rounded md:rounded-none"
              type="text"
              placeholder="Search..."
            />
            <button className="absolute top-0 bottom-0 right-2 md:right-5">
              <img src={Search} alt={"Search"} />
            </button>
          </form>
        </div>

        {/* Navbar Menu List */}
        <div className="w-1/2 hidden md:block">
          <ul className="flex items-center justify-between">
            <li className="text-white relative z-10 group mx-5 inline-flex items-center cursor-pointer hover:text-gray-600">
              CATEGORIES
              <span className="mx-2">
                <img src={DownArrow} alt="DownArrow" />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-gray-50 shadow border rounded-md p-2 w-56">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 hover:text-gray-600 ${
                      index < categories.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </li>
            <li className="text-white mx-5 cursor-pointer hover:text-gray-600">
              FORUM
            </li>
            <li className="mx-5 cursor-pointer">
              <img src={Heart} alt={"Heart"} />
            </li>
            <li className="mx-5 relative cursor-pointer">
              <img className="relative z-10" src={Cart} alt={"Cart"} />
              <span className="absolute -top-4 -right-3 bg-[#252526] rounded-full min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center text-white text-sm z-0">
                2
              </span>
            </li>
            <li className="mx-5 cursor-pointer">
              <div className="relative flex flex-row items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/178073341?v=4"
                  alt="ProfilePicture"
                  className="w-10 h-10 rounded-md"
                />
                <div className="hidden md:flex flex-col px-2 w-44">
                  <p className="text-xs font-bold text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                    Naorem Amarkanta Meitei
                  </p>
                  <span className="text-xs text-gray-400 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    amarkanta@beonschool.com
                  </span>
                </div>
              </div>
            </li>
            <li className=" p-1 bg-[#252526] rounded cursor-pointer">
              <img src={Setting} alt={"Setting"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
