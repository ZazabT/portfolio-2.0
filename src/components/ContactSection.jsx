import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({ title: "Valid email is required", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({ title: "Message must be at least 10 characters", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpbojaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
          className: "bg-green-600 text-white border border-green-700 shadow-lg",
        });
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: Github, url: "https://github.com/ZazabT", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/codewithkinu", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 relative bg-background text-foreground overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Glow orbs */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] -z-10" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            Let's Connect
            <div className="w-10 h-px bg-primary/50" />
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Get in{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, label: "Mail me at", value: "tizazabayana2@gmail.com", href: "mailto:tizazabayana2@gmail.com" },
              { icon: Phone, label: "Call me at", value: "+251 913 173 163", href: "tel:+251913173163" },
              { icon: MapPin, label: "Based in", value: "Addis Ababa, Ethiopia", href: null },
            ].map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Socials */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Follow me</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, url, label }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
