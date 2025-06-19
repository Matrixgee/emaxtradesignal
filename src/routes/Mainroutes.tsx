import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../page/Home";
import UserDashboardLayout from "../Layout/userdashbaordlayout";
import Overview from "../Clients/overview";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import PlansSection from "../page/PlansSection";
import ServicesSection from "../page/ServicesSection";
import Register from "../auth/register";
import Login from "../auth/login";
import Deposit from "../Clients/deposit";
import Withdraw from "../Clients/withdraw";
import History from "../Clients/history";

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
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
