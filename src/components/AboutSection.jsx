import { Briefcase, Code, Download, ArrowRight, Gamepad2, Globe } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 relative bg-background overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary/80 uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-px bg-primary/50" />
            About Me
            <div className="w-10 h-px bg-primary/50" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Crafting Digital{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Experiences
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          {/* Profile Card */}
          <motion.div
            className="lg:w-1/2"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="h-full bg-card border border-border rounded-2xl p-7 md:p-8 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {/* Profile header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10">
                    <img src="/profile-logo.png" alt="Tizazab Ayana" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Tizazab Ayana</h3>
                  <p className="text-muted-foreground text-sm">Full Stack Developer</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I build web and mobile apps that are fast, easy to use, and look good. I like
                solving problems and making things people enjoy using. In my free time, I play
                games — so I still stick with Windows instead of Mac or Linux!
              </p>

              {/* Stack pills */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Frontend", value: "React, Next.js, Flutter" },
                  { label: "Backend", value: "Laravel, Node.js, Express" },
                  { label: "Database", value: "MySQL, MongoDB, PostgreSQL" },
                  { label: "Tools", value: "Git, Docker, Firebase" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-background border border-border rounded-xl p-3 hover:border-primary/40 transition-colors">
                    <p className="text-xs font-semibold text-primary mb-0.5">{label}</p>
                    <p className="text-xs text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/CV.pdf"
                  download="Tizazab_Ayana_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:w-1/2 space-y-5">
            {/* Approach card */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">My Approach</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I write clean, readable code that works well. I focus on making things fast,
                    reliable, and easy to maintain. I love solving problems and building things
                    people enjoy using.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Professional Approach</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With experience in full-stack development and mobile app creation, I adapt my
                    workflow to project needs. I value clear communication, agile methodologies,
                    and continuous learning in emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fun fact card */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Fun Fact</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When I'm not coding, I'm gaming — which is exactly why I'm still on Windows.
                    No regrets.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "12+", label: "Projects" },
                { value: "3+", label: "Years Exp." },
                { value: "100%", label: "Satisfaction" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
