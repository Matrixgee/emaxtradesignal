import { easeInOut, motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

interface Achievement {
  year: string;
  milestone: string;
  description: string;
}

interface TimelineProps {
  achievements: Achievement[];
}

const Timeline = ({ achievements }: TimelineProps) => {
  return (
    <motion.div
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Our Journey
        </span>
      </motion.h2>

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-6 bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={scaleOnHover}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full font-bold min-w-fit">
              {item.year}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.milestone}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
