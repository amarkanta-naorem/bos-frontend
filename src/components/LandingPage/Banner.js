import AIBG from "../../assets/images/AIBG.webp";
import { MENUS } from "../../utils/common/common";

const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-between mx-10 p-10 rounded-lg bg-origin-content bg-contain bg-bottom bg-teal-950"
      style={{ backgroundImage: `url(${AIBG})` }}
    >
      <div className="absolute top-4 left-4 flex">
        <span className="bg-red-500 w-4 h-4 rounded-full"></span>
        <span className="bg-yellow-500 w-4 h-4 mx-2 rounded-full"></span>
        <span className="bg-green-500 w-4 h-4 rounded-full"></span>
      </div>
      <div className="text-8xl font-bold text-white uppercase">
        <p>Learn</p>
        <p>FROM THE</p>
        <p className="text-sky-500">BEONSCHOOL MASTERS</p>
      </div>
      <div className="bg-[#1e1e1e] p-5">
        <div className="bg-[#252526] text-[#d4d4d4] font-mono text-sm p-6 rounded-lg shadow-lg w-[20rem] max-w-3xl">
          <div className="text-xl">
            <span className="text-[#569cd6] font-bold">"menu"</span>
            <span className="text-[#dcdcaa]"> =></span> [
          </div>
          <ul>
            {MENUS.map((menu, index) => (
              <li
                key={index}
                className="pl-3 p-1 my-3 text-xl cursor-pointer hover:bg-[#1e1e1e] rounded transition duration-1000 ease-out"
              >
                <span className="text-[#6a9955] text-sm line-clamp-2">
                  // {menu.slug}
                </span>
                <span className="text-[#569cd6] font-bold">
                  "{menu.action}"
                </span>
                <span className="text-[#dcdcaa]"> => </span>
                <span className="text-[#c586c0] capitalize font-bold">
                  "{menu.to}"
                </span>
                ,
              </li>
            ))}
          </ul>
          <div className="text-xl">];</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
