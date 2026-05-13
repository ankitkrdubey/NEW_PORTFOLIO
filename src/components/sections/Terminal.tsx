import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const COMMANDS = {
  whoami: "Ankit Kumar Dubey | Full Stack Developer | B.Tech IT (2022-2026) | CGPA: 7.82",
  skills: "Frontend: React, Tailwind, JS | Backend: Node, Express, REST APIs | DB: MongoDB, SQL",
  projects: "1. HomelyHub (Full Stack) | 2. Airbnb Clone (Backend) | 3. Medical Site (Frontend)",
  contact: "Email: ankitkumardubey@example.com | Location: Dhanbad, Jharkhand",
  resume: "Resume download initiated... (Check the 'Get Resume' button in Hero)",
  help: "Available commands: whoami, skills, projects, contact, resume, clear, help",
};

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ cmd: string; resp: string }[]>([
    { cmd: 'welcome', resp: 'Type "help" to see available commands.' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const resp = COMMANDS[cmd as keyof typeof COMMANDS] || `Command not found: ${cmd}. Type "help" for assistance.`;
    
    setHistory([...history, { cmd: input, resp }]);
    setInput('');
  };

  const quickCommand = (cmd: string) => {
    const resp = COMMANDS[cmd as keyof typeof COMMANDS] || "";
    setHistory([...history, { cmd, resp }]);
  };

  return (
    <section id="terminal" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Developer <span className="text-gradient">Console</span>
          </h2>
          <div className="w-32 h-2 bg-accent-primary mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-8 py-6 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-4">
              <TerminalIcon size={24} className="text-accent-primary" />
              <span className="text-lg font-black text-white tracking-widest uppercase">ankit@portfolio:~</span>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-500/50"></div>
              <div className="w-4 h-4 rounded-full bg-green-500/50"></div>
              <div className="w-4 h-4 rounded-full bg-red-500/50"></div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-10 bg-black/40 backdrop-blur-3xl font-mono">
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto mb-8 custom-scrollbar space-y-6"
            >
              {history.map((entry, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-300">
                  {entry.cmd !== 'welcome' && (
                    <div className="flex items-center gap-3 text-accent-secondary mb-2">
                      <span className="text-green-400 font-bold">➜</span>
                      <span className="text-cyan-400 font-bold">~</span>
                      <span className="text-white">{entry.cmd}</span>
                    </div>
                  )}
                  <div className="text-gray-300 text-xl leading-relaxed whitespace-pre-wrap">
                    {entry.resp}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="flex items-center gap-4">
              <span className="text-green-400 font-bold text-2xl">➜</span>
              <span className="text-cyan-400 font-bold text-2xl">~</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="bg-transparent border-none outline-none text-white text-2xl w-full caret-accent-primary font-bold"
                placeholder="Type a command..."
              />
            </form>
          </div>

          {/* Quick Commands */}
          <div className="bg-white/5 p-8 border-t border-white/10 flex flex-wrap gap-4">
            {Object.keys(COMMANDS).filter(k => k !== 'help').map((cmd) => (
              <button
                key={cmd}
                onClick={() => quickCommand(cmd)}
                className="px-6 py-2 glass rounded-xl text-sm font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-accent-primary transition-all duration-300 hover-target"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Terminal;
