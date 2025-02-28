"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/manish14071",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/manish-dehraj/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/manish2012dehr1",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:manish2012dehraj@gmail.com",
  },
]

const footerLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background/80 relative">
      {/* Scroll to top button */}
      <motion.div
        className="absolute -top-5 left-1/2 -translate-x-1/2"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="icon"
          className="rounded-full shadow-lg h-10 w-10 bg-primary hover:bg-primary/90"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5 text-primary-foreground" />
        </Button>
      </motion.div>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="font-bold text-xl flex items-center gap-2 mb-4"
            >
              <div className="relative h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                <span className="text-primary text-xl font-black">MD</span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-extrabold">
                Manish Dehraj
              </span>
            </motion.div>

            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Frontend developer specializing in creating beautiful, responsive, and user-friendly web applications.
            </p>

            <div className="mt-6 flex space-x-5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="md:text-right">
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              © {new Date().getFullYear()} Manish Dehraj. All rights reserved.
            </motion.p>

            <motion.p
              className="mt-2 text-sm text-muted-foreground flex items-center justify-end gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.span>
              using React & Tailwind
            </motion.p>

            <motion.p
              className="mt-4 text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Designed and built with attention to detail and modern web standards
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

