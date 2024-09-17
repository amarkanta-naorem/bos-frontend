import React, { Fragment } from "react";
import Header from "./components/Dashboard/Header";
import Body from "./components/Dashboard/Body";
import { Provider } from "react-redux";
import Store from "./utils/redux/Store";
import { Outlet } from "react-router";

const App = () => {
  return (
    <Fragment>
      <Provider store={Store}>
        <Header />
        <Outlet />
      </Provider>
    </Fragment>
  );
};

export default App;
