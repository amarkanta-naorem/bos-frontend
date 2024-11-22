import ReactLogo from "../../assets/logos/react.svg";
import TypeScriptLogo from "../../assets/logos/typescript.svg";
import Laravel from "../../assets/logos/Laravel.svg";
import MySQL from "../../assets/logos/mysql.svg";
import API from "../../assets/logos/api.svg";
import GraphQL from "../../assets/logos/graphql.svg";
import React from "react";

const JavaScriptCourse = ({ course }) => {
  const { courses } = course;
  return (
    <div className="mx-3 md:mx-10">
      {courses?.javascript && (
        <div className="overflow-x-auto no-scrollbar">
          <ul className="flex">
            {courses?.javascript?.content.map((course) => (
                <li
                    key={course?.id}
                    className="m-3 rounded text-gray-300 cursor-pointer"
                >
                  <div className="relative">
                    <img
                        className="relative md:max-w-full md:max-h-full w-[17rem] xs:w-[19rem] h-[10rem] xs:h-[12rem] md:w-[22rem] md:h-[15rem] object-left object-cover rounded-t-md"
                        src={course.thumbnail}
                        alt={course.title}
                    />
                    <p className="absolute top-3 left-3 bg-gradient-to-r from-teal-900 to-lime-700 text-white font-bold px-4 py-1.5 text-sm uppercase rounded-full shadow-md">
                      {course.level}
                    </p>
                    <div className="bg-[#2a323c] rounded-b-md p-2">
                      <p className="w-[16rem] xs:w-[18rem] md:w-[21rem] line-clamp-1 font-bold pt-2">
                        {course.title}
                      </p>
                      <p className="w-[16rem] xs:w-[18rem] md:w-[21rem] line-clamp-2 text-xs pt-2">
                        {course.description}
                      </p>
                      <div className="flex xs:items-center justify-between my-2">
                        <h6 className="text-mg font-bold pt-2">
                          ₹{course.price}
                        </h6>
                        <ul className="flex overflow-hidden items-center pt-2">
                          {course.tags.map((tag, index) =>
                              <li key={index}>
                                {tag === "react" ? (
                                    <img
                                        className="h-5 w-5 mx-1"
                                        src={ReactLogo}
                                        alt={tag}
                                    />
                                ) : tag === "js" ? (
                                    <img
                                        className="h-5 w-5 mx-1 rounded"
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                        alt={tag}
                                    />
                                ) : tag === "typescript" ? (
                                    <img
                                        className="h-6 w-6 mx-1"
                                        src={TypeScriptLogo}
                                        alt={tag}
                                    />
                                ) : tag === "redux" ? (
                                    <img
                                        className="h-5 w-5 mx-1 rounded bg-gray-300"
                                        src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
                                        alt={tag}
                                    />
                                ) : tag === "php" ? (
                                    <img
                                        className="h-5 w-5 mx-1 rounded bg-gray-600"
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                                        alt={tag}
                                    />
                                ) : tag === "laravel" ? (
                                    <img
                                        className="h-5 w-5 mx-1"
                                        src={Laravel}
                                        alt={tag}
                                    />
                                ) : tag === "mysql" ? (
                                    <img
                                        className="h-5 w-5 bg-gray-50 rounded mx-1"
                                        src={MySQL}
                                        alt={tag}
                                    />
                                ) : tag === "api" ? (
                                    <img
                                        className="h-6 w-6 mx-1"
                                        src={API}
                                        alt={tag}
                                    />
                                ) : tag === "graphql" ? (
                                    <img
                                        className="h-5 w-5 mx-1"
                                        src={GraphQL}
                                        alt={tag}
                                    />
                                ) : tag}
                              </li>
                          )}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between my-2">
                        <p>⭐⭐⭐⭐⭐</p>
                        <button className="bg-teal-700 p-2 px-4 font-bold" onClick={() => alert("Add to cart is currently under development")}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JavaScriptCourse;
