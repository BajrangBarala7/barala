import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Navbar = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrolled, 
  scrollToSection 
}) => {
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
          : 'bg-gray-900/80 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute -top-2 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Code className="w-5 h-5 text-white relative z-10" />
              </div>
            </motion.div>

            <motion.div className="flex flex-col">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                BB
              </motion.div>
              <motion.div 
                className="text-xs text-gray-400 font-medium tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                DEVELOPER
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div 
              className="ml-10 flex items-center space-x-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      layoutId="activeTab"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="bg-gray-800/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      activeSection === item.toLowerCase() 
                        ? 'bg-cyan-400' 
                        : 'bg-gray-600 group-hover:bg-cyan-400'
                    }`}
                    animate={{
                      scale: activeSection === item.toLowerCase() ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeSection === item.toLowerCase() ? Infinity : 0,
                    }}
                  />
                  <span>{item}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;