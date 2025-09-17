import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  BookOpen,
  Sun,
  Moon,
  Youtube,
  Volume2,
  VolumeX,
  Github,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "p-3 rounded-full transition-all duration-300 ease-in-out",
        "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md",
        "hover:bg-gray-100 dark:hover:bg-gray-700",
        "border border-gray-200/50 dark:border-gray-600/50",
        "shadow-lg hover:shadow-xl",
        "group relative overflow-hidden"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative z-10"
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600" />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  const musicUrl = "/music.mp3";

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = "auto";

      const handleCanPlay = () => setIsAudioReady(true);

      audioRef.current.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Buttons */}
      <motion.div
        className="fixed top-6 right-6 z-50 flex gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* GitHub Button */}
        <motion.a
          href="https://github.com/ZazabT" 
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-3 rounded-full transition-all duration-300 ease-in-out",
            "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md",
            "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "border border-gray-200/50 dark:border-gray-600/50",
            "shadow-lg hover:shadow-xl",
            "group relative overflow-hidden"
          )}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/tizazab-ayana/" 
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-3 rounded-full transition-all duration-300 ease-in-out",
            "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md",
            "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
            "hover:bg-blue-50 dark:hover:bg-blue-900/30",
            "border border-gray-200/50 dark:border-gray-600/50",
            "shadow-lg hover:shadow-xl",
            "group relative overflow-hidden"
          )}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        {/* Music Button */}
        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn(
            "p-3 rounded-full transition-all duration-300 ease-in-out",
            "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md",
            "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
            "hover:bg-purple-50 dark:hover:bg-purple-900/30",
            "border border-gray-200/50 dark:border-gray-600/50",
            "shadow-lg hover:shadow-xl",
            "group relative overflow-hidden",
            !isAudioReady && "opacity-50 cursor-not-allowed"
          )}
          whileHover={{ scale: isAudioReady ? 1.05 : 1, y: isAudioReady ? -2 : 0 }}
          whileTap={{ scale: isAudioReady ? 0.95 : 1 }}
          title={
            isAudioReady ? (isMusicPlaying ? "Pause music" : "Play music") : "Loading music..."
          }
          aria-label={
            isAudioReady ? (isMusicPlaying ? "Pause music" : "Play music") : "Loading music"
          }
        >
          <motion.div
            className="relative z-10"
            animate={{ 
              scale: isMusicPlaying ? [1, 1.1, 1] : 1,
              rotate: isMusicPlaying ? [0, 5, -5, 0] : 0
            }}
            transition={{ 
              duration: 0.5, 
              repeat: isMusicPlaying ? Infinity : 0,
              repeatType: "reverse"
            }}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>

      {/* Bottom Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5
            }}
          >
            <div className={cn(
              "flex items-center justify-center",
              "bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl",
              "rounded-2xl shadow-2xl p-3",
              "border border-gray-200/50 dark:border-gray-600/50",
              "relative overflow-hidden"
            )}>
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
              
              <div className="flex space-x-2 items-center relative z-10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative p-3 rounded-xl transition-all duration-300 ease-in-out",
                      "flex flex-col items-center group",
                      "min-w-[60px] md:min-w-[70px]",
                      activeSection === item.href
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    )}
                    aria-label={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active indicator */}
                    {activeSection === item.href && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <motion.div
                      className={cn(
                        "relative z-10 flex flex-col items-center",
                        activeSection === item.href && "text-white"
                      )}
                      animate={{
                        scale: activeSection === item.href ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium hidden md:block">
                        {item.name}
                      </span>
                    </motion.div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </motion.a>
                ))}
                
                {/* Divider */}
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-600 mx-2" />
                
                {/* Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
