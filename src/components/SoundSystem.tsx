import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SoundSystem: React.FC = () => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('isMuted');
    return saved ? JSON.parse(saved) : true; // Default muted for better UX
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
  }, [isMuted]);

  useEffect(() => {
    if (isMuted) return;

    const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    
    hoverSound.volume = 0.1;
    clickSound.volume = 0.2;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
      }
    };

    const handleMouseDown = () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <>
      <button
        onClick={toggleMute}
        className="fixed bottom-32 left-10 z-[200] w-16 h-16 glass rounded-2xl flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white transition-all shadow-xl hover-target"
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
      </button>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-32 left-32 z-[200] glass px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm"
          >
            Audio: {isMuted ? 'Muted' : 'Enabled'}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SoundSystem;
