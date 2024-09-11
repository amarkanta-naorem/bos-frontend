import React from "react";
import { sidebarToggleMenu } from "../../../utils/redux/Slicer/DashboardSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarToggleMenuHandler = () => {
    dispatch(sidebarToggleMenu());
  };
  return (
    <nav className="w-full h-[18vh] md:h-[14vh] flex flex-col md:flex-row justify-between mb-1 items-start md:items-center md:py-9 md:px-5">
      <div className="w-full md:w-auto p-5 flex flex-row justify-between items-center">
        <img
          src="https://i.postimg.cc/nVkPgV71/Be-On-School1.png"
          alt="Be-On-School"
          className="h-7 pr-7"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="25px"
            fill="#042f2e"
            className="cursor-pointer"
            onClick={() => sidebarToggleMenuHandler()}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
      </div>
      <ul className="flex items-center mb-2 m-auto md:m-0">
        <li className="mx-3 px-3 py-1 cursor-pointer border-2 border-teal-950 rounded-md text-lg font-semibold">
          POS
        </li>
        <li className="mx-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#042f2e"
            className="h-7 md:h-5"
          >
            <path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
          </svg>
        </li>
        <li className="mx-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#042f2e"
            className="h-7 md:h-5"
          >
            <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
        </li>
        <li className="mx-3 cursor-pointer flex flex-row items-center justify-center">
          <img
            src="https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/452293749_1030951565061751_4534046625543131168_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bGywUuQy1eMQ7kNvgFs4hKx&_nc_ht=scontent.fdel3-2.fna&_nc_gid=AIFc4Al3u54jRqZG8otaob4&oh=00_AYACc5BV06fxomaaQ4ccTvosZZgu74xe74gGZ8ny4KwxTw&oe=66E5D855"
            alt="ProfilePicture"
            className="w-10 md:w-8 h-10 md:h-8 rounded-md"
          />
          <div className="hidden md:flex flex-col px-2">
            <p className="text-xs font-bold text-teal-950">Amarkanta Naorem</p>
            <span className="text-xs text-gray-400 font-semibold">admin</span>
          </div>
        </li>
        <li className="mx-3 cursor-pointer">
          <button className="bg-teal-950 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#ffffff"
              className="h-7 md:h-5"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
