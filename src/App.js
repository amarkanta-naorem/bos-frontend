import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Dashboard/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  const location = useLocation();

  const pageCondition = (path = "system") => location.pathname.startsWith(path);
  return (
    <Fragment>
      {pageCondition ? <Header /> : <LandingPage />}
      <Outlet />
    </Fragment>
  );
};

export default App;
