import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'Problem Solving Through Programming in C',
    issuer: 'NPTEL IIT-KGP',
    date: '2023',
  },
  {
    title: 'Java Programming',
    issuer: 'Coursera',
    date: '2023',
  },
  {
    title: 'Career Edge - Young Professional',
    issuer: 'TCS ION',
    date: '2024',
  },
  {
    title: 'Remote Sensing and Digital Image Analysis',
    issuer: 'IIRS ISRO',
    date: '2024',
  },
];

const Achievements: React.FC = () => {
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
            Elite <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-32 h-2 bg-yellow-500 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2rem] relative overflow-hidden group hover:-translate-y-3 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 text-accent-primary/5 group-hover:text-accent-primary/10 transition-colors duration-500">
                <Award size={150} />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-8 text-accent-primary shadow-inner">
                  <Star size={40} />
                </div>
                <h3 className="text-2xl font-black text-text-primary mb-4 line-clamp-2 min-h-[72px] leading-tight">{achievement.title}</h3>
                <p className="text-accent-primary font-bold text-lg mb-2">{achievement.issuer}</p>
                <p className="text-md text-text-secondary font-bold uppercase tracking-widest">{achievement.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
