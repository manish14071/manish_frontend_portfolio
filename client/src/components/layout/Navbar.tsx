import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Logo = () => (
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    className="font-bold text-xl flex items-center gap-2"
  >
    <div className="relative h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden group">
      <span className="text-primary text-xl font-black relative z-10">MD</span>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      <motion.div
        className="absolute inset-0 border border-primary/40"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-extrabold">
      Manish Dehraj
    </span>
  </motion.div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-background border-b py-4 px-4 md:hidden flex flex-col gap-4"
          >
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button variant="outline" className="w-full" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}