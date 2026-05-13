import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-32 h-2 bg-accent-secondary mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ContactInfoCard icon={<Mail size={32} />} title="Email" detail="ankit.krdubey07@gmail.com" link="mailto:ankit.krdubey07@gmail.com" />
              <ContactInfoCard icon={<Phone size={32} />} title="Phone" detail="+91 7667719528" link="tel:+917667719528" />
              <div className="sm:col-span-2">
                <ContactInfoCard icon={<MapPin size={32} />} title="Location" detail="Dhanbad, Jharkhand, India" />
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden glass-card p-3 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977782163!2d86.35334705!3d23.7953931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a74cbdbb414f%3A0xc07ce9b0cb54fbfa!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.8rem', filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 md:p-14 rounded-[2.5rem] flex flex-col gap-8 border-white/5 hover:border-accent-secondary/30">
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">Send a Message</h3>
              <p className="text-xl text-gray-400 mb-4 font-medium">I'm currently looking for new opportunities. My inbox is always open!</p>

              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-lg font-bold text-gray-300 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/[0.03] border-2 border-white/5 focus:border-accent-primary rounded-2xl px-6 py-5 text-xl text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:bg-white/[0.05]"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-lg font-bold text-gray-300 ml-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/[0.03] border-2 border-white/5 focus:border-accent-primary rounded-2xl px-6 py-5 text-xl text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:bg-white/[0.05]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-lg font-bold text-gray-300 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/[0.03] border-2 border-white/5 focus:border-accent-primary rounded-2xl px-6 py-5 text-xl text-white outline-none transition-all duration-300 placeholder:text-gray-600 resize-none focus:bg-white/[0.05]"
                  placeholder="Hello Ankit, I'd like to discuss..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                type="submit"
                className="group w-full py-6 bg-accent-primary text-white font-black text-2xl rounded-2xl flex justify-center items-center gap-3 mt-4 hover:bg-accent-secondary transition-all duration-500 disabled:opacity-70 shadow-2xl shadow-accent-primary/20 hover-target"
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, title, detail, link }: { icon: React.ReactNode, title: string, detail: string, link?: string }) => {
  const content = (
    <div className="glass-card p-8 rounded-[2rem] flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 h-full hover-target border-white/5 hover:border-accent-primary/30">
      <div className="w-20 h-20 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center shrink-0 shadow-inner">
        {icon}
      </div>
      <div className="overflow-hidden">
        <h4 className="text-md text-gray-500 font-black uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xl text-white font-bold break-all">{detail}</p>
      </div>
    </div>
  );

  return link ? <a href={link} className="block h-full">{content}</a> : <div className="h-full">{content}</div>;
};

export default Contact;
