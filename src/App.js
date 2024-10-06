import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Dashboard/Header";
import LandingPage from "./components/LandingPage";
import SidebarToggleContext from "./utils/Contexts/SidebarToggleContext";

const App = () => {
  const [isSidebarToggle, setIsSidebarToggle] = useState({isToggleOpen: true})
  const location = useLocation();

  const pageCondition = (path = "system") => location.pathname.startsWith(path);
  return (
    <Fragment>
      <SidebarToggleContext.Provider value={{...isSidebarToggle, setIsSidebarToggle}}>
        {pageCondition ? <Header /> : <LandingPage />}
        <Outlet />
      </SidebarToggleContext.Provider>
    </Fragment>
  );
};

export default App;
