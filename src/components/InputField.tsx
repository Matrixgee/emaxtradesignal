import { AlertCircle, Eye, EyeOff } from "lucide-react";
import React from "react";

interface InputFieldProps {
  icon: React.ComponentType<any>;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void; // optional now
  showPassword?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false,
  required = false,
}) => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full pl-12 pr-12 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          }`}
        />
        {showPasswordToggle && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {error && (
        <div className="flex items-center mt-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
