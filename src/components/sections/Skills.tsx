import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiPython, SiC,
  SiHtml5, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiEclipseide
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#007396]" />, level: 85 },
      { name: 'C', icon: <SiC className="text-[#A8B9CC]" />, level: 80 },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 75 },
      { name: 'SQL', icon: <SiMysql className="text-[#4479A1]" />, level: 80 },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" />, level: 85 },
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, level: 85 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 80 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 85 },
      { name: 'REST APIs', icon: <span className="font-black text-accent-secondary">API</span>, level: 85 },
    ]
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
      { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 90 },
      { name: 'GitHub', icon: <SiGithub className="text-gray-200" />, level: 90 },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" />, level: 95 },
      { name: 'Eclipse', icon: <SiEclipseide className="text-[#2C2255]" />, level: 80 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-accent-secondary to-cyan-400 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-10 md:p-14 rounded-[2rem] border-white/5 hover:border-accent-secondary/30"
            >
              <h3 className="text-3xl font-black mb-10 text-text-primary flex items-center gap-4">
                <span className="w-2 h-8 bg-accent-secondary rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex items-center gap-5">
                        <span className="text-4xl transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-2xl text-text-secondary group-hover:text-text-primary transition-colors font-bold tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-lg text-accent-primary font-black">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.05, ease: "circOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-cyan-400 relative shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.2)_50%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:1.5rem_1.5rem] animate-[progress-stripes_2s_linear_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes progress-stripes {
          from { background-position: 3rem 0; }
          to { background-position: 0 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
