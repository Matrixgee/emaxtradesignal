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
// import Login from "../auth/login";
import Deposit from "../Clients/deposit";
import Withdraw from "../Clients/withdraw";
import History from "../Clients/history";
import AuthLayout from "../Layout/AuthLayout";
import Review from "../page/review";
import Account from "../Clients/Account/account";
import Profile from "../Clients/Account/profile";
import Security from "../Clients/Account/security";
import Packages from "../Clients/packages";
import Plans from "../Clients/plans";
import Support from "../Clients/support";
import AdminLayout from "../Layout/Adminlayout";
import AdminOverview from "../Admins/AdminOverview";
import AllTransactions from "../Admins/AllTranscations";
import AllUsers from "../Admins/AllUsers";
import AllWithdrawal from "../Admins/AllWithdrawal";
import UserDetails from "../Admins/userdetails";
import UserPrivateRoute from "./userprivate";
import LoginForm from "../auth/LoginForm";

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
        path: "review",
        element: <Review />,
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
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <Register />,
      },
    ],
  },

  {
    path: "user",
    element: (
      <UserPrivateRoute>
        <UserDashboardLayout />
      </UserPrivateRoute>
    ),
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
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "my-plans",
        element: <Plans />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "security",
            element: <Security />,
          },
        ],
      },
    ],
  },
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "adminhome",
        element: <AdminOverview />,
      },
      {
        path: "transactions",
        element: <AllTransactions />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "withdrawals",
        element: <AllWithdrawal />,
      },
      {
        path: "userdetails/:_id",
        element: <UserDetails />,
      },
    ],
  },
]);
