/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const UserPrivateRoute = ({ children }: Props) => {
  const userToken = useSelector((state: any) => state.user.Token);

  if (!userToken) return <Navigate to="/auth/signup" />;

  // If `children` is passed, render it; otherwise, fallback to <Outlet />
  return <>{children || <Outlet />}</>;
};

export default UserPrivateRoute;
