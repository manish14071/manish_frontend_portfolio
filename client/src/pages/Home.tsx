import Hero from "@/components/sections/Hero.jsx";
import Projects from "@/components/sections/Projects.jsx";
import Skills from "@/components/sections/Skills.jsx";
import Experience from "@/components/sections/Experience.jsx";
import Contact from "@/components/sections/Contact.jsx";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  );
}