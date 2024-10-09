import React, { useState } from "react";
import TableDataRow from "./tableDataRow";
import TableHeadRow from "./tableHeadRow";
import ViewModal from "./Modal/viewModal";

const DataTable = () => {
  const [viewCourse, setViewCourse] = useState(false);
  const [getCourseByIds, setGetCourseByIds] = useState(null);

  const modalPopUp = (course) => {
    setGetCourseByIds(course);
    setViewCourse(!viewCourse);
  };

  return (
    <div className="overflow-x-scroll md:no-scrollbar mx-5 md:px-5 mt-5 md:mt-10 mb-20">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-700 uppercase bg-gray-50">
          <TableHeadRow />
        </thead>
        <tbody>
          <TableDataRow modalPopUp={modalPopUp} />
        </tbody>
      </table>
      <ViewModal
        isVisible={viewCourse}
        onClose={() => setViewCourse(!viewCourse)}
        courseDetails={getCourseByIds}
      />
    </div>
  );
};

export default DataTable;
