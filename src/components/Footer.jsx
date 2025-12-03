import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ZazabT", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/codewithkinu", label: "LinkedIn" },
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
    { icon: <Mail size={18} />, text: "tizazab752@gmail.com", href: "mailto:tizazab752@gmail.com" },
    { icon: <Phone size={18} />, text: "+251 913 173 163", href: "tel:+251913173163" },
  ];

  return (
    <footer className="relative bg-white dark:bg-black text-gray-900 dark:text-white pt-20 pb-10 overflow-hidden border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/60">
                TIZAZAB
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:border-primary/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-700 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href}
                    className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <span className="mt-1 p-1 rounded bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 group-hover:border-primary/50 transition-colors">
                      {info.icon}
                    </span>
                    <span className="flex-1 break-all">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-zinc-400 mb-4 text-sm">
              Subscribe to my newsletter for the latest updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-zinc-500 text-sm flex items-center gap-1">
            © {currentYear} Tizazab Ayana. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Ethiopia.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:border-primary/50 transition-all"
              whileHover={{ y: -3 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
