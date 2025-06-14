import { ArrowRight, Lock, Mail, Shield } from "lucide-react";
import React, { useState } from "react";
import InputField from "../components/InputField"; 
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";



interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login submitted:", formData);
    }, 2000);
  };

  const navigate = useNavigate()

  return (
    <div className="w-full max-w-md">
        
      <div
        className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 transform transition-all duration-1000 }`}
      >
        <Logo/>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-200">Sign in to your account to continue trading</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            icon={Mail}
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
            error={errors.email}
            required
          />

          <InputField
            icon={Lock}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
            error={errors.password}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            required
          />

          <div className="flex items-center justify-end text-sm">
            <button type="button" className="text-white cursor-pointer hover:underline hover:decoration-white font-medium">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full group cursor-pointer flex items-center justify-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span className="font-semibold text-lg text-blue-600">Sign In</span>
                <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-200">
            Don't have an account?{" "}
            <button
              onClick={()=>navigate("/register")}
              className="text-white cursor-pointer hover:underline hover:decoration-white font-semibold"
            >
              Create Account
            </button>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-gray-100">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>Secure Login</span>
          </div>
          <div className="flex items-center space-x-1">
            <Lock className="w-3 h-3" />
            <span>256-bit SSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
