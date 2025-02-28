"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/manish14071" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/manish-dehraj/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/manish2012dehr1" },
  { name: "Email", icon: Mail, url: "mailto:manish2012dehraj@gmail.com" },
]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

export default function Hero() {
  const [greeting, setGreeting] = useState(getGreeting())
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y, scale }}
      className="min-h-[100vh] flex items-center justify-center px-4 md:px-6 py-12 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="fixed left-6 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col gap-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors relative group"
            whileHover={{
              scale: 1.1,
              x: 5,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
            <motion.span
              className="absolute left-8 px-2 py-1 bg-card text-card-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md border border-border/50"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {social.name}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-foreground dark:text-white text-sm font-medium backdrop-blur-sm">
              {greeting}, I'm available for freelance work
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Hi, I'm{" "}
              <span className="text-primary dark:text-white relative inline-block">
                Manish Dehraj
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/90 dark:text-white/90"
            >
              Frontend Developer
            </motion.h2>

            <motion.p
              custom={3}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-2xl"
            >
              Crafting beautiful, responsive, and user-friendly web applications with modern technologies. Specializing
              in React, Next.js, and cloud solutions.
            </motion.p>

            <motion.div
              custom={4}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-white/90 group"
                asChild
              >
                <a href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[160px] border-primary/20 hover:bg-primary/10 group"
                asChild
              >
                <a href="#contact" className="flex items-center">
                  Contact Me
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="ml-2"
                  >
                    👋
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex gap-6 lg:hidden"
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

        {/* Interactive code window illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="relative bg-card/80 backdrop-blur-sm dark:bg-card/30 border border-border/50 dark:border-border/30 rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-border/50 dark:border-border/30 bg-muted/50 dark:bg-muted/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-muted-foreground">portfolio.tsx</div>
            </div>

            <div className="p-4 font-mono text-sm">
              <div className="flex">
                <span className="text-muted-foreground w-8">1</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-blue-500 dark:text-blue-400"
                >
                  const
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-yellow-500 dark:text-yellow-300 ml-2"
                >
                  Developer
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="text-foreground ml-2"
                >
                  = () =&gt; {"{"}
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">2</span>
                <span className="ml-4 text-foreground">return (</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">3</span>
                <span className="ml-8 text-green-500 dark:text-green-400">&lt;div className="portfolio"&gt;</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">4</span>
                <span className="ml-12 text-green-500 dark:text-green-400">&lt;h1&gt;</span>
                <span className="text-foreground">Manish Dehraj</span>
                <span className="text-green-500 dark:text-green-400">&lt;/h1&gt;</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">5</span>
                <span className="ml-12 text-green-500 dark:text-green-400">&lt;p&gt;</span>
                <span className="text-foreground">Frontend Developer</span>
                <span className="text-green-500 dark:text-green-400">&lt;/p&gt;</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">6</span>
                <span className="ml-8 text-green-500 dark:text-green-400">&lt;/div&gt;</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">7</span>
                <span className="ml-4 text-foreground">);</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="flex"
              >
                <span className="text-muted-foreground w-8">8</span>
                <span className="text-foreground">{"}"}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="flex mt-2"
              >
                <span className="text-muted-foreground w-8">9</span>
                <span className="text-blue-500 dark:text-blue-400">export default</span>
                <span className="text-yellow-500 dark:text-yellow-300 ml-2">Developer;</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, width: "65%" }}
                transition={{ delay: 3.0, duration: 1.5 }}
                className="h-0.5 bg-primary/50 mt-4 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDown className="w-6 h-6 text-muted-foreground dark:text-white/70" />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

