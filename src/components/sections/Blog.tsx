import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, X, ArrowRight } from 'lucide-react';

const BLOGS = [
  {
    id: 1,
    title: 'Mastering JWT Authentication',
    excerpt: 'Deep dive into JSON Web Tokens: How they work, why they are secure, and how to implement them in your MERN apps.',
    content: `
      <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p>
      <h3>How it Works</h3>
      <p>In a typical authentication flow, the server generates a token after a successful login and sends it back to the client. The client then includes this token in the header of subsequent requests.</p>
      <ul>
        <li><strong>Header:</strong> Contains metadata about the token type and hashing algorithm.</li>
        <li><strong>Payload:</strong> Contains claims (user data like ID or roles).</li>
        <li><strong>Signature:</strong> Ensures the token hasn't been tampered with.</li>
      </ul>
      <h3>Why use JWT?</h3>
      <p>It's stateless, meaning the server doesn't need to store session data, making it highly scalable for modern web applications.</p>
    `,
    date: 'May 10, 2024',
    readTime: '5 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'MongoDB Basics for Beginners',
    excerpt: 'Understanding NoSQL databases: Collections, Documents, and why MongoDB is the go-to for MERN developers.',
    content: `
      <p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas.</p>
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Collections:</strong> Equivalent to tables in relational databases.</li>
        <li><strong>Documents:</strong> Individual records stored in BSON (Binary JSON) format.</li>
        <li><strong>Fields:</strong> The key-value pairs within a document.</li>
      </ul>
      <h3>Advantages</h3>
      <p>The flexible schema allows developers to iterate quickly without complex migrations. It's built for high availability and horizontal scaling.</p>
    `,
    date: 'May 08, 2024',
    readTime: '4 min read',
    category: 'Database',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Seamless MERN Deployment',
    excerpt: 'A step-by-step guide to deploying your full-stack applications on platforms like Vercel, Render, or AWS.',
    content: `
      <p>Building an app is only half the battle. Deployment is where your code meets the world. For MERN apps, there are several popular strategies.</p>
      <h3>Deployment Steps</h3>
      <ol>
        <li><strong>Frontend:</strong> Build the React production bundle and deploy to Vercel or Netlify.</li>
        <li><strong>Backend:</strong> Deploy the Node/Express server to Render, Heroku, or a VPS like DigitalOcean.</li>
        <li><strong>Database:</strong> Use MongoDB Atlas for a cloud-hosted database.</li>
      </ol>
      <p>Don't forget to configure environment variables and CORS settings for a smooth production environment!</p>
    `,
    date: 'May 05, 2024',
    readTime: '6 min read',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'React Hooks Explained',
    excerpt: 'From useState to custom hooks: How to manage state and side effects in modern functional components.',
    content: `
      <p>React Hooks were introduced in version 16.8 and changed the way we write components. They allow us to use state and other React features without writing classes.</p>
      <h3>Essential Hooks</h3>
      <ul>
        <li><strong>useState:</strong> For managing local component state.</li>
        <li><strong>useEffect:</strong> For handling side effects like data fetching or DOM manipulation.</li>
        <li><strong>useContext:</strong> For accessing global context without prop drilling.</li>
      </ul>
      <p>Hooks promote code reuse and cleaner logic through custom hooks, making your codebase more maintainable.</p>
    `,
    date: 'May 01, 2024',
    readTime: '5 min read',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOGS[0] | null>(null);

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Technical <span className="text-gradient">Insights</span>
          </h2>
          <div className="w-32 h-2 bg-accent-primary mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOGS.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedBlog(blog)}
              className="glass-card group cursor-pointer overflow-hidden rounded-[2.5rem] border-white/5 hover:border-accent-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-accent-primary/80 backdrop-blur-md rounded-xl text-white text-sm font-black tracking-widest uppercase">
                  {blog.category}
                </div>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-6 text-text-secondary text-sm font-bold mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={18} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={18} /> {blog.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-text-primary mb-6 group-hover:text-accent-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-xl text-text-secondary mb-8 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-3 text-accent-primary font-black text-lg group-hover:gap-5 transition-all">
                  Read Article <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
              onClick={() => setSelectedBlog(null)}
            ></div>
            
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-8 right-8 z-50 w-14 h-14 bg-white/5 hover:bg-white/10 text-white rounded-2xl flex items-center justify-center transition-all"
              >
                <X size={32} />
              </button>

              <div className="overflow-y-auto p-10 md:p-16 custom-scrollbar">
                <div className="mb-12">
                  <div className="flex items-center gap-4 text-accent-primary font-black uppercase tracking-widest mb-6">
                    <span className="px-4 py-1 bg-accent-primary/10 rounded-full">{selectedBlog.category}</span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{selectedBlog.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-text-primary leading-tight mb-8">
                    {selectedBlog.title}
                  </h2>
                  <div className="h-1.5 w-32 bg-accent-primary rounded-full"></div>
                </div>

                <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
                  <img 
                    src={selectedBlog.image} 
                    alt={selectedBlog.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div 
                  className="prose prose-invert prose-xl max-w-none text-text-secondary leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                ></div>
                
                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent-primary flex items-center justify-center text-white">
                      <BookOpen size={32} />
                    </div>
                    <div>
                      <p className="text-text-secondary font-bold uppercase tracking-widest text-sm">Author</p>
                      <p className="text-xl font-black text-text-primary">Ankit Kumar Dubey</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedBlog(null)}
                    className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black text-lg rounded-2xl transition-all"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--accent-primary);
        }
        
        .prose h3 {
          color: white;
          font-weight: 900;
          font-size: 2rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .prose h3::before {
          content: '';
          width: 0.5rem;
          height: 2rem;
          background: var(--accent-primary);
          border-radius: 1rem;
        }
        .prose ul, .prose ol {
          margin: 2rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 1rem;
          position: relative;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default Blog;
