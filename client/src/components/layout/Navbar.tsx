"use client"

import { Button } from "@/components/ui/button.jsx"
import ThemeToggle from "./ThemeToggle.jsx"
import { Link } from "wouter"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const Logo = () => (
  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="font-bold text-xl flex items-center gap-2">
    <div className="relative h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden group">
      <span className="text-primary text-xl font-black relative z-10">MD</span>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      <motion.div
        className="absolute inset-0 border border-primary/40 rounded-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-extrabold">
      Manish Dehraj
    </span>
  </motion.div>
)

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-20"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <motion.div key={item.name} className="relative" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <a
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </motion.div>
          ))}

          <div className="ml-2">
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10 group" asChild>
              <a href="/Manish-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Resume
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </a>
            </Button>
          </div>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 py-4 px-4 md:hidden flex flex-col gap-2 z-10"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary py-3 px-4 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button variant="outline" className="w-full mt-2" asChild>
                  <a href="/Manish-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="flex justify-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
              >
                <ThemeToggle />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

