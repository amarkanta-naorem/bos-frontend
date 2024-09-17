import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="py-10">
        <h1>Hello, this is Landing Page</h1>
      </div>
      <div className="w-36 mx-auto border p-5 cursor-pointer">
        <Link to={'/system/dashboard'}>Dashboard</Link>
      </div>
    </Fragment>
  );
};

export default LandingPage;
