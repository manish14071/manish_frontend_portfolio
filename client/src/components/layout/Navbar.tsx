import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Portfolio</span>
          </Link>
          <div className="flex gap-6">
            <a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <Button variant="outline" className="mr-2" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
