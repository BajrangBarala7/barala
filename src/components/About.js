import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone, Award, Briefcase, Calendar } from 'lucide-react';

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
            React Developer, Web Development and Web Design
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
              Currently working as a Website Developer at Technocia India since April 2025. 
              With 1 year 8 months of total experience, specializing in React, Node.js, and modern web development. 
              Previously worked as a React Developer and Web Designer at Axis Web Art Private Limited.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Bachelor of Computer Applications (BCA) graduate from Maharaja Ganga Singh University, Bikaner. 
              Passionate about creating modern, responsive web applications and staying updated with the latest web technologies and development practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">1yr 8mo</div>
                <div className="text-gray-300 font-medium">Total Experience</div>
                <div className="text-gray-400 text-sm mt-1">Web Development</div>
              </motion.div>

              <motion.div
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">5mo</div>
                <div className="text-gray-300 font-medium">Current Role</div>
                <div className="text-gray-400 text-sm mt-1">Technocia India</div>
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
              <p className="text-gray-300">bajarangbarala@gmail.com</p>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Phone</span>
              </div>
              <p className="text-gray-300">8107180136</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Location</span>
              </div>
              <p className="text-gray-300">Jaipur, Rajasthan, India</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;