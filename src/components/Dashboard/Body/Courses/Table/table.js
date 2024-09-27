import React, { useEffect, useState } from "react";
import TableDataRow from "./tableDataRow";
import TableHeadRow from "./tableHeadRow";
import ViewModal from "./Modal/viewModal";

const DataTable = ({ courses }) => {
  const [selectCourses, setSelectCourses] = useState([]);
  const [viewCourse, setViewCourse] = useState(false);

  useEffect(() => {
    console.log("Selected Courses:", selectCourses); // Logs whenever selectCourses changes
  }, [selectCourses]); // This effect runs every time selectCourses updates

  const handleCheckbox = (e, course) => {
    if (e.target.checked) {
      setSelectCourses([...selectCourses, course]); // Add the full course object to the selected courses
    } else {
      setSelectCourses(
        selectCourses.filter((selected) => selected._id !== course._id)
      ); // Remove the course by filtering out the course with the same _id
    }
  };

  const handleMultipleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectCourses(courses); // Select all courses if the main checkbox is checked
    } else {
      setSelectCourses([]); // Deselect all if the main checkbox is unchecked
    }
  };
  return (
    <div className="overflow-x-scroll md:no-scrollbar mx-5 md:px-5 mt-5 md:mt-10 mb-20">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-700 uppercase bg-gray-50">
          <TableHeadRow
            courses={courses}
            selectCourses={selectCourses}
            handleMultipleCheckboxChange={handleMultipleCheckboxChange}
          />
        </thead>
        <tbody>
          <TableDataRow
            courses={courses}
            selectCourses={selectCourses}
            handleCheckbox={handleCheckbox}
            modalPopUp={() => setViewCourse(!viewCourse)}
          />
        </tbody>
      </table>
      <ViewModal isVisible={viewCourse} onClose={() => setViewCourse(!viewCourse)} />
    </div>
  );
};

export default DataTable;
