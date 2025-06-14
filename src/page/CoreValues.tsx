import { easeOut, motion } from "framer-motion";

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

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CoreValuesProps {
  values: Value[];
}

const CoreValues = ({ values }: CoreValuesProps) => {
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
          Our Core Values
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={scaleOnHover}
          >
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full w-fit mb-4">
              <value.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValues;
