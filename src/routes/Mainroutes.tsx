import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../page/Home";

import Login from "../auth/login";
import Register from "../auth/register";
import UserDashboardLayout from "../Layout/userdashbaordlayout";
import Overview from "../Clients/overview";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import PlansSection from "../page/PlansSection";
import ServicesSection from "../page/ServicesSection";

export const MainRoutes = createBrowserRouter([
  {
    path: "",
    element: <Homelayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "plans",
        element: <PlansSection />,
      },
      {
        path: "services",
        element: <ServicesSection />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "user",
    element: <UserDashboardLayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);
