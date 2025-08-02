'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BB
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bajrang Barala
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Full Stack Developer
                </p>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Passionate about creating scalable web applications and innovative digital solutions. 
                  With expertise in modern technologies, I transform ideas into exceptional user experiences.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get In Touch
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>

              <div className="flex gap-6">
                <a href="mailto:baralaoffice1@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/bajrang-barala-51948925a" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full opacity-40 animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with extensive experience in building scalable web applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating robust, 
                scalable web applications using modern technologies. My expertise spans across frontend frameworks 
                like React and Next.js, backend technologies including Node.js and Express, and various databases.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about writing clean, maintainable code and staying updated with the latest industry 
                trends. I enjoy solving complex problems and collaborating with teams to deliver exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Email</span>
                </div>
                <p className="text-gray-600">baralaoffice1@gmail.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Website</span>
                </div>
                <p className="text-gray-600">barala.info</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Location</span>
                </div>
                <p className="text-gray-600">Available for Remote Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-2">{skill.level}%</div>
              </div>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js',
              'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="text-sm font-medium text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My professional journey in the IT industry, showcasing growth, achievements, and the value I've brought to different organizations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Experience card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
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
                        <div key={idx} className="flex items-start gap-3">
                          <ChevronRight className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to work together? Let's discuss your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Start a Conversation</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">baralaoffice1@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">LinkedIn</div>
                    <div className="text-gray-600">linkedin.com/in/bajrang-barala</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Website</div>
                    <div className="text-gray-600">barala.info</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              BB
            </div>
            <p className="text-gray-400 mb-6">
              Building digital experiences with passion and precision
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:baralaoffice1@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/bajrang-barala-51948925a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
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
}