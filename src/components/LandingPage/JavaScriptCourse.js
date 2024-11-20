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
    <div className="mx-10">
        {courses.javascript && (
            <div className="overflow-x-auto no-scrollbar">
                <ul className="flex">
                    {courses.javascript.content.map((category) => (
                        <>
                            <li
                                key={category.id}
                                className="m-3 rounded text-gray-300 cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        className="relative max-w-full max-h-full w-[22rem] h-[15rem] object-left object-cover rounded-t-md"
                                        src={category.thumbnail}
                                        alt={category.title}
                                    />
                                    <p className="absolute top-3 left-3 bg-gradient-to-r from-teal-900 to-lime-700 text-white font-bold px-4 py-1.5 text-sm uppercase rounded-full shadow-md">
                                        {category.level}
                                    </p>
                                    <div className="bg-[#2a323c] rounded-b-md p-2">
                                        <p className="w-[21rem] line-clamp-1 font-bold pt-2">
                                            {category.title}
                                        </p>
                                        <p className="w-[21rem] line-clamp-2 text-xs pt-2">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center justify-between my-2">
                                            <h6 className="text-mg font-bold pt-2">
                                                ₹ {category.price}
                                            </h6>
                                            <h6 className="flex flex-wrap items-center pt-2">
                                                {category.tags.map((tag) =>
                                                    tag === "react" ? (
                                                        <img
                                                            className="h-5 w-5 mx-1"
                                                            src={ReactLogo}
                                                            alt={tag}
                                                        />
                                                    ) : tag === "js" ? (
                                                        <img
                                                            className="h-5 w-5 mx-1 rounded"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                                            alt={category}
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
                                                        <img className="h-5 w-5 mx-1" src={API} alt={tag}/>
                                                    ) : tag === "graphql" ? (
                                                        <img
                                                            className="h-5 w-5 mx-1"
                                                            src={GraphQL}
                                                            alt={tag}
                                                        />
                                                    ) : null
                                                )}
                                            </h6>
                                        </div>
                                        <div className="flex items-center justify-between my-2">
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <button className="bg-teal-700 p-2 px-4 font-bold">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default JavaScriptCourse;
