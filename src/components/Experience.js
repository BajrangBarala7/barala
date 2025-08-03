import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2022 - Present',
      description: 'Led development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved application performance by 40%.',
      achievements: [
        'Architected scalable microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Pvt Ltd',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using MERN stack. Collaborated with design teams to create responsive web applications.',
      achievements: [
        'Built 10+ responsive web applications',
        'Integrated third-party APIs and payment systems',
        'Optimized database queries improving response times by 35%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Solutions',
      duration: '2019 - 2020',
      description: 'Specialized in creating responsive, user-friendly interfaces with modern frontend technologies and frameworks.',
      achievements: [
        'Delivered pixel-perfect implementations from designs',
        'Improved website loading speeds by 50%',
        'Collaborated with UX/UI designers on user experience improvements'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional journey in the IT industry, showcasing growth, achievements, and the value I've brought to different organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />
                
                {/* Experience card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-white p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
                      backgroundColor: "rgba(31, 41, 55, 0.9)"
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm mb-3">Key Achievements:</h4>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;