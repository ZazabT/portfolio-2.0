import { ArrowDown, MousePointerClick, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[120px] -z-10"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-[140px] -z-10"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-primary/10 blur-[100px] -z-10"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Full Stack Developer
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            variants={itemVariants}
          >
            <span className="text-foreground">I'm </span>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
                Tizazab Ayana
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-primary to-secondary w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Turning{" "}
            <span className="text-primary font-medium">cool ideas</span> into websites and apps
            that actually do something.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="pt-6 flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/CV.pdf"
              download="Tizazab_Ayana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary/40 text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="pt-8 flex flex-wrap justify-center gap-8 md:gap-16"
            variants={itemVariants}
          >
            {[
              { value: "20+", label: "Projects Built" },
              { value: "3+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating tech badges */}
      <motion.div
        className="absolute left-8 bottom-1/3 hidden lg:flex flex-col gap-3 items-start"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {["React", "Laravel", "Node.js", "Flutter", "MongoDB"].map((tech, i) => (
          <motion.div
            key={tech}
            className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm text-foreground shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-3 items-end"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {["Next.js", "MySQL", "Tailwind", "Firebase", "Express"].map((tech, i) => (
          <motion.div
            key={tech}
            className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm text-foreground shadow-sm"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 0, -8] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
      >
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <MousePointerClick className="h-3 w-3" /> Scroll to explore
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
