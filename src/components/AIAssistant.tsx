import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Brain } from 'lucide-react';

const AI_RESPONSES: Record<string, string> = {
  "who are you": "I am Ankit's AI Assistant. I can tell you about his skills, projects, and experience!",
  "skills": "Ankit is a MERN Stack expert. He masters React, Node.js, MongoDB, Express, and modern styling with Tailwind CSS.",
  "projects": "Ankit has built several high-impact projects like HomelyHub (accommodation booking) and a full-featured Airbnb clone.",
  "experience": "He has completed internships at Cognifyz Technologies and Webstack Academy, focusing on Full Stack development.",
  "contact": "You can reach Ankit at ankitkumardubey@example.com or find him on LinkedIn and GitHub.",
  "education": "Ankit is pursuing a B.Tech in IT at UCET Hazaribagh (2022-2026) with a current CGPA of 7.82.",
  "resume": "You can download his resume by clicking the 'Get Resume' button in the Hero section!",
  "default": "I'm not sure about that. Try asking about his skills, projects, experience, or education! ✨"
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
    { role: 'ai', content: "Hello! I'm Ankit's virtual assistant. How can I help you today? 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let response = AI_RESPONSES.default;
      for (const key in AI_RESPONSES) {
        if (userMsg.includes(key)) {
          response = AI_RESPONSES[key];
          break;
        }
      }
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[200] w-20 h-20 bg-accent-primary text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] hover-target group"
      >
        <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-20"></div>
        <Bot size={40} className="group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, rotate: 5 }}
            className="fixed bottom-32 right-10 z-[201] w-[450px] max-w-[calc(100vw-40px)] h-[650px] glass-card rounded-[3rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] border-accent-primary/20"
          >
            {/* Header */}
            <div className="bg-accent-primary p-8 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Brain className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-none mb-1">Ankit's AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-xl flex items-center justify-center transition-all"
              >
                <X size={28} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-black/20" ref={scrollRef}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-6 rounded-3xl text-lg font-medium leading-relaxed ${
                    msg.role === 'ai' 
                      ? 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5' 
                      : 'bg-accent-primary text-white rounded-tr-none shadow-lg'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-6 rounded-3xl rounded-tl-none border border-white/5 flex gap-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-8 bg-white/5 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Ankit..."
                  className="w-full bg-black/40 border-2 border-white/10 focus:border-accent-primary rounded-2xl px-8 py-5 text-xl text-white outline-none transition-all pr-20"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-accent-primary text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
                >
                  <Send size={24} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <QuickChip label="Skills" onClick={() => setInput('skills')} />
                <QuickChip label="Projects" onClick={() => setInput('projects')} />
                <QuickChip label="Contact" onClick={() => setInput('contact')} />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

const QuickChip = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-xs font-black uppercase tracking-widest rounded-lg border border-white/5 transition-all"
  >
    {label}
  </button>
);

export default AIAssistant;
