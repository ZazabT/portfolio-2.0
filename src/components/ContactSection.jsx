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
  Heart,
  Coffee,
  MessageSquare,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xwpbojaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly at tizazabayana@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Enhanced background design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(currentColor 1px, transparent 1px),
              linear-gradient(90deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl relative">
        {/* Unique header with different approach */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-muted-foreground">Let's create something amazing together</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-light mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="block">Let's have a</span>
            <span className="block font-bold text-primary/90 hover:text-primary transition-colors duration-300">
              conversation
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you have a project in mind, want to collaborate, or just want to say hello over a virtual coffee ☕
          </motion.p>
        </motion.div>

        {/* Unique layout - Vertical flow instead of side-by-side */}
        <div className="space-y-16">
          {/* Contact methods - Horizontal cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Email Card */}
            <motion.div 
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">Best for projects</p>
                </div>
              </div>
              <a
                href="mailto:tizazabayana@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                tizazabayana@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-secondary/60 dark:hover:border-secondary/60 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-secondary/20 group-hover:bg-secondary/20 dark:group-hover:bg-secondary/30 transition-colors">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">Quick calls</p>
                </div>
              </div>
              <a
                href="tel:+251913173163"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                +251 913 173 163
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-accent/60 dark:hover:border-accent/60 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">Based in</p>
                </div>
              </div>
              <span className="text-accent font-medium">
                Addis Ababa, Ethiopia
              </span>
            </motion.div>
          </motion.div>

          {/* Social Links - Minimalist approach */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-muted-foreground mb-6">Or find me on social media</h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, label: "GitHub", url: "https://github.com/ZazabT", color: "hover:text-gray-700 dark:hover:text-gray-300" },
                { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/codewithkinu", color: "hover:text-blue-600" },
                { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-blue-400" },
                { icon: Instagram, label: "Instagram", url: "#", color: "hover:text-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 text-muted-foreground ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Centered and unique design */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Send a message</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-light text-foreground/90 hover:text-primary transition-colors duration-300">
                Let's start a conversation
              </h3>
              <p className="text-muted-foreground">
                I'd love to hear about your project or just chat about ideas
              </p>
            </div>

            <motion.form 
              className="space-y-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300/60 dark:border-gray-600/60 bg-white/90 dark:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all text-base shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                    placeholder="What should I call you?"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300/60 dark:border-gray-600/60 bg-white/90 dark:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all text-base shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300/60 dark:border-gray-600/60 bg-white/90 dark:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none text-base shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "relative w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:from-primary/90 group-hover:to-secondary/90 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/90 shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Response time info - Subtle */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
                <Coffee className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 dark:text-green-400">
                  I usually respond within 24 hours
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};