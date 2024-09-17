import React, { Fragment } from "react";
import FilterButton from "./filterButton";
import SearchBar from "./searchBar";
import ExcelExportButton from "./excelExportButton";
import PdfExportButton from "./pdfExportButton";
import ImportButton from "./importButton";
import CreateCourseButton from "./createCourseButton";

const ButtonLists = ({courses}) => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-10">
        <div className="flex justify-between items-center mb-3 md:mb-0 md:w-1/5">
          <FilterButton />
          <SearchBar courses={courses} />
        </div>
        <div className="flex flex-wrap md:flex-row justify-between items-center m-auto mt-4 md:m-0 md:w-2/5">
          <ExcelExportButton />
          <PdfExportButton />
          <ImportButton />
          <CreateCourseButton />
        </div>
      </div>
    </Fragment>
  );
};

export default ButtonLists;
