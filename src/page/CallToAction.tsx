import { easeIn, motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeIn,
    },
  },
};

const CallToAction = () => {
  return (
    <motion.div
      className="text-center bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-3xl shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Start Your Trading Journey?
      </h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Join thousands of successful traders who trust Emax Signal Trade for their investment needs.
      </p>
      <motion.button
        className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started Today
      </motion.button>
    </motion.div>
  );
};

export default CallToAction;
