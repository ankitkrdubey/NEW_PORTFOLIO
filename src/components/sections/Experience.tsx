import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const EXPERIENCES = [
  {
    title: 'Web Development Intern',
    company_name: 'Cognifyz Technologies',
    icon: <Code size={32} />,
    iconBg: '#1a1a2e',
    date: 'Feb 2024 – Mar 2024',
    points: [
      'Built a responsive image gallery and a highly interactive landing page.',
      'Worked extensively with HTML, CSS, and JavaScript to enhance user experience.',
      'Ensured cross-browser compatibility and optimized web page loading speeds.'
    ],
  },
  {
    title: 'Full Stack Web Development Intern',
    company_name: 'Webstack Academy (WSA)',
    icon: <Briefcase size={32} />,
    iconBg: '#1a1a2e',
    date: 'Sept 2025 – Nov 2025',
    points: [
      'Learned advanced MERN Stack development concepts and best practices.',
      'Built SDLC-based projects using React, Node.js, and MongoDB.',
      'Developed RESTful APIs and integrated them with frontend React applications.',
      'Participated in code reviews and agile development workflows.'
    ],
  },
];

const ExperienceCard = ({ experience, theme }: { experience: any, theme: string }) => {
  const isLight = theme === 'light';
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 15, 25, 0.6)',
        color: isLight ? '#0f172a' : '#fff',
        border: `2px solid ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(139,92,246,0.2)'}`,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        borderRadius: '2rem',
        padding: '3rem'
      }}
      contentArrowStyle={{ borderRight: `12px solid ${isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 15, 25, 0.6)'}` }}
      date={experience.date}
      iconStyle={{ background: isLight ? '#7c3aed' : '#8b5cf6', color: '#fff', boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
      icon={experience.icon}
      dateClassName={isLight ? 'text-gray-700 font-bold text-xl' : 'text-gray-300 font-bold text-xl'}
    >
      <div className="mb-6">
        <h3 className="text-3xl font-black tracking-tight">{experience.title}</h3>
        <p className="text-accent-primary font-black text-xl mt-2 tracking-wide" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-8 list-none space-y-4">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-lg flex items-start gap-4 leading-relaxed"
          >
            <span className="w-2 h-2 mt-2 bg-accent-primary rounded-full shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Career <span className="text-gradient">Path</span>
          </h2>
          <div className="w-32 h-2 bg-accent-primary mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="mt-16 flex flex-col">
          <VerticalTimeline 
            lineColor={theme === 'light' ? '#7c3aed' : '#8b5cf6'}
            animate={true}
          >
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
