import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Hero = ({ scrollToSection, dimensions }) => {
  // Generate network nodes for background
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 3 + 1,
    color: Math.random() > 0.7 ? 'cyan' : Math.random() > 0.4 ? 'purple' : 'blue',
  }));

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full"
            style={{
              left: node.x,
              top: node.y,
              width: node.size * 2,
              height: node.size * 2,
              background: node.color === 'cyan' 
                ? 'radial-gradient(circle, #06b6d4, #0891b2)' 
                : node.color === 'purple'
                ? 'radial-gradient(circle, #8b5cf6, #7c3aed)'
                : 'radial-gradient(circle, #3b82f6, #1d4ed8)',
              boxShadow: `0 0 ${node.size * 4}px ${
                node.color === 'cyan' ? '#06b6d4' : 
                node.color === 'purple' ? '#8b5cf6' : '#3b82f6'
              }`,
            }}
            initial={{ 
              scale: 0, 
              opacity: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.8],
              x: [
                Math.random() * 200 - 100,
                Math.random() * 100 - 50,
                Math.random() * 200 - 100
              ],
              y: [
                Math.random() * 200 - 100,
                Math.random() * 100 - 50,
                Math.random() * 200 - 100
              ],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing background orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-gray-300 block">Hi, I'm</span>
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Bajrang Barala
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl sm:text-3xl text-gray-300 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Full Stack Developer
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Passionate about creating scalable web applications and innovative digital solutions. 
                With expertise in modern technologies, I transform ideas into exceptional user experiences.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
                Download CV
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {[
                { icon: Mail, href: "mailto:baralaoffice1@gmail.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bajrang-barala-51948925a" },
                { icon: Github, href: "https://github.com" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-96 h-96 relative"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-600/30 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: '0 0 50px rgba(6, 182, 212, 0.3)',
                  }}
                />
                
                <motion.div
                  className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500/40 via-cyan-500/30 to-blue-600/40 backdrop-blur-sm"
                  animate={{
                    scale: [1.05, 1, 1.05],
                    rotate: [-180, 180],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute inset-24 rounded-full bg-gradient-to-br from-cyan-500/60 via-blue-600/50 to-purple-700/60 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [180, -180],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;