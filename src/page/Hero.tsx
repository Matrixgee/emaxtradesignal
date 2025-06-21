import { useState, useEffect } from "react";
import {
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Play,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [currentStats, setCurrentStats] = useState({
    users: 0,
    trades: 0,
    success: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animate numbers
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCurrentStats({
          users: Math.floor(50000 * progress),
          trades: Math.floor(1200 * progress),
          success: Math.floor(96.8 * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, increment);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: TrendingUp, text: "Real-time Signals" },
    { icon: BarChart3, text: "Advanced Analytics" },
    { icon: Shield, text: "Secure Trading" },
    { icon: Zap, text: "Lightning Fast" },
  ];

  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Floating Chart Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "6s",
            }}
          >
            <div className="w-4 h-4 bg-blue-400 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Trade Smarter
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Win Bigger
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of successful traders using our AI-powered signals
              and advanced analytics to maximize their investment returns.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span className="font-semibold text-lg">Start Trading Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-lg">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {currentStats.users.toLocaleString()}+
                </div>
                <div className="text-gray-500 text-sm">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  ${currentStats.trades.toLocaleString()}M
                </div>
                <div className="text-gray-500 text-sm">Trading Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {currentStats.success}%
                </div>
                <div className="text-gray-500 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">
                  Live Trading Dashboard
                </div>
              </div>

              {/* Mock Chart */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold text-gray-700">
                    Portfolio Performance
                  </div>
                  <div className="text-blue-600 text-sm font-bold">+24.5%</div>
                </div>

                {/* Animated Chart Bars */}
                <div className="flex items-end space-x-1 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm flex-1 animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Trading Signals */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-600 mb-2">
                  Recent Signals
                </div>
                {[
                  { pair: "EUR/USD", type: "BUY", profit: "+15.2%" },
                  { pair: "GBP/JPY", type: "SELL", profit: "+8.7%" },
                  { pair: "USD/CAD", type: "BUY", profit: "+12.1%" },
                ].map((signal, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 rounded-lg p-2"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          signal.type === "BUY" ? "bg-blue-400" : "bg-blue400"
                        } animate-pulse`}
                      ></div>
                      <span className="text-xs font-medium">{signal.pair}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          signal.type === "BUY"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-blue100 text-blue700"
                        }`}
                      >
                        {signal.type}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-blue-600">
                      {signal.profit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <TrendingUp className="w-6 h-6" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
