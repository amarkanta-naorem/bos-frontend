import React, { Fragment } from "react";

const TableHeadRow = () => {
  return (
    <Fragment>
      <tr>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          <input type="checkbox" className="w-4 h-4" />
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
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Total Enrolled
        </th>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Instructor
        </th>
        <th scope="col" className="px-3 py-3 md:px-6 md:py-6">
          Action
        </th>
      </tr>
    </Fragment>
  );
};

export default TableHeadRow;
