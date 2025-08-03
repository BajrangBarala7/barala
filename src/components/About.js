import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with extensive experience in building scalable web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating robust, 
              scalable web applications using modern technologies. My expertise spans across frontend frameworks 
              like React and Next.js, backend technologies including Node.js and Express, and various databases.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying updated with the latest industry 
              trends. I enjoy solving complex problems and collaborating with teams to deliver exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Email</span>
              </div>
              <p className="text-gray-300">baralaoffice1@gmail.com</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Website</span>
              </div>
              <p className="text-gray-300">barala.info</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Location</span>
              </div>
              <p className="text-gray-300">Available for Remote Work</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;