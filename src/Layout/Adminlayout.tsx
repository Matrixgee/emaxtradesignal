import { Outlet } from "react-router-dom";
import AdminSidebar from "../Admins/AdminSidebar";
import AdminHeader from "../Admins/AdminHeader";
import { useState } from "react";

const AdminLayout = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-screen w-screen max-w-[100vw] bg-white max-h-[100vh] overflow-hidden flex">
      <AdminSidebar active={active} setActive={setActive} />
      <div className="w-full h-full bg-white">
        <AdminHeader active={active} setActive={setActive} />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
