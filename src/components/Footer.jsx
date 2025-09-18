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
          className="backdrop-blur-lg bg-white/50 dark:bg-gray-900/60 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl p-10 grid grid-cols-1 md:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Branding & Socials */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">TIZAZAB</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Full Stack Developer crafting seamless & meaningful digital experiences.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary/80 dark:hover:bg-primary/70 text-gray-800 dark:text-white shadow-sm transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="text-gray-700 dark:text-gray-300 text-sm relative group"
                >
                  <a href={link.href} className="hover:text-primary dark:hover:text-primary transition-colors duration-300">
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <span className="text-gray-700 dark:text-gray-200">{info.icon}</span>
                  <a href={info.href} className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300 text-sm">
                    {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="text-gray-900 dark:text-white font-semibold text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Subscribe for updates on my latest projects & articles.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full py-3 px-4 pr-28 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all duration-300"
              />
              <button 
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-14 border-t border-gray-200 dark:border-gray-700/50 flex flex-col sm:flex-row items-center justify-between text-gray-700 dark:text-gray-300 text-xs space-y-3 sm:space-y-0"
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
