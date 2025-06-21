import React from "react";
import {
  X,
  LayoutDashboard,
  ArrowDownToLine,
  ArrowUpFromLine,
  Repeat,
  Package,
  History,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/EMAXLOGO.png";
import "./sidebar.css";

interface MenuItem {
  name: string;
  icon: React.ReactElement;
  path: string;
}

interface SidebarProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  const [selectedMenu, setSelectedMenu] = React.useState<number | null>(0);

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/user/overview",
    },
    {
      name: "Deposit",
      icon: <ArrowDownToLine className="w-5 h-5" />,
      path: "/user/deposit",
    },
    {
      name: "Withdrawal",
      icon: <ArrowUpFromLine className="w-5 h-5" />,
      path: "/user/withdraw",
    },
    {
      name: "My Plans",
      icon: <Repeat className="w-5 h-5" />,
      path: "/user/my-plans",
    },
    {
      name: "Packages",
      icon: <Package className="w-5 h-5" />,
      path: "/user/packages",
    },
    {
      name: "History",
      icon: <History className="w-5 h-5" />,
      path: "/user/history",
    },
    {
      name: "Support",
      icon: <Headphones className="w-5 h-5" />,
      path: "/user/support",
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (path: string, index: number) => {
    setSelectedMenu(index);
    navigate(path);
    setActive(false);
  };

  return (
    <div className="relative">
      {/* Backdrop blur overlay for mobile */}
      {active && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setActive(false)}
        />
      )}

      <aside className={`sidebar ${active ? "active" : ""}`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/30 to-blue-900/95 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 to-blue-500/5"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Close button */}
        <button className="close-btn" onClick={() => setActive(!active)}>
          <X className="w-5 h-5" />
        </button>

        <div className="sidebar-inner">
          {/* Logo section */}
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-icon">
                <div className="w-8 h-8  rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-10 h-8 text-white"
                    />
                  </span>
                </div>
              </div>
              <div className="logo-text">
                <span className="brand-name">Emax Signal Trade</span>
                <span className="brand-subtitle">Trading Platform</span>
              </div>
            </div>
            <div className="logo-divider"></div>
          </div>

          {/* Navigation items */}
          <nav className="navigation">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    selectedMenu === index ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item.path, index)}
                >
                  <div className="nav-content">
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                  </div>
                  {selectedMenu === index && (
                    <div className="active-indicator"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-avatar">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
              </div>
              <div className="user-details">
                <span className="user-name">Trading Account</span>
                <span className="user-status">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
