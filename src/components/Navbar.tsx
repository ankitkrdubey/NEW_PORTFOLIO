import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Console', href: '#terminal' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-3xl font-black tracking-tighter group">
          <span className="text-gradient">ANKIT</span>
          <span className="text-gray-500 group-hover:text-white transition-colors duration-300">.DevX</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-black text-gray-400 hover:text-white transition-all duration-300 hover-target uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover-target shadow-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={28} className="text-yellow-400" /> : <Moon size={28} className="text-accent-primary" />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-6">
          <button onClick={toggleTheme} className="w-12 h-12 rounded-xl glass flex items-center justify-center" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-accent-primary" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-2xl z-[99] xl:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-4"
            >
              <X size={48} />
            </button>

            <ul className="flex flex-col items-center gap-12 text-4xl font-black">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white hover:text-accent-primary transition-colors tracking-tighter"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
