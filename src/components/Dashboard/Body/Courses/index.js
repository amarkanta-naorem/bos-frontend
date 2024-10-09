import ButtonLists from "./Buttons/buttonLists";
import DataTable from "./Table/table";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="w-[86.5rem] md:w-full h-[86vh] overflow-x-scroll no-scrollbar bg-stone-100">
      <div className="flex justify-between items-center px-5 md:px-10 pt-3 md:pt-5">
        <h1 className="text-2xl font-extrabold text-teal-950">Courses</h1>
        <p className="text-xs text-teal-950 font-mono">
          <Link to={"/system/dashboard"}>Dashboard</Link><span className="select-none"> / Courses</span>
        </p>
      </div>
      <hr className="w-11/12 h-1 mx-auto my-3" />
      <ButtonLists />
      <DataTable />
    </div>
  );
};

export default Course;
