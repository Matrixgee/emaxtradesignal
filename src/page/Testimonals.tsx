import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  TrendingUp,
} from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Trader",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      profit: "+285%",
      text: "Emax Signal Trade completely transformed my trading experience. The AI-powered signals are incredibly accurate, and I've seen consistent profits month after month. The platform is intuitive and the support team is always there when I need help.",
      videoThumbnail: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investment Manager",
      location: "Singapore",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      profit: "+342%",
      text: "As someone who manages multiple portfolios, I need reliable and fast signals. Emax delivers exactly that. The real-time analytics and market insights have given me a significant edge in the market. Highly recommended!",
      videoThumbnail: false,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Day Trader",
      location: "London, UK",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      profit: "+198%",
      text: "I was skeptical at first, but the results speak for themselves. The platform's accuracy rate is phenomenal, and the community support is amazing. I've learned so much from other traders and improved my strategies significantly.",
      videoThumbnail: true,
    },
    {
      id: 4,
      name: "David Park",
      role: "Forex Specialist",
      location: "Seoul, South Korea",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      profit: "+267%",
      text: "The lightning-fast execution and comprehensive market analysis tools have made Emax my go-to platform. I've been trading for 8 years, and this is by far the most reliable platform I've used. The ROI has been exceptional.",
      videoThumbnail: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Crypto Trader",
      location: "Toronto, Canada",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      profit: "+156%",
      text: "The educational resources and community aspect of Emax are unmatched. I started as a beginner and now I'm consistently profitable. The mentorship program and expert webinars have been invaluable for my growth as a trader.",
      videoThumbnail: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const stats = [
    { label: "Happy Traders", value: "50,000+" },
    { label: "Success Stories", value: "12,500+" },
    { label: "Average Profit", value: "245%" },
    { label: "5 Star Reviews", value: "98%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">
              What Our Traders Say
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Real Stories,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our successful traders
            have to say about their experience with Emax Signal Trade.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 mt-8">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">5.0</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    />
                    {testimonials[currentSlide].videoThumbnail && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-all duration-300">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentSlide].location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Profit Display */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10 text-center text-white">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <div className="text-sm font-medium mb-2 opacity-90">
                    Total Profit Achieved
                  </div>
                  <div className="text-5xl font-bold mb-4">
                    {testimonials[currentSlide].profit}
                  </div>
                  <div className="text-blue-100 text-sm">
                    Since joining Emax Signal Trade
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                autoPlay
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {autoPlay ? "Auto-playing" : "Paused"} • Click to{" "}
              {autoPlay ? "pause" : "resume"}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful traders who are already profiting
              with Emax Signal Trade.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
