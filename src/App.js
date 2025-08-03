import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  ChevronRight,
  Download,
  Zap
} from 'lucide-react';

const CompletePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Generate network nodes for background
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 3 + 1,
    color: Math.random() > 0.7 ? 'cyan' : Math.random() > 0.4 ? 'purple' : 'blue',
  }));

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const skills = [
    { name: 'React/Next.js', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 85, icon: <Server className="w-5 h-5" /> },
    { name: 'Database Design', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Full Stack Development', level: 88, icon: <Globe className="w-5 h-5" /> },
  ];

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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts and comprehensive reporting features.',
      technologies: ['React', 'D3.js', 'Node.js', 'MySQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Futuristic Navbar */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Skills Section */}
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
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js',
              'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
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

      {/* Experience Section */}
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

      {/* Projects Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default CompletePortfolio;