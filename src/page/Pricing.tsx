// import React, { useState, useEffect, useRef } from "react";
// import { Check, X, ArrowRight, Star } from "lucide-react";

// const PricingPlans = () => {
//   // Removed unused isVisible state
//   const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
//   const [billingCycle] = useState("monthly");
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               [0, 1, 2].forEach((index) => {
//                 setTimeout(() => {
//                   setVisibleCards((prev) => new Set([...prev, index]));
//                 }, index * 200);
//               });
//             }, 300);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   type Feature = {
//     text: string;
//     included: boolean;
//   };

//   type Plan = {
//     name: string;
//     description: string;
//     monthlyPrice: number;
//     yearlyPrice: number;
//     discount?: string;
//     badge?: string;
//     color: string;
//     icon: React.ElementType;
//     cta: string;
//     features: Feature[];
//     popular?: boolean;
//   };

//   const plans: Plan[] = [
//     /* ... same plans as before ... */
//   ];

//   const getPrice = (plan: Plan) =>
//     billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
//   const getMonthlyPrice = (plan: Plan) =>
//     billingCycle === "monthly"
//       ? plan.monthlyPrice
//       : Math.round(plan.yearlyPrice / 12);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
//     >
//       {/* ... background and header code ... */}

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//         {plans.map((plan, index) => (
//           <div
//             key={plan.name}
//             className={`relative group transform transition-all duration-700 ${
//               visibleCards.has(index)
//                 ? "translate-y-0 opacity-100 scale-100"
//                 : "translate-y-10 opacity-0 scale-95"
//             } ${hoveredPlan === index ? "scale-105" : ""} ${
//               plan.popular ? "lg:-mt-4" : ""
//             }`}
//             onMouseEnter={() => setHoveredPlan(index)}
//             onMouseLeave={() => setHoveredPlan(null)}
//           >
//             {plan.badge && (
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//                 <div
//                   className={`bg-gradient-to-r ${plan.color} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}
//                 >
//                   <Star className="w-4 h-4 inline mr-1" />
//                   {plan.badge}
//                 </div>
//               </div>
//             )}

//             <div
//               className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
//                 plan.popular
//                   ? "border-2 border-blue-200"
//                   : "border border-gray-100"
//               }`}
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
//               ></div>

//               <div className="relative p-8 pb-4">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <plan.icon className="w-8 h-8 text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {plan.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

//                 <div className="mb-6">
//                   <div className="flex items-baseline space-x-2">
//                     <span className="text-4xl font-bold text-gray-800">
//                       ${getMonthlyPrice(plan)}
//                     </span>
//                     <span className="text-gray-500">/month</span>
//                   </div>
//                   {billingCycle === "yearly" && (
//                     <div className="flex items-center space-x-2 mt-2">
//                       <span className="text-sm text-gray-500 line-through">
//                         ${plan.monthlyPrice}/month
//                       </span>
//                       <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
//                         {plan.discount}
//                       </span>
//                     </div>
//                   )}
//                   {billingCycle === "yearly" && (
//                     <div className="text-sm text-gray-500 mt-1">
//                       Billed annually (${getPrice(plan)})
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
//                     plan.popular
//                       ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-blue-500/25`
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   <span className="flex items-center justify-center space-x-2">
//                     <span>{plan.cta}</span>
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                   </span>
//                 </button>
//               </div>

//               <div className="p-8 pt-4 border-t border-gray-200">
//                 <ul className="space-y-4">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center space-x-3">
//                       {feature.included ? (
//                         <Check className="text-green-500 w-5 h-5" />
//                       ) : (
//                         <X className="text-red-400 w-5 h-5" />
//                       )}
//                       <span
//                         className={`text-sm ${
//                           feature.included
//                             ? "text-gray-700"
//                             : "text-gray-400 line-through"
//                         }`}
//                       >
//                         {feature.text}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

const Pricing = () => {
  return <div>Pricing</div>;
};

export default Pricing;
