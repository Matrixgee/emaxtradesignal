import { ArrowRight, Award, Check, Shield, Star, Zap } from "lucide-react";
import { useState } from "react";

const PlansSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter Plan",
      priceRange: "$100 - $1k",
      description: "Ideal for beginners getting started with investing.",
      features: [
        "Basic AI signals (up to 10/day)",
        "Portfolio tracking",
        "Email notifications",
        "Community access",
        "Mobile app access",
      ],
      popular: false,
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Growth Plan",
      priceRange: "$1k - $10k",
      description: "Great for those growing their portfolio consistently.",
      features: [
        "Advanced AI signals",
        "Real-time notifications",
        "Risk analytics",
        "Priority support",
        "Portfolio insights",
      ],
      popular: false,
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Professional",
      priceRange: "$10k - $50k",
      description: "Designed for serious investors and strategists.",
      features: [
        "Unlimited AI insights",
        "Dedicated portfolio manager",
        "Advanced dashboard tools",
        "Custom alerts",
        "API access",
      ],
      popular: true,
      color: "from-purple-700 to-purple-800",
    },
    {
      name: "Premium",
      priceRange: "$50k - $100k",
      description: "Elite tools for premium clients.",
      features: [
        "All Professional features",
        "1-on-1 strategy sessions",
        "Exclusive market reports",
        "High-priority support",
      ],
      popular: false,
      color: "from-purple-800 to-purple-900",
    },
    {
      name: "Golden",
      priceRange: "$100k+",
      description: "For high-net-worth individuals needing top-tier services.",
      features: [
        "White-label solutions",
        "24/7 premium support",
        "Bespoke tools",
        "Institutional-grade security",
        "Custom integrations",
      ],
      popular: false,
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section className="relative z-10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 delay-700 `}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your pattern
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options to match your investment goals and
            experience level
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 transform hover:scale-105 ${
                plan.popular ? "ring-4 ring-blue-300 scale-105" : ""
              } ${hoveredPlan === index ? "shadow-2xl" : ""}`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">
                    {plan.priceRange}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full group flex items-center justify-center space-x-3 px-8 py-4 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                } rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                <span className="font-semibold text-lg">
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-1000`}
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Award-winning support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Instant activation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
