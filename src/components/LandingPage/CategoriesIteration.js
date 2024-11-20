import React from "react";
import ReactLogo from "../../assets/logos/react.svg";
import TypeScriptLogo from "../../assets/logos/typescript.svg";
import MySQL from "../../assets/logos/mysql.svg";
import GraphQL from "../../assets/logos/graphql.svg";
import API from "../../assets/logos/api.svg";
import Laravel from "../../assets/logos/Laravel.svg";

const CategoriesIteration = ({ category }) => {
  const { categories } = category;
  return (
    <>
      <ul className="flex items-center justify-center w-full text-white my-3">
        {categories.map((category, index) => (
          <li key={index} className="mx-5">
            <button>
              {category === "react" ? (
                <img src={ReactLogo} alt={category} />
              ) : category === "javascript" ? (
                <img
                  className="h-10 w-10 rounded"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt={category}
                />
              ) : category === "typescript" ? (
                <img src={TypeScriptLogo} alt={category} />
              ) : category === "redux" ? (
                <img
                  className="h-10 w-10 rounded bg-gray-300"
                  src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
                  alt={category}
                />
              ) : category === "php" ? (
                <img
                  className="h-10 w-10 rounded bg-gray-600"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                  alt={category}
                />
              ) : category === "laravel" ? (
                <img className="h-10 w-10" src={Laravel} alt={category} />
              ) : category === "mysql" ? (
                <img src={MySQL} alt={category} />
              ) : category === "api" ? (
                <img src={API} alt={category} />
              ) : category === "graphql" ? (
                <img src={GraphQL} alt={category} />
              ) : null}
            </button>
          </li>
        ))}
      </ul>
      <hr className="border-gray-700 mb-8 mx-52" />
    </>
  );
};

export default CategoriesIteration;
