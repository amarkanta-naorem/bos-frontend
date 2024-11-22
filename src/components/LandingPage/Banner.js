import AIBG from "../../assets/images/AIBG.webp";
import { MENUS } from "../../utils/common/common";

const Banner = () => {
  return (
    <div
      className="relative flex md:flex-row flex-col items-center justify-between mx-3 md:mx-10 pt-10 pb-5 md:p-10 rounded-lg md:bg-origin-content md:bg-contain md:bg-bottom bg-teal-950"
      style={{ backgroundImage: `url(${AIBG})` }}
    >
      <div className="absolute top-4 left-4 flex">
        <span className="bg-red-500 w-4 h-4 rounded-full"></span>
        <span className="bg-yellow-500 w-4 h-4 mx-2 rounded-full"></span>
        <span className="bg-green-500 w-4 h-4 rounded-full"></span>
      </div>
      <div className="text-2xl md:text-8xl text-center md:text-start font-bold text-white uppercase">
        <p>Learn</p>
        <p>FROM THE</p>
        <p className="text-sky-500">BEONSCHOOL MASTERS</p>
      </div>
      <div className="bg-[#1e1e1e] p-3 mt-4 md:mt-0">
        <div className="bg-[#252526] text-[#d4d4d4] font-mono text-sm p-4 md:p-6 rounded-lg shadow-lg w-[18rem] md:w-[20rem] md:max-w-3xl">
          <div className="text-xl">
            <span className="text-[#569cd6] font-bold text-[1.2rem] md:text-xl">"menu"</span>
            <span className="text-[#dcdcaa] text-[1.2rem] md:text-xl"> => [</span>
          </div>
          <ul>
            {MENUS.map((menu, index) => (
              <li
                key={index}
                className="pl-3 p-1 my-1 md:my-3 text-xl cursor-pointer hover:bg-[#1e1e1e] rounded transition duration-1000 ease-out"
              >
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <span className="text-[#6a9955] text-sm md:text-sm line-clamp-2">
                  // {menu.slug}
                </span>
                <span className="text-[#569cd6] text-[1rem] xs:text-[1.2rem] md:text-xl font-bold">
                  "{menu.action}"
                </span>
                <span className="text-[#dcdcaa] md:text-xl"> => </span>
                <span className="text-[#c586c0] capitalize font-bold text-[1rem] xs:text-[1.2rem] md:text-xl">
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
