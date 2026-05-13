import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import ThreeBackground from '../ThreeBackground';

import profile from '../../assets/profile.jpg';

const TECH_ORBIT = [
  { icon: <FaReact />, color: '#61DAFB' },
  { icon: <FaNodeJs />, color: '#339933' },
  { icon: <SiMongodb />, color: '#47A248' },
  { icon: <SiExpress />, color: '#ffffff' },
  { icon: <FaJs />, color: '#F7DF1E' },
  { icon: <FaGitAlt />, color: '#F05032' },
  { icon: <SiTailwindcss />, color: '#06B6D4' },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <ThreeBackground />
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Profile with Orbit */}
          <div className="relative mb-16">
            {/* Rotating Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] md:inset-[-60px] rounded-full border border-white/5 pointer-events-none"
            >
              {TECH_ORBIT.map((tech, index) => {
                const angle = (index / TECH_ORBIT.length) * Math.PI * 2;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 glass rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-xl border-white/10"
                    style={{
                      transform: `translate(calc(-50% + ${Math.cos(angle) * 100}%), calc(-50% + ${Math.sin(angle) * 100}%))`,
                      color: tech.color
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {tech.icon}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-accent-primary p-2 shadow-[0_0_50px_rgba(139,92,246,0.4)] relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20 blur-md"></div>
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative z-10 border border-white/10">
                <img
                  src={profile}
                  alt="Ankit Kumar Dubey"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-accent-secondary font-black tracking-[0.3em] uppercase mb-6"
          >
            Creative Developer
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight text-text-primary"
          >
            Ankit <span className="text-gradient">Kumar Dubey</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-12 min-h-[60px] md:min-h-[80px]"
          >
            <span className="text-gray-500 mr-4">Crafting</span>
            <span className="text-text-primary border-b-4 border-accent-primary pb-2">
              <Typewriter
                words={['Experiences', 'Full Stack Apps', 'MERN Solutions', 'Future Tech']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative px-10 py-5 bg-accent-primary text-white font-bold text-xl rounded-2xl overflow-hidden flex items-center justify-center gap-3 hover-target transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                Get Resume <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            <a
              href="#projects"
              className="px-10 py-5 bg-transparent border-2 border-accent-primary/50 hover:border-accent-primary text-text-primary font-bold text-xl rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-accent-primary/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover-target hover:scale-105 active:scale-95"
            >
              See Projects <Send size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-8"
          >
            <SocialIcon href="https://github.com/ankit-kumar-dubey" icon={<FaGithub size={32} />} label="GitHub" />
            <SocialIcon href="https://linkedin.com/in/ankit-kumar-dubey" icon={<FaLinkedin size={32} />} label="LinkedIn" />
            <SocialIcon href="mailto:ankit.krdubey07@gmail.com" icon={<Mail size={32} />} label="Email" />
          </motion.div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-20 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary/20 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary/20 blur-[150px]"></div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-accent-primary/20 hover:border-accent-primary transition-all duration-500 hover-target hover:-translate-y-2 group shadow-xl"
  >
    <div className="group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
  </a>
);

export default Hero;
