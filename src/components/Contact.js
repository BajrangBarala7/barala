import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-300">baralaoffice1@gmail.com</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">LinkedIn</div>
                  <div className="text-gray-300">linkedin.com/in/bajrang-barala</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Globe className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Website</div>
                  <div className="text-gray-300">barala.info</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;