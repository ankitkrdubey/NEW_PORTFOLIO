import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedCursor from './components/AnimatedCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Terminal from './components/sections/Terminal';
import Achievements from './components/sections/Achievements';
import CodingProfiles from './components/sections/CodingProfiles';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import SoundSystem from './components/SoundSystem';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-bg-primary">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-t-accent-primary border-r-accent-secondary border-b-cyan-400 border-l-purple-500 rounded-full mb-8"
        />
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="text-2xl font-bold tracking-widest text-text-primary"
        >
          LOADING...
        </motion.h1>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary/30 selection:text-white">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-cyan-400 to-accent-secondary transform-origin-0 z-[1000]"
          style={{ scaleX }}
        />
        
        <AnimatedCursor />
        <ParticleBackground />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
          <Terminal />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </main>

        <AIAssistant />
        <SoundSystem />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
