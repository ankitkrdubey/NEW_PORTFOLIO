import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Play, Bot, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    name: 'HomelyHub',
    description: 'A full-stack accommodation booking platform with authentication, booking system, advanced filtering, payment integration, and REST APIs.',
    tags: [
      { name: 'React.js', color: 'text-blue-400' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'MongoDB', color: 'text-green-400' },
    ],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    video: 'https://cdn.pixabay.com/vimeo/328941011/living-room-22444.mp4?width=1280&hash=8c3a9f0e6e7d6b8c8d8e8f8g8h8i8j8k8l8m8n8o',
    source_code_link: 'https://github.com/ankit-kumar-dubey',
    live_link: '#',
    category: 'Full Stack',
  },
  {
    name: 'Airbnb Clone',
    description: 'Comprehensive property listing platform featuring secure authentication, full CRUD capabilities for listings, review system, and password encryption.',
    tags: [
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'MongoDB', color: 'text-green-400' },
      { name: 'EJS', color: 'text-yellow-400' },
    ],
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800',
    video: 'https://cdn.pixabay.com/vimeo/192270928/apartment-6385.mp4?width=1280&hash=7a6b5c4d3e2f1g0h9i8j7k6l5m4n3o2p1q0r9s8t',
    source_code_link: 'https://github.com/ankit-kumar-dubey',
    live_link: '#',
    category: 'Backend',
  },
  {
    name: 'Medical Website',
    description: 'A responsive healthcare platform allowing users to book appointments, view doctor profiles, and access medical services seamlessly.',
    tags: [
      { name: 'HTML5', color: 'text-orange-500' },
      { name: 'CSS3', color: 'text-blue-500' },
      { name: 'JS', color: 'text-yellow-300' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    video: 'https://cdn.pixabay.com/vimeo/459345751/doctor-51368.mp4?width=1280&hash=6a5b4c3d2e1f0g9h8i7j6k5l4m3n2o1p0q9r8s7t',
    source_code_link: 'https://github.com/ankit-kumar-dubey',
    live_link: '#',
    category: 'Frontend',
  },
];

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Backend'];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full sm:w-[450px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        options={{
          max: 10,
          scale: 1.02,
          speed: 1000,
        }}
        className="glass-card p-8 rounded-[2.5rem] h-full flex flex-col hover-target group border-white/5 hover:border-accent-primary/50 overflow-hidden"
      >
        <div className="relative w-full h-[300px] rounded-[1.8rem] overflow-hidden mb-8 shadow-2xl bg-black">
          {/* Video / Image Logic */}
          <AnimatePresence mode="wait">
            {isHovered && project.video ? (
              <motion.video
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <motion.img
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            )}
          </AnimatePresence>
          
          {/* Play Icon Hint */}
          {!isHovered && project.video && (
            <div className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-none animate-pulse">
              <Play size={24} fill="white" />
            </div>
          )}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-6 backdrop-blur-sm">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 rounded-2xl bg-white/10 hover:bg-white/20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-white" size={32} />
            </a>
            <a
              href={project.live_link}
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 rounded-2xl bg-accent-primary flex justify-center items-center cursor-pointer hover:bg-accent-secondary transition-all duration-300 hover:scale-110 shadow-lg shadow-accent-primary/40"
            >
              <ExternalLink className="text-white" size={32} />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-text-primary font-black text-3xl tracking-tight group-hover:text-accent-primary transition-colors">{project.name}</h3>
             <span className="text-xs font-black uppercase tracking-[0.2em] bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">
               {project.category}
             </span>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 line-clamp-3 font-medium">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tags.map((tag: any) => (
            <span
              key={`${project.name}-${tag.name}`}
              className={`text-sm px-4 py-2 rounded-xl glass ${tag.color} font-black tracking-wider uppercase bg-white/[0.02] border border-white/5`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-lg mb-12"></div>
        </motion.div>

        {/* AI Project Matcher */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 p-10 glass-card rounded-[2.5rem] border-accent-primary/20 bg-accent-primary/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles size={100} className="text-accent-primary" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-accent-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <Bot size={50} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">AI Project Matcher</h3>
              <p className="text-xl text-gray-400 mb-6 font-medium">Not sure where to start? Let my AI recommend the best project for your interests!</p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveCategory('Full Stack')}
                  className="px-6 py-3 bg-white/5 hover:bg-accent-primary text-white rounded-xl transition-all font-bold text-lg"
                >
                  I want to see Full Apps 🚀
                </button>
                <button 
                  onClick={() => setActiveCategory('Backend')}
                  className="px-6 py-3 bg-white/5 hover:bg-accent-primary text-white rounded-xl transition-all font-bold text-lg"
                >
                  I love Data & APIs ⚙️
                </button>
                <button 
                  onClick={() => setActiveCategory('Frontend')}
                  className="px-6 py-3 bg-white/5 hover:bg-accent-primary text-white rounded-xl transition-all font-bold text-lg"
                >
                  I prefer UI/UX 🎨
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-6 mb-20"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-10 py-4 rounded-2xl text-lg font-black transition-all duration-500 hover-target ${
                activeCategory === category
                  ? 'bg-accent-primary text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] scale-110'
                  : 'glass text-text-secondary hover:text-text-primary hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} index={index} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
