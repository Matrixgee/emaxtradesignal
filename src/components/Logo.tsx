import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()


  return (
    <div className="flex items-center justify-center mb-8 cursor-pointer" onClick={()=>navigate("/")}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-white to-gray-200 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-base font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            Emax Signal Trade
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo
