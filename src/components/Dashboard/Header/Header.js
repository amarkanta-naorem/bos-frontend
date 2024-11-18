import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SidebarToggleContext from "../../../utils/contexts/SidebarToggleContext";
import Logo from "../../../assets/images/Logo.png"
import Setting from "../../../assets/icons/setting.svg";
import Notification from "../../../assets/icons/notification.svg";
import Maximize from "../../../assets/icons/maximize.svg";
import ToggleBar from "../../../assets/icons/toggle-bar.svg";

const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { setIsSidebarToggle } = useContext(SidebarToggleContext);

  const sidebarToggleMenuHandler = () => {
    setIsSidebarToggle((prev) => ({
      ...prev, // Keep the current state
      isToggleOpen: !prev.isToggleOpen, // Toggle the sidebar state
    }));
  };

  const handleprofile = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="w-full md:h-[13vh] flex flex-col md:flex-row justify-between mb-1 items-start md:items-center md:py-9 md:px-5">
      <div className="w-full md:w-auto p-5 flex flex-row justify-between items-center">
        <Link to={"/"}>
          <img
            // src="https://i.postimg.cc/nVkPgV71/Be-On-School1.png"
            src={Logo}
            alt="Be-On-School"
            className="h-7"
          />
        </Link>
        <img
            src={ToggleBar} a
            lt={"ToggleBar"}
            className="cursor-pointer pl-7"
            onClick={() => sidebarToggleMenuHandler()}
        />

      </div>
      <ul className="flex items-center ml-3 mb-2 md:m-0">
        <li className="mx-3 cursor-pointer">
          <img src={Maximize} alt={"Maximize"} />
        </li>
        <li className="mx-3 cursor-pointer">
          <img src={Notification} alt={"Notification"}/>
        </li>
        <li className="mx-3 cursor-pointer" onClick={handleprofile}>
          <div className="relative flex flex-row items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/178073341?v=4"
              alt="ProfilePicture"
              className="w-9 h-9 rounded-md"
            />
            <div className="hidden md:flex flex-col px-2 w-40">
              <p className="text-xs font-bold text-teal-950 whitespace-nowrap overflow-hidden text-ellipsis">
                Amarkanta Naorem
              </p>
              <span className="text-xs text-gray-400 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">admin</span>
            </div>
          </div>

          {isProfileDropdownOpen && (
            <div className="bg-violet-100 absolute mt-2 px-3 w-40 rounded z-50">
              <ul className="py-2">
                <li className="py-1 hover:px-2 hover:transform hover:translate-y-0 hover:duration-500 border-b border-gray-300">
                  <Link>My Profile</Link>
                </li>
                <li className="py-1 hover:px-2 hover:transform hover:translate-y-0 hover:duration-500 border-b border-gray-300">
                  <Link>Setting</Link>
                </li>
                <li className="py-1 hover:px-2 hover:transform hover:translate-y-0 hover:duration-500">
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="mx-3 cursor-pointer">
          <button className="bg-teal-950 p-1 rounded">
            <img src={Setting} alt={"Setting"}/>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
