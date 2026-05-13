import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-secondary pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">

          <div className="lg:col-span-2">
            <a href="#home" className="text-4xl font-black tracking-tighter inline-block mb-8">
              <span className="text-gradient">ANKIT</span>
              <span className="text-gray-500">.DUBEY</span>
            </a>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-medium">
              A visionary Full Stack Developer architecting the next generation of digital experiences with precision, passion, and performance.
            </p>
            <div className="flex gap-6">
              <SocialLink href="https://github.com/ankit-kumar-dubey" icon={<FaGithub size={28} />} />
              <SocialLink href="https://linkedin.com/in/ankit-kumar-dubey" icon={<FaLinkedin size={28} />} />
              <SocialLink href="mailto:ankit.krdubey07@gmail.com" icon={<Mail size={28} />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-sm border-b border-white/10 pb-4">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink href="#about">About Me</FooterLink>
              <FooterLink href="#skills">Technical Skills</FooterLink>
              <FooterLink href="#experience">Career Path</FooterLink>
              <FooterLink href="#projects">Portfolio</FooterLink>
              <FooterLink href="#blog">Technical Blog</FooterLink>
              <FooterLink href="#terminal">Developer Console</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-sm border-b border-white/10 pb-4">Connect</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink href="https://linkedin.com/in/ankit-kumar-dubey">LinkedIn</FooterLink>
              <FooterLink href="https://github.com/ankit-kumar-dubey">GitHub</FooterLink>
              <FooterLink href="mailto:ankit.krdubey07@gmail.com">Email Me</FooterLink>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-lg flex items-center gap-2 font-bold">
            © {new Date().getFullYear()} Crafted with <Heart size={20} className="text-red-500 fill-red-500 animate-pulse" /> by
            <span className="text-white">Ankit Kumar Dubey</span>
          </p>

          <button
            onClick={scrollToTop}
            className="w-16 h-16 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center hover:bg-accent-primary hover:text-white transition-all duration-500 hover-target shadow-lg group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={32} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-primary transition-all duration-500 hover-target shadow-xl"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-accent-primary transition-all duration-300 hover-target text-lg font-bold"
    >
      {children}
    </a>
  </li>
);

export default Footer;
