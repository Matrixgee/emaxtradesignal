import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index!
            );
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "AI-Powered Signals",
      description:
        "Advanced machine learning algorithms analyze market trends 24/7 to provide you with the most accurate trading signals.",
      stats: "98.5% Accuracy",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Your funds and data are protected with military-grade encryption and multi-factor authentication.",
      stats: "256-bit SSL",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description:
        "Execute trades in milliseconds with our high-performance trading infrastructure and direct market access.",
      stats: "<10ms Latency",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Expert Community",
      description:
        "Join a community of professional traders and learn from market experts with decades of experience.",
      stats: "50K+ Members",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Award Winning Platform",
      description:
        "Recognized as the #1 trading platform by multiple financial publications and industry awards.",
      stats: "15+ Awards",
      color: "from-red-500 to-red-600",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Get instant help from our dedicated support team whenever you need assistance with your trading journey.",
      stats: "24/7 Available",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const achievements = [
    { number: "50K+", label: "Active Traders" },
    { number: "$2.5B+", label: "Trading Volume" },
    { number: "98.5%", label: "Success Rate" },
    { number: "150+", label: "Countries" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-5 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            visibleItems.has(-1)
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          data-index="-1"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">
              Why Choose Emax Signal Trade
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Built for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Trading Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our cutting-edge technology, expert
            insights, and unwavering commitment to your trading success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-700 cursor-pointer ${
                visibleItems.has(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              } ${hoveredCard === index ? "scale-105" : ""}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${feature.color} text-white rounded-full`}
                  >
                    {feature.stats}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div
          className={`bg-white rounded-3xl p-8 shadow-xl border border-blue-100 transform transition-all duration-1000 ${
            visibleItems.has(100)
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          data-index="100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Trusted by Traders Worldwide
            </h3>
            <p className="text-gray-600">
              Join thousands of successful traders who trust Emax Signal Trade
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${
            visibleItems.has(101)
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          data-index="101"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Trading Journey?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of successful traders and start making profitable
                trades with our advanced signals and expert guidance.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Free Today
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-white opacity-20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-white opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
