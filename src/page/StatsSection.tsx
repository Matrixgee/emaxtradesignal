import { easeOut, motion } from "framer-motion";
import { Users, TrendingUp, Award, Globe } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

interface StatsSectionProps {
  stats: {
    users: number;
    trades: number;
    success: number;
    years: number;
  };
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const statItems = [
    { number: stats.users, label: "Active Traders", icon: Users, suffix: "+" },
    { number: stats.trades, label: "Trading Volume", icon: TrendingUp, prefix: "$", suffix: "M+" },
    { number: stats.success, label: "Success Rate", icon: Award, suffix: "%" },
    { number: stats.years, label: "Years Experience", icon: Globe, suffix: "+" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {statItems.map((stat) => (
        <motion.div
          key={stat.label}
          className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={scaleOnHover}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stat.prefix}{stat.number.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-gray-500 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
