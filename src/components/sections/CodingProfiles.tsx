import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu } from 'lucide-react';

const PROFILES = [
  {
    platform: 'LeetCode',
    problems: '100+',
    icon: <Code2 size={40} className="text-[#FFA116]" />,
    link: '#',
    color: 'from-[#FFA116]/20 to-transparent',
    border: 'group-hover:border-[#FFA116]',
  },
  {
    platform: 'GeeksforGeeks',
    problems: '100+',
    icon: <Terminal size={40} className="text-[#2F8D46]" />,
    link: '#',
    color: 'from-[#2F8D46]/20 to-transparent',
    border: 'group-hover:border-[#2F8D46]',
  },
  {
    platform: 'CodeChef',
    problems: 'Active',
    icon: <Cpu size={40} className="text-[#5B4638]" />,
    link: '#',
    color: 'from-[#5B4638]/20 to-transparent',
    border: 'group-hover:border-[#5B4638]',
  },
];

const CodingProfiles: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Coding <span className="text-gradient">Power</span>
          </h2>
          <div className="w-32 h-2 bg-accent-primary mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {PROFILES.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`glass-card p-12 rounded-[2.5rem] relative overflow-hidden group border-2 border-transparent ${profile.border} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover-target block`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  {React.cloneElement(profile.icon as any, { size: 64 })}
                </div>
                <h3 className="text-3xl font-black text-text-primary mb-4 tracking-tight">{profile.platform}</h3>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-500">
                  {profile.problems}
                </div>
                <p className="text-lg text-text-secondary mt-4 uppercase tracking-[0.2em] font-black group-hover:text-accent-primary transition-colors">Problems Solved</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
