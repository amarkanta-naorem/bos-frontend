import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Dashboard/Body";
import Course from "../components/Dashboard/Body/Courses";
import Dashboard from "../components/Dashboard/Body/Dashboard/dashboard";
import LandingPage from "../components/LandingPage";

const WebRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/system/",
    element: <App />,
    children: [
      {
        path: "/system/",
        element: <Body />,
        children: [
          {
            path: "/system/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/system/course",
            element: <Course />,
          },
        ],
      },
    ],
  },
]);

export default WebRouter;
