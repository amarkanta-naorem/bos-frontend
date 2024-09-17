import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import { Provider } from "react-redux";
import Store from "./utils/redux/Store";
import Header from "./components/Dashboard/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  const location = useLocation();

  const pageCondition = (path = "system") => location.pathname.startsWith(path);
  return (
    <Fragment>
      <Provider store={Store}>
        {pageCondition ? <Header /> : <LandingPage />}
        <Outlet />
      </Provider>
    </Fragment>
  );
};

export default App;
