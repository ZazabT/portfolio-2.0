import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ZazabT", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: "tizazabayana@gmail.com", href: "mailto:tizazabayana@gmail.com" },
    { icon: <Phone size={18} />, text: "+251 913 173 163", href: "tel:+251913173163" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-50 dark:from-gray-900 to-white dark:to-gray-800 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Branding & Socials */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                TIZAZAB
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
             Tizazab Ayana — Full-Stack Developer & Web Designer. Always learning, building, and creating.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group p-2 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 dark:text-white font-medium mb-6 text-sm uppercase tracking-wider flex items-center">
              <span className="w-4 h-0.5 bg-primary mr-3"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-gray-600 dark:text-gray-400 text-sm group"
                >
                  <a 
                    href={link.href} 
                    className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 dark:text-white font-medium mb-6 text-sm uppercase tracking-wider flex items-center">
              <span className="w-4 h-0.5 bg-primary mr-3"></span>
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="mt-0.5 text-gray-500 group-hover:text-primary transition-colors">
                    {info.icon}
                  </span>
                  <a 
                    href={info.href} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 dark:text-white font-medium mb-6 text-sm uppercase tracking-wider flex items-center">
              <span className="w-4 h-0.5 bg-primary mr-3"></span>
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary/80 rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-20 py-6 border-t border-gray-200 dark:border-gray-700/50 flex flex-col sm:flex-row items-center justify-between text-gray-700 dark:text-gray-300 text-xs space-y-3 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Tizazab Ayana. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <motion.a
              href="#hero"
              aria-label="Back to top"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
