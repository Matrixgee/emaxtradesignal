import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Crown,
  Sparkles,
} from "lucide-react";

const PricingPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              [0, 1, 2].forEach((index) => {
                setTimeout(() => {
                  setVisibleCards((prev) => new Set([...prev, index]));
                }, index * 150);
              });
            }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Starter Plan",
      description: "Ideal for beginners getting started with investing.",
      minInvestment: 100,
      maxInvestment: 1000,
      expectedReturn: "5% Monthly",
      managementFee: "1.5%",
      badge: "Beginner Friendly",
      color: "from-purple-600 to-purple-700",
      icon: Zap,
      cta: "Start Now",
    },
    {
      name: "Growth Plan",
      description: "Great for those growing their portfolio consistently.",
      minInvestment: 1000,
      maxInvestment: 10000,
      expectedReturn: "7% Monthly",
      managementFee: "1.2%",
      badge: "Growth Focused",
      color: "from-blue-600 to-blue-700",
      icon: TrendingUp,
      cta: "Grow with Us",
    },
    {
      name: "Professional",
      description: "Designed for serious investors and strategists.",
      minInvestment: 10000,
      maxInvestment: 50000,
      expectedReturn: "9% Monthly",
      managementFee: "1.0%",
      badge: "Investor’s Choice",
      color: "from-indigo-600 to-indigo-700",
      icon: Star,
      cta: "Join Pro Plan",
      popular: true,
    },
    {
      name: "Premium",
      description: "Elite tools for premium clients.",
      minInvestment: 50000,
      maxInvestment: 100000,
      expectedReturn: "11% Monthly",
      managementFee: "0.8%",
      badge: "Elite Service",
      color: "from-pink-600 to-pink-700",
      icon: Crown,
      cta: "Upgrade Now",
    },
    {
      name: "Golden",
      description: "For high-net-worth individuals needing top-tier services.",
      minInvestment: 100000,
      maxInvestment: 1000000,
      expectedReturn: "12%+ Monthly",
      managementFee: "0.5%",
      badge: "Ultimate Experience",
      color: "from-yellow-500 to-yellow-600",
      icon: Sparkles,
      cta: "Go Golden",
    },
  ];

  const formatPrice = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">
              Investment Plans
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Choose Your Investment Plan
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored investment strategies designed to maximize your returns
            across different investment levels
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group transform transition-all duration-700 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              } ${hoveredPlan === index ? "scale-105 z-10" : ""} ${
                plan.popular ? "lg:-mt-8" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`bg-gradient-to-r ${plan.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                  >
                    <Star className="w-4 h-4 inline mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-white/90 backdrop-blur-lg rounded-3xl border transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? "border-blue-300 shadow-2xl shadow-blue-500/25"
                    : "border-gray-200 hover:border-blue-200"
                } ${
                  hoveredPlan === index
                    ? "shadow-2xl shadow-blue-500/25"
                    : "shadow-xl"
                }`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan name and description */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Investment Range */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500">
                        Investment Range
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-800">
                        {formatPrice(plan.minInvestment)}
                      </span>
                      <span className="text-gray-500 text-lg">to</span>
                      <span className="text-3xl font-bold text-gray-800">
                        {formatPrice(plan.maxInvestment)}
                      </span>
                    </div>
                  </div>

                  {/* Returns & Fees */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm font-medium text-gray-700">
                        Expected Return
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {plan.expectedReturn}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm font-medium text-gray-700">
                        Management Fee
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {plan.managementFee}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-blue-500/50`
                        : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700"
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Need a custom investment solution above $600K?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Contact Our Investment Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
