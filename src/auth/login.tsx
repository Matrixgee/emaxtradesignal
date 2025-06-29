import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axiosconfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../Global/AdminSlice";
import { setToken, setUser } from "../Global/UserSlice";
import logo from "../assets/EMAXLOGO.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const loadingId = toast.loading("Please wait");
    try {
      const res = await axios.post("/user/login", formData);
      console.log(res);

      const userId = res.data.data._id;

      toast.success("Login Successful");

      setTimeout(() => {
        if (res.data.data.isAdmin) {
          dispatch(setAdminToken(res.data.data.token));
          navigate("/admin/adminhome");
        } else {
          dispatch(setUser(res.data.user));
          dispatch(setToken(res.data.token));
          localStorage.setItem("userId", userId);
          navigate("/user/overview");
        }
      }, 3000);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("Error occurred");
      }
      setFormData({ email: "", password: "" });
    } finally {
      setLoading(false);
      toast.dismiss(loadingId);
    }
  };

  // console.log(`VITE_DEVE_URL = https://vert-w5v9.onrender.com/api`);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <motion.div
        className="w-full max-w-md p-8 bg-white/70 flex flex-col items-center backdrop-blur-md rounded-2xl shadow-xl border border-blue-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center mb-[23px] gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" className="h-[80px] w-[95px]" />
        </motion.div>
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-gray-800"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-gray-800"
              placeholder="••••••••"
            />
          </div>

          <div className="text-right text-sm">
            <Link
              to="/forgetpassword"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
