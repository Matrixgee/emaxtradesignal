import React from "react";
import {
  X,
  LayoutDashboard,
  CreditCard,
  ArrowUpFromLine,
  Users,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  icon: React.ReactElement;
  path: string;
}

interface AdminSidebarProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ active, setActive }) => {
  const [selectedMenu, setSelectedMenu] = React.useState<number | null>(0);

  const menuItems: MenuItem[] = [
    {
      name: "Overview",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/admin/adminhome",
    },
    {
      name: "All Transactions",
      icon: <CreditCard className="w-5 h-5" />,
      path: "/admin/transactions",
    },
    {
      name: "All Withdrawals",
      icon: <ArrowUpFromLine className="w-5 h-5" />,
      path: "/admin/withdrawals",
    },
    {
      name: "All Users",
      icon: <Users className="w-5 h-5" />,
      path: "/admin/allusers",
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

      <aside className={`admin-sidebar ${active ? "active" : ""}`}>
        {/* White background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Close button */}
        <button className="close-btn" onClick={() => setActive(!active)}>
          <X className="w-5 h-5" />
        </button>

        <div className="sidebar-inner">
          {/* Logo section */}
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-icon">
                <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="logo-text">
                <span className="brand-name">Admin Panel</span>
                <span className="brand-subtitle">Emax Signal Trade</span>
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
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-medium">A</span>
                </div>
              </div>
              <div className="user-details">
                <span className="user-name" style={{ color: "#612633" }}>
                  Administrator
                </span>
                <span className="user-status">Super Admin</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .admin-sidebar {
            width: 100%;
            max-width: 16rem;
            min-width: 16rem;
            height: 100vh;
            position: fixed;
            left: -20rem;
            top: 0;
            bottom: 0;
            z-index: 30;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-right: 1px solid rgba(239, 68, 68, 0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          @media (min-width: 768px) {
            .admin-sidebar {
              position: relative;
              left: 0;
            }
          }

          .admin-sidebar.active {
            left: 0;
          }

          .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            z-index: 10;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            color: #dc2626;
            padding: 0.5rem;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: all 0.2s ease;
            backdrop-filter: blur(8px);
          }

          .close-btn:hover {
            background: rgba(239, 68, 68, 0.2);
            transform: scale(1.05);
          }

          @media (min-width: 768px) {
            .close-btn {
              display: none;
            }
          }

          .sidebar-inner {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 5;
            padding: 1.5rem 1rem;
          }

          .logo-section {
            margin-bottom: 2rem;
          }

          .logo-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem;
          }

          .logo-text {
            display: flex;
            flex-direction: column;
          }

          .brand-name {
            color: #dc2626;
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .brand-subtitle {
            color: #ef4444;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .logo-divider {
            height: 1px;
            background: rgba(239, 68, 68, 0.2);
            margin-top: 1rem;
          }

          .navigation {
            flex: 1;
            overflow-y: auto;
          }

          .nav-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .nav-item {
            position: relative;
            cursor: pointer;
            border-radius: 1rem;
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .nav-item:hover {
            background: rgba(239, 68, 68, 0.1);
            transform: translateX(4px);
          }

          .nav-item.active {
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.2);
          }

          .nav-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1rem;
            position: relative;
            z-index: 2;
          }

          .nav-icon {
            color: #ef4444;
            transition: color 0.2s ease;
            flex-shrink: 0;
          }

          .nav-item:hover .nav-icon,
          .nav-item.active .nav-icon {
            color: #dc2626;
          }

          .nav-text {
            color: #dc2626;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .nav-item:hover .nav-text,
          .nav-item.active .nav-text {
            color: #b91c1c;
          }

          .active-indicator {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 60%;
            background: #dc2626;
            border-radius: 2px 0 0 2px;
            animation: slideIn 0.3s ease;
          }

          .sidebar-footer {
            margin-top: auto;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(239, 68, 68, 0.2);
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            background: rgba(239, 68, 68, 0.05);
            border-radius: 1rem;
            border: 1px solid rgba(239, 68, 68, 0.1);
          }

          .user-details {
            display: flex;
            flex-direction: column;
          }

          .user-name {
            color:#612633;
            font-size: 0.875rem;
            font-weight: 600;
          }

          .user-status {
            color: #ef4444;
            font-size: 0.75rem;
            font-weight: 500;
          }

          @keyframes slideIn {
            from {
              height: 0;
            }
            to {
              height: 60%;
            }
          }

          /* Custom scrollbar */
          .navigation::-webkit-scrollbar {
            width: 4px;
          }

          .navigation::-webkit-scrollbar-track {
            background: transparent;
          }

          .navigation::-webkit-scrollbar-thumb {
            background: rgba(239, 68, 68, 0.3);
            border-radius: 2px;
          }

          .navigation::-webkit-scrollbar-thumb:hover {
            background: rgba(239, 68, 68, 0.5);
          }
        `}</style>
      </aside>
    </div>
  );
};

export default AdminSidebar;
