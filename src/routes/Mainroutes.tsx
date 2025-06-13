import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../page/Home";

export const MainRoutes = createBrowserRouter([
  {
    path: "",
    element: <Homelayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
