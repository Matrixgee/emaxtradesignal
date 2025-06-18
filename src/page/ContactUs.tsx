import React, { useState } from 'react';
import { AnimatePresence, easeInOut, motion, type Transition, type Variants } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Shield,
  Headphones,
  TrendingUp,
  BarChart3,
  CheckCircle,
} from 'lucide-react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    investmentType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string|null>(null);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        investmentType: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      subDetails: "Available 24/7 for urgent trading matters",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@Emax Signal Trade.com",
      subDetails: "Response within 2 hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: "123 Wall Street, New York, NY 10005",
      subDetails: "Visit us for in-person consultations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Trading Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      subDetails: "Extended hours during market volatility",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const supportTypes = [
    { icon: TrendingUp, title: "Trading Signals", color: "text-blue-600" },
    { icon: BarChart3, title: "Market Analysis", color: "text-green-600" },
    { icon: Shield, title: "Account Security", color: "text-purple-600" },
    { icon: Headphones, title: "Technical Support", color: "text-orange-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

const itemTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 10
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: itemTransition
  }
};

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const faqs = [
  {
    question: "How quickly can I start trading?",
    answer:
      "Once your account is verified, you can start trading within 24 hours with our instant setup process.",
  },
  {
    question: "What's the minimum investment?",
    answer:
      "You can start with as little as $100, making our platform accessible to traders of all experience levels.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes, we use bank-level encryption and segregated accounts to ensure your funds are completely secure.",
  },
  {
    question: "Do you offer training?",
    answer:
      "Absolutely! We provide comprehensive training materials, webinars, and one-on-one coaching sessions.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-10"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-30"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-40"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 11}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your trading to the next level? Our expert team is here to guide you through every step of your investment journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Start Your Journey
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our trading experts will get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Interest
                  </label>
                  <select
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select an option</option>
                    <option value="forex">Forex Trading</option>
                    <option value="stocks">Stock Trading</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="commodities">Commodities</option>
                    <option value="portfolio">Portfolio Management</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your trading goals and experience..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="font-semibold text-lg">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="font-semibold text-lg">Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Choose the best way to reach us. Our dedicated support team is available to assist you with all your trading needs.
              </p>
            </motion.div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Support Types */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                We Can Help With:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {supportTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <type.icon className={`w-5 h-5 ${type.color}`} />
                    <span className="text-gray-700 font-medium text-sm">
                      {type.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 cursor-pointer select-none"
            onClick={() => toggleOpen(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
              {/* Arrow icon (simple chevron) */}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MdKeyboardArrowDown />
              </motion.span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-sm overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-500 text-sm">Active Traders</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">$1.2B</div>
              <div className="text-gray-500 text-sm">Trading Volume</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">96.8%</div>
              <div className="text-gray-500 text-sm">Success Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust our platform. Get started with a free consultation and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 cursor-pointer rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start trading today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;