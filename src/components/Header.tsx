import { useState, useEffect } from "react";
import { Menu, X, User, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/EMAXLOGO.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Plans", path: "plans" },
    { name: "Contact", path: "contact" },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full h-[13vh] bg-blue-50">
      <header
        className={`fixed top-0  left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg  border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src={logo} alt="" className="w-[80px] h-[70px]" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => navigate("/auth/login")}
                className="flex cursor-pointer items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
              >
                <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Login</span>
              </button>
              <button
                onClick={() => navigate("/auth/signup")}
                className="flex cursor-pointer items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <LogIn className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 p-6 shadow-xl border border-blue-100">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-100 space-y-3">
                <button
                  onClick={() => navigate("/auth/login")}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => navigate("/auth/signup")}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
