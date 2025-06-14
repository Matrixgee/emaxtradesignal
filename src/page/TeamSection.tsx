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

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  avatar: string;
  color: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

const TeamSection = ({ team }: TeamSectionProps) => {
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
          Meet Our Team
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            variants={fadeInUp}
            whileHover={scaleOnHover}
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
              {member.avatar}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
            <p className="text-gray-600 text-xs leading-relaxed">{member.experience}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamSection;
