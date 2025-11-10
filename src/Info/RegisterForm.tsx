// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Lock,
//   Mail,
//   Phone,
//   Shield,
//   User,
//   AlertCircle,
// } from "lucide-react";
// import InputField from "../components/InputField";
// import { useNavigate } from "react-router-dom";
// import Logo from "../components/Logo";
// import toast from "react-hot-toast";
// import { FiCheck } from "react-icons/fi";
// import { isAxiosError } from "axios";

// type FormData = {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
// };

// type FormErrors = Partial<Record<keyof FormData | "terms", string>>;

// const RegisterForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors: FormErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     } else if (formData.fullName.trim().length < 2) {
//       newErrors.fullName = "Full name must be at least 2 characters";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.phoneNumber) {
//       newErrors.phoneNumber = "Phone number is required";
//     } else if (!/^\+?[\d\s\-()]+$/.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = "Please enter a valid phone number";
//     }

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//     } else if (formData.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
//       newErrors.username =
//         "Username can only contain letters, numbers, and underscores";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain uppercase, lowercase, and number";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!acceptTerms) {
//       newErrors.terms = "You must accept the terms and conditions";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     const toastLoadingId = toast.loading("Registering...");

//     try {
//       const res = await axios.post("user/signup", formData);
//       toast.success(res.data.message);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         userName: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setTimeout(() => {
//         window.location.href = "/review";
//       });
//     } catch (error: any) {
//       if (isAxiosError(error)) {
//         const errorMsg = error.response?.data?.message || "An error occurred";
//         toast.error(errorMsg);
//       } else {
//         toast.error("An unknown error occurred");
//       }
//     } finally {
//       setIsLoading(false);
//       toast.dismiss(toastLoadingId);
//     }
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       console.log("Registration submitted:", formData);
//     }, 2000);
//   };

//   const getPasswordStrength = () => {
//     const password = formData.password;
//     let strength = 0;

//     if (password.length >= 8) strength++;
//     if (/(?=.*[a-z])/.test(password)) strength++;
//     if (/(?=.*[A-Z])/.test(password)) strength++;
//     if (/(?=.*\d)/.test(password)) strength++;
//     if (/(?=.*[!@#$%^&*])/.test(password)) strength++;

//     return strength;
//   };

//   const passwordStrength = getPasswordStrength();
//   const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
//   const strengthColors = [
//     "bg-red-500",
//     "bg-orange-500",
//     "bg-yellow-500",
//     "bg-blue-500",
//     "bg-green-500",
//   ];

//   return (
//     <div className="w-full max-w-md ">
//       <div
//         className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 transform transition-all duration-1000 `}
//       >
//         <Logo />
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
//           <p className="text-gray-200">
//             Join thousands of successful traders today
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <InputField
//             icon={User}
//             placeholder="firstName"
//             value={formData.firstName}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("firstName", e.target.value)
//             }
//             error={errors.firstName}
//             required
//           />
//           <InputField
//             icon={User}
//             placeholder="lastName"
//             value={formData.lastName}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("lastName", e.target.value)
//             }
//             error={errors.lastName}
//             required
//           />
//           <InputField
//             icon={User}
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("username", e.target.value)
//             }
//             error={errors.username}
//             required
//           />

//           <InputField
//             icon={Mail}
//             type="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("email", e.target.value)
//             }
//             error={errors.email}
//             required
//           />

//           <InputField
//             icon={Phone}
//             type="tel"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("phoneNumber", e.target.value)
//             }
//             error={errors.phoneNumber}
//             required
//           />

//           <div>
//             <InputField
//               icon={Lock}
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                 handleInputChange("password", e.target.value)
//               }
//               error={errors.password}
//               showPasswordToggle
//               showPassword={showPassword}
//               onTogglePassword={() => setShowPassword(!showPassword)}
//               required
//             />
//             {formData.password && (
//               <div className="mt-2">
//                 <div className="flex items-center space-x-2 mb-1">
//                   <div className="flex-1 bg-gray-200 rounded-full h-2">
//                     <div
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         strengthColors[passwordStrength - 1] || "bg-gray-200"
//                       }`}
//                       style={{ width: `${(passwordStrength / 5) * 100}%` }}
//                     ></div>
//                   </div>
//                   <span className="text-xs text-gray-600">
//                     {strengthLabels[passwordStrength - 1] || ""}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>

//           <InputField
//             icon={Lock}
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleInputChange("confirmPassword", e.target.value)
//             }
//             error={errors.confirmPassword}
//             showPasswordToggle
//             showPassword={showConfirmPassword}
//             onTogglePassword={() =>
//               setShowConfirmPassword(!showConfirmPassword)
//             }
//             required
//           />

//           <div className="space-y-3">
//             <label className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 checked={acceptTerms}
//                 onChange={(e) => setAcceptTerms(e.target.checked)}
//                 className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
//               />
//               <span className="text-sm text-gray-200 leading-relaxed">
//                 I agree to the{" "}
//                 <button
//                   type="button"
//                   className="text-white hover:text-blue-700 font-medium"
//                 >
//                   Terms of Service
//                 </button>{" "}
//                 and{" "}
//                 <button
//                   type="button"
//                   className="text-white hover:text-blue-700 font-medium"
//                 >
//                   Privacy Policy
//                 </button>
//               </span>
//             </label>
//             {errors.terms && (
//               <div className="flex items-center text-red-600 text-sm">
//                 <AlertCircle className="w-4 h-4 mr-1" />
//                 <span>{errors.terms}</span>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={handleSubmit}
//             type="submit"
//             disabled={isLoading}
//             className={`
//             w-full py-3.5 px-6
//             bg-gradient-to-r from-blue-500 to-blue-600
//             text-white font-semibold rounded-lg
//             shadow-lg hover:shadow-xl
//             transition-all duration-300 ease-in-out
//             transform hover:scale-[1.02] active:scale-[0.98]
//             disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
//             focus:outline-none focus:ring-4 focus:ring-blue-300
//             relative overflow-hidden
//             ${
//               isLoading
//                 ? "hover:from-blue-500 hover:to-blue-600"
//                 : "hover:from-blue-600 hover:to-blue-700"
//             }
//           `}
//           >
//             <div className="flex items-center justify-center">
//               {isLoading ? (
//                 <>
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   <span>Creating Account...</span>
//                 </>
//               ) : (
//                 <>
//                   <span>Create Account</span>
//                   <FiCheck className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
//                 </>
//               )}
//             </div>

//             {/* Shimmer effect for loading state */}
//             {isLoading && (
//               <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
//             )}
//           </button>

//           <style>{`
//                     @keyframes shimmer {
//                       0% {
//                         transform: translateX(-100%) skewX(-12deg);
//                       }
//                       100% {
//                         transform: translateX(200%) skewX(-12deg);
//                       }
//                     }
//                     .animate-shimmer {
//                       animation: shimmer 2s infinite;
//                     }
//                   `}</style>
//         </form>

//         <div className="mt-8 text-center">
//           <p className="text-gray-200">
//             Already have an account?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="text-white cursor-pointer hover:underline hover:decoration-white font-semibold"
//             >
//               Sign In
//             </button>
//           </p>
//         </div>

//         <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-gray-100">
//           <div className="flex items-center space-x-1">
//             <Shield className="w-3 h-3" />
//             <span>Secure Registration</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Check className="w-3 h-3" />
//             <span>Verified Platform</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
