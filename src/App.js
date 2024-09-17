import React, { Fragment } from "react";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import Store from "./utils/redux/Store";
import Header from "./components/Dashboard/Header";

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
