import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe,UploadCloud  } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React/Next.js', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 65, icon: <Server className="w-5 h-5" /> },
    // { name: 'Database Design', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Full Stack Development', level: 88, icon: <Globe className="w-5 h-5" /> },
    { name: 'App Deployment', level: 75, icon: <UploadCloud className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-400">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'React-Native',
            'Next.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Git',
            'Tailwind CSS',
            'HTML',
            'CSS',
            // 'Bootstrap'
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)",
                backgroundColor: "rgba(6, 182, 212, 0.1)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300">{tech}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;