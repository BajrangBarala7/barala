import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
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
            BB
          </motion.div>
          <p className="text-gray-400 mb-6">
            Building digital experiences with passion and precision
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <motion.a 
              href="mailto:baralaoffice1@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/bajrang-barala-51948925a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Bajrang Barala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;