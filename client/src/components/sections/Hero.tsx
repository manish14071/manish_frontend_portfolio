import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Email", icon: Mail, url: "mailto:your.email@example.com" }
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Hero() {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-6 py-12 relative overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      {/* Social links */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="fixed left-6 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ 
              scale: 1.1, 
              x: 5,
              color: "hsl(var(--primary))"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium dark:text-white">
              {greeting}, I'm available for freelance work
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent inline-block dark:from-white dark:via-primary dark:to-primary/60">
              Manish Dehraj
            </span>
            <br />
            <span className="text-foreground dark:text-white">Frontend Developer</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl dark:text-gray-300"
          >
            Crafting beautiful, responsive, and user-friendly web applications with modern technologies.
            Specializing in React, Next.js, and cloud solutions.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90" 
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[160px] border-primary/20 hover:bg-primary/10" 
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Mobile social links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex gap-4 lg:hidden"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Code window */}
            <motion.rect
              x="100"
              y="100"
              width="300"
              height="200"
              rx="10"
              className="fill-card stroke-primary/50 dark:stroke-white/30"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Window controls */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <circle cx="125" cy="125" r="5" className="fill-red-500" />
              <circle cx="145" cy="125" r="5" className="fill-yellow-500" />
              <circle cx="165" cy="125" r="5" className="fill-green-500" />
            </motion.g>

            {/* Code lines */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="stroke-primary/50 dark:stroke-white/30"
              strokeWidth="2"
            >
              <line x1="120" y1="160" x2="280" y2="160" />
              <line x1="120" y1="180" x2="250" y2="180" />
              <line x1="120" y1="200" x2="300" y2="200" />
              <line x1="120" y1="220" x2="260" y2="220" />
            </motion.g>

            {/* Floating elements */}
            <motion.circle
              cx="400"
              cy="150"
              r="20"
              className="fill-primary/20 dark:fill-white/20"
              animate={{
                y: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.rect
              x="350"
              y="250"
              width="40"
              height="40"
              className="fill-primary/20 dark:fill-white/20"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground dark:text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}