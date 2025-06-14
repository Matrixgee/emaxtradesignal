import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../page/Home";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import PlansSection from "../page/PlansSection";
import ServicesSection from "../page/ServicesSection";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";
import AuthLayout from "../Layout/AuthLayout";

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
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
      {
        path:"plans",
        element:<PlansSection/>
      },
      {
        path:"services",
        element:<ServicesSection/>
      },
    ],
  },
  {
    element:<AuthLayout/>,
    children:[
      {
        path:"login",
        element:<LoginForm/>
      },
      {
        path:"register",
        element:<RegisterForm/>
      }
    ]
  }
]);
