import StatsSection from "./StatsSection";
import CoreValues from "./CoreValues";
import TeamSection from "./TeamSection";
import Timeline from "./Timeline";
import CallToAction from "./CallToAction";
import { BookOpen, Shield, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AboutHero from "./AboutHero";

const About = () => {
    const currentStats = {
        users: 1200000,
        trades: 2500,
        success: 96,
        years: 14,
    };


    const stats = {
        users: currentStats.users,
        trades: currentStats.trades,
        success: currentStats.success,
        years: currentStats.years,
    };

    const values = [
        {
            icon: Shield,
            title: "Security First",
            description: "Advanced encryption and multi-layer security protocols protect your investments and personal data with bank-grade security measures.",
        },
        {
            icon: Target,
            title: "Precision Trading",
            description: "AI-powered algorithms analyze market patterns in real-time to deliver highly accurate trading signals with 96.8% success rate.",
        },
        {
            icon: Zap,
            title: "Lightning Speed",
            description: "Execute trades in milliseconds with our high-performance trading infrastructure and ultra-low latency connections.",
        },
        {
            icon: BookOpen,
            title: "Education Focus",
            description: "Comprehensive learning resources, webinars, and expert analysis to help you become a better, more informed trader.",
        },
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "Chief Executive Officer",
            experience: "Former Goldman Sachs VP with 15+ years in financial markets",
            avatar: "SJ",
            color: "from-blue-500 to-blue-600",
        },
        {
            name: "Michael Chen",
            role: "Chief Technology Officer",
            experience: "Ex-Google AI Engineer specializing in financial algorithms",
            avatar: "MC",
            color: "from-green-500 to-green-600",
        },
        {
            name: "David Rodriguez",
            role: "Head of Trading",
            experience: "20+ years trading experience at JP Morgan and Deutsche Bank",
            avatar: "DR",
            color: "from-purple-500 to-purple-600",
        },
        {
            name: "Emily Watson",
            role: "Head of Research",
            experience: "PhD in Economics, former Federal Reserve analyst",
            avatar: "EW",
            color: "from-pink-500 to-pink-600",
        },
    ];

    const achievements = [
        { year: "2010", milestone: "Company Founded", description: "Started with a vision to democratize trading" },
        { year: "2015", milestone: "AI Integration", description: "First to implement machine learning in retail trading" },
        { year: "2020", milestone: "Global Expansion", description: "Expanded to serve traders in 50+ countries" },
        { year: "2024", milestone: "1M+ Users", description: "Reached over 1 million active traders worldwide" },
    ];
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-10"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-30"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Elements */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-40"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 12}%`,
                        }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 6,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <AboutHero/>
                <StatsSection stats={stats} />
                <CoreValues values={values} />
                <TeamSection team={team} />
                <Timeline achievements={achievements} />
                <CallToAction />
            </div>
        </section>
    )
}

export default About
