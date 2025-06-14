
import { useState } from "react";
import {
  BarChart3,
  Check,
  Target,
  Brain,
  Globe,
  ChevronRight,
} from "lucide-react";

// Services Component
const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Signals",
      description: "Advanced machine learning algorithms analyze market patterns and provide real-time trading signals with 96.8% accuracy rate.",
      features: ["Real-time market analysis", "Pattern recognition", "Risk assessment", "Signal validation"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio tracking and performance analysis with detailed insights and recommendations.",
      features: ["Performance tracking", "Risk analysis", "Asset allocation", "Rebalancing alerts"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Personalized investment strategies tailored to your risk tolerance and financial goals.",
      features: ["Goal-based investing", "Risk profiling", "Strategy optimization", "Regular reviews"],
      color: "from-green-600 to-green-700"
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to international markets with real-time data and cross-border investment opportunities.",
      features: ["Multi-market access", "Currency hedging", "International diversification", "Global insights"],
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="relative z-10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 delay-500`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Investment Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to maximize your investment potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                activeService === index ? 'ring-4 ring-blue-200' : ''
              } `}
              style={{ animationDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`group flex items-center space-x-2 text-white px-6 py-3 bg-gradient-to-r ${service.color} rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <span className="font-semibold">Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection
