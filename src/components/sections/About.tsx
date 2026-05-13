import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)]"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="xl:w-1/2"
          >
            <div className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-primary/5 rounded-full blur-[60px] group-hover:bg-accent-primary/10 transition-all duration-700"></div>
              <h3 className="text-3xl font-bold mb-8 text-text-primary flex items-center gap-4">
                <span className="w-12 h-1 bg-accent-primary rounded-full"></span>
                My Story
              </h3>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                I am a passionate <span className="text-text-primary font-bold border-b-2 border-accent-primary/30">Information Technology student</span> and <span className="text-text-primary font-bold border-b-2 border-accent-secondary/30">MERN Stack developer</span> with experience in building responsive and scalable web applications.
              </p>
              <p className="text-xl text-text-secondary leading-relaxed">
                I enjoy solving real-world problems using modern technologies and continuously improving my development skills. Currently pursuing my B.Tech at <span className="text-accent-primary font-semibold">UCET Hazaribagh</span>, maintaining a strong focus on software excellence and architectural clean code.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
          >
            <InfoCard 
              icon={<GraduationCap className="text-accent-primary" size={48} />}
              title="Education"
              subtitle="B.Tech (IT)"
              detail="2022 - 2026 | CGPA: 7.82"
              color="border-accent-primary/20"
            />
            <InfoCard 
              icon={<Code className="text-accent-secondary" size={48} />}
              title="Experience"
              subtitle="Internships"
              detail="Full Stack Dev"
              color="border-accent-secondary/20"
            />
            <InfoCard 
              icon={<BookOpen className="text-cyan-400" size={48} />}
              title="Projects"
              subtitle="10+ Live"
              detail="Completed & Scaled"
              color="border-cyan-400/20"
            />
            <InfoCard 
              icon={<Award className="text-yellow-400" size={48} />}
              title="Coding"
              subtitle="200+ Solved"
              detail="Data Structures"
              color="border-yellow-400/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; detail: string; color: string }> = ({ icon, title, subtitle, detail, color }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
    }}
    className={`glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-500 border ${color} hover:bg-white/[0.04]`}
  >
    <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-text-primary mb-2">{title}</h3>
    <h4 className="text-lg font-bold text-accent-secondary mb-3">{subtitle}</h4>
    <p className="text-md text-text-secondary font-medium">{detail}</p>
  </motion.div>
);

export default About;
