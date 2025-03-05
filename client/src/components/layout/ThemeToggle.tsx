"use client"

import { Button } from "@/components/ui/button.jsx"
import { Sun, Moon, Monitor } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Theme = "light" | "dark" | "system"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Update theme based on system preference when in system mode
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "system") {
        applySystemTheme()
      } else {
        applyTheme(savedTheme)
      }
    } else {
      setTheme("system")
      applySystemTheme()
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applySystemTheme()
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Apply theme based on system preference
  const applySystemTheme = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    applyTheme(prefersDark ? "dark" : "light")
  }

  // Apply specific theme
  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
  }

  // Change theme
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "system") {
      applySystemTheme()
    } else {
      applyTheme(newTheme)
    }

    setIsOpen(false)
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative transition-colors hover:bg-muted"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" && (
            <motion.div
              key="light"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          )}

          {theme === "dark" && (
            <motion.div
              key="dark"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          )}

          {theme === "system" && (
            <motion.div
              key="system"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Monitor className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg z-50"
          >
            <div className="p-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => changeTheme("light")}>
                <Sun className="h-4 w-4 mr-2" />
                Light
                {theme === "light" && (
                  <motion.div layoutId="indicator" className="ml-auto h-2 w-2 rounded-full bg-primary" />
                )}
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => changeTheme("dark")}>
                <Moon className="h-4 w-4 mr-2" />
                Dark
                {theme === "dark" && (
                  <motion.div layoutId="indicator" className="ml-auto h-2 w-2 rounded-full bg-primary" />
                )}
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => changeTheme("system")}>
                <Monitor className="h-4 w-4 mr-2" />
                System
                {theme === "system" && (
                  <motion.div layoutId="indicator" className="ml-auto h-2 w-2 rounded-full bg-primary" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

