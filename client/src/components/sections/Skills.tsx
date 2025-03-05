"use client"

import { Card, CardContent } from "@/components/ui/card.jsx"
import { motion } from "framer-motion"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiAmazon,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMongodb,SiExpress,
  SiJest,
  SiVite,
  SiFirebase,
  SiRedux,
  SiR
} from "react-icons/si"
import { useState } from "react"

const skills = [
  {
    icon: SiHtml5,
    name: "HTML5",
    color: "text-[#E34F26]",
    description: "Semantic markup and modern HTML5 features",
  },
  {
    icon: SiCss3,
    name: "CSS3",
    color: "text-[#1572B6]",
    description: "Advanced styling with CSS3 animations and layouts",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "text-[#F7DF1E]",
    description: "ES6+ features and modern JavaScript patterns",
  },
  {
    icon: SiReact,
    name: "React",
    color: "text-[#61DAFB]",
    description: "Component-based UI development with hooks and context",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-foreground dark:text-white",
    description: "Server-side rendering and static site generation",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "text-[#3178C6]",
    description: "Type-safe code with interfaces and generics",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "text-[#06B6D4]",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "text-[#339933]",
    description: "Server-side JavaScript runtime environment",
  },
  {
    icon: SiAmazon,
    name: "AWS",
    color: "text-[#FF9900]",
    description: "Cloud infrastructure and serverless architecture",
  },
  {
    icon: SiGit,
    name: "Git",
    color: "text-[#F05032]",
    description: "Version control and collaborative development",
  },
  {
    icon: SiDocker,
    name: "Docker",
    color: "text-[#2496ED]",
    description: "Containerization for consistent deployment",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    color: "text-[#336791]",
    description: "Relational database management system",
  },

  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-[#47A248]",
    description: "Document-oriented NoSQL database",
    
  },
  {
    icon: SiExpress,
    name: "Express",
    color: "text-[#000000]",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    
  },
  {
    icon: SiJest,
    name: "Jest",
    color: "text-[#C21325]",
    description: "Delightful JavaScript Testing",
    
  },

  {
    icon: SiVite,
    name: "Vite",
    color: "text-[#646CFF]",
    description: "Next Generation Frontend Tooling",
   
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    color: "text-[#FFCA28]",
    description: "Build apps fast, without managing infrastructure",
    
  },
  {
    icon: SiRedux,
    name: "Redux",
    color: "text-[#764ABC]",
    description: "A Predictable State Container for JS Apps",
    
  },


]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/30 to-background dark:from-background/80 dark:to-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Expertise in modern web development technologies and cloud solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-500 border border-border/50 dark:border-border/30 bg-card/50 backdrop-blur-sm dark:bg-card/30">
                <CardContent className="flex flex-col items-center justify-center p-6 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10"
                  >
                    <skill.icon
                      className={`w-12 h-12 mb-4 ${skill.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]`}
                    />
                  </motion.div>

                  <span className="font-medium relative z-10 text-center">{skill.name}</span>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      height: hoveredSkill === skill.name ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-center text-muted-foreground mt-2 overflow-hidden"
                  >
                    {skill.description}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

