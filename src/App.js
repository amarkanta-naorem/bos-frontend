import React, { Fragment, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Dashboard/Header";
import LandingPage from "./components/LandingPage";
import SidebarToggleContext from "./utils/Contexts/SidebarToggleContext";
import { CourseProvider } from "./utils/Contexts/CourseContext";

const App = () => {
  const [isSidebarToggle, setIsSidebarToggle] = useState({isToggleOpen: true})
  const location = useLocation();

  const pageCondition = (path = "system") => location.pathname.startsWith(path);
  return (
    <Fragment>
      <CourseProvider>
        <SidebarToggleContext.Provider value={{...isSidebarToggle, setIsSidebarToggle}}>
          {pageCondition ? <Header /> : <LandingPage />}
          <Outlet />
        </SidebarToggleContext.Provider>
      </CourseProvider>
    </Fragment>
  );
};

export default App;
