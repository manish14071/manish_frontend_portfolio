"use client"

import { Card, CardContent } from "../ui/card.jsx"

import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { Badge } from "../ui/badge.jsx"

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "(Freelance & Open Source) | Remote",
    duration: "2022 - Present",
    description:
      "Built 15+ React.js applications using Redux Toolkit for state management, improving code maintainability and scalability. Developed reusable components and implemented responsive designs. Integrated RTK Query to streamline API interactions, reducing data-fetching logic redundancy by 40%. Utilized Next.js for SSR/SPA architectures, enhancing SEO and performance. Containerized applications with Docker and automated deployments via GitHub Actions CI/CD, reducing deployment time by 30%. Mentored junior developers in React, TypeScript, and Redux best practices, fostering team productivity.",
    achievements: [
      "Reduced bundle size by 35% through code splitting and lazy loading",
      "Improved page load times by 40% with optimized rendering strategies",
      "Implemented comprehensive test coverage using Jest and React Testing Library",
    ],
    technologies: ["React", "Next.js", "TypeScript", "AWS"],
  },

  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "New techies",
    duration: "2020 - 2022",
    description:
      "Migrated legacy jQuery codebases to React/Redux, improving performance by 35% and code readability. Collaborated with designers to implement responsive UIs from Figma, adhering to WCAG 2.1 accessibility standards.",
    achievements: [
      "Contributed to the development of 5+ client projects",
      "Implemented responsive designs that work across all device sizes",
      "Participated in code reviews and team knowledge sharing sessions",
    ],
    technologies: ["JavaScript", "React", "CSS", "Figma"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/30 to-background dark:from-background/80 dark:to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A track record of delivering impactful web solutions and leading development teams
          </p>
        </motion.div>

        <motion.div ref={sectionRef} style={{ opacity, y }} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 rounded-full" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={item} className="relative">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Timeline date bubble */}
                <motion.div
                  className={`absolute left-12 md:left-auto ${index % 2 === 0 ? "md:right-1/2 md:mr-10" : "md:left-1/2 md:ml-10"} -translate-y-1/2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Calendar className="w-3 h-3 inline-block mr-1" />
                  {exp.duration}
                </motion.div>

                <div className={`relative pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-32 md:text-right" : "md:pl-32"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => toggleExpand(exp.id)}
                    className="cursor-pointer"
                  >
                    <Card className="group hover:shadow-lg transition-all duration-500 border border-border/50 dark:border-border/30 bg-card/50 backdrop-blur-sm dark:bg-card/30 overflow-hidden">
                      <CardContent className="p-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <motion.h3
                              className="text-xl font-bold text-primary"
                              whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                            >
                              {exp.role}
                            </motion.h3>
                            <motion.div
                              animate={{ rotate: expandedId === exp.id ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-muted-foreground"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </motion.div>
                          </div>

                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                            <Briefcase className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>

                          <motion.div
                            initial={{ height: expandedId === exp.id ? "auto" : "80px", overflow: "hidden" }}
                            animate={{
                              height: expandedId === exp.id ? "auto" : "80px",
                              overflow: expandedId === exp.id ? "visible" : "hidden",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className={`text-muted-foreground ${expandedId !== exp.id && "line-clamp-3"}`}>
                              {exp.description}
                            </p>

                            {expandedId === exp.id && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-4"
                              >
                                <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                      {achievement}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </motion.div>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

