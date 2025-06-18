import { motion, easeOut } from 'framer-motion';

const AboutHero = () => {

    const fadeInUp = {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };
    
    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

  return (
    <>
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Emax Signal Trade
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We're revolutionizing the trading industry with cutting-edge AI technology, 
            helping thousands of traders achieve consistent profits through intelligent market analysis.
          </motion.p>
        </motion.div>
    </>
  )
}

export default AboutHero
