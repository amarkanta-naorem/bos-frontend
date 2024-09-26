import React, { Fragment } from "react";

const TableHeadRow = ({
  handleMultipleCheckboxChange,
  selectCourses,
  courses,
}) => {
  return (
    <Fragment>
      <tr>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          <input
            type="checkbox"
            onChange={handleMultipleCheckboxChange}
            className="w-4 h-4"
            checked={
              selectCourses.length === courses.length && courses.length > 0
            } // Checkbox checked if all courses are selected
          />
        </th>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Thumbnail
        </th>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Title
        </th>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Description
        </th>
        <th colSpan="3" scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Action
        </th>
      </tr>
    </Fragment>
  );
};

export default TableHeadRow;
