import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Dashboard/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import { CourseProvider } from "./utils/contexts/CourseContext";

const App = () => {
  const location = useLocation();

  const pageCondition = (path = "system") => location.pathname.startsWith(path);
  return (
    <Fragment>
      <CourseProvider>
          {pageCondition ? <Header /> : <LandingPage />}
          <Outlet />
      </CourseProvider>
    </Fragment>
  );
};

export default App;
