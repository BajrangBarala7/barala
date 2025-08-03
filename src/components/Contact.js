import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:bajarangbarala@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear the contentEditable fields
      setTimeout(() => {
        const fields = document.querySelectorAll('[contentEditable="true"]');
        fields.forEach(field => {
          field.textContent = '';
        });
      }, 1000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <motion.a
                href="mailto:bajarangbarala@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-300">bajarangbarala@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918107180136"
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-gray-300">+91 81071 80136</div>
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/bajrang-barala-51948925a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">LinkedIn</div>
                  <div className="text-gray-300">bajrang-barala-51948925a</div>
                </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)" }}
              >
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-gray-300">Jaipur, Rajasthan, India</div>
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
            <div className="space-y-6">
              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </div>
                <div
                  contentEditable
                  onInput={(e) => setFormData({...formData, name: e.target.textContent})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 outline-none"
                  data-placeholder="Your name"
                  style={{
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center"
                  }}
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </div>
                <div
                  contentEditable
                  onInput={(e) => setFormData({...formData, email: e.target.textContent})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 outline-none"
                  data-placeholder="your.email@example.com"
                  style={{
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center"
                  }}
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </div>
                <div
                  contentEditable
                  onInput={(e) => setFormData({...formData, subject: e.target.textContent})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 outline-none"
                  data-placeholder="Project discussion"
                  style={{
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "center"
                  }}
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </div>
                <div
                  contentEditable
                  onInput={(e) => setFormData({...formData, message: e.target.textContent})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 outline-none"
                  data-placeholder="Tell me about your project..."
                  style={{
                    minHeight: "120px",
                    maxHeight: "200px",
                    overflowY: "auto"
                  }}
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
                >
                  Your email client should open now. If not, please email me directly at bajarangbarala@gmail.com
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
                >
                  Please email me directly at bajarangbarala@gmail.com
                </motion.div>
              )}
              
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={!isSubmitting ? { x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;