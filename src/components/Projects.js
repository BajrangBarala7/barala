import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gotham NYC - Cannabis Dispensary',
      description: 'Female-founded legal cannabis dispensary platform with lifestyle integration, featuring delivery/pickup services, age verification, product catalog, and cultural experiences in NYC.',
      technologies: ['Vue.js', 'Redux', 'Node.js', 'Payment Gateway', 'Location Services', 'Age Verification', 'E-commerce'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754224099/65901d0b-c8c3-4aae-b156-11f4492221c7.png',
      demoUrl: 'https://www.gotham.nyc/',
      githubUrl: '#'
    },
    {
      title: 'HariGurus - Spiritual Learning Platform',
      description: 'Online spiritual learning and guidance platform featuring courses, guru consultations, meditation resources, and community features for spiritual growth.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Video Streaming', 'Payment Gateway'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754223679/8bb6f5dd-9f02-43dc-acdf-f5dfcae9d455.png',
      demoUrl: 'https://www.harigurus.com/',
      githubUrl: '#'
    },
    {
      title: 'BSLifeCard Partner Dashboard',
      description: 'Comprehensive partner dashboard for BSLifeCard management with analytics, partner registration, commission tracking, and administrative controls.',
      technologies: ['React', 'Dashboard UI', 'Chart.js', 'API Integration', 'Netlify'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754222521/36b1ee58-8451-44de-a362-8994f5740bc5.png',
      demoUrl: 'https://dulcet-stardust-c25cc3.netlify.app/',
      githubUrl: '#'
    },
    {
      title: 'BSLifeCard Mobile App',
      description: 'Progressive web application for life card management with user authentication, card tracking, notifications, and mobile-responsive interface.',
      technologies: ['React', 'PWA', 'JavaScript', 'CSS3', 'Netlify'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754222693/82ce8a4d-e785-4ded-b6e2-9a00fc9fc08b.png',
      demoUrl: 'https://ubiquitous-donut-125c3b.netlify.app/',
      githubUrl: '#'
    },
    {
      title: 'LoBecho - E-commerce Builder',
      description: 'No-code e-commerce platform enabling SMBs to create online stores with 0% commission, payment integration, bulk uploads, and delivery management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway', 'WhatsApp API'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754221791/b7440e1a-5186-44ed-b3c7-53201ffe6b68.png',
      demoUrl: 'https://www.lobecho.com/',
      githubUrl: '#'
    },
    {
      title: 'VC Lottery ',
      description: 'Online lottery management system with real-time draws, user registration, payment processing, and comprehensive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754220984/b4c7f31a-bb21-475f-97df-cb5a2eef6c8e.png',
      demoUrl: 'https://vc-lottery.com/',
      githubUrl: '#'
    },
    {
      title: 'Tarra777',
      description: 'A mobile betting application featuring lottery games, secure wallet management, recharge and withdrawal functionality, VIP levels, and an intuitive UI with orange and black theme.',
      technologies: ['React Native', 'Node.js', 'MySQL', 'API Integration'],
      image: 'https://res.cloudinary.com/dnvksefrb/image/upload/v1754221297/Media_ptugfv.jpg',
      demoUrl: 'https://tarra777.com/',
      githubUrl: '#'
    }

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;