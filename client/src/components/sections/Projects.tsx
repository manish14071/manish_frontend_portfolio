"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import images from "@/assets/images.js";

const projects = [
  {
    id: 1,
    title: "Meo-Loja E-commerce Platform",
    description:
      "A full-stack e-commerce solution with cart functionality, payment processing, and order management using React, Node.js, and AWS.",
    tags: ["React", "Node.js", "AWS", "Stripe"],
    image: images.meo,
    link: "https://peppy-rolypoly-0bcae4.netlify.app/",
    github: "https://github.com/manish14071",
  },
  {
    id: 2,
    title: "Casa da Saude",
    description:
      "Real-time task management application with team collaboration features built using Next.js and WebSocket technology.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    image: images.casa,
    link: "https://casa-da-saude.netlify.app/",
    github: "https://github.com/manish14071",
  },
  {
    id: 3,
    title: "Chat App",
    description:
      "A real-time chat application with user authentication and online status indicators using React and Firebase.",
    tags: ["React", "Firebase", "Chakra UI"],
    image: images.chatApp,
    link: "https://freechat-o1cb.onrender.com/",
    github: "https://github.com/manish14071",
  },
  {
    id: 4,
    title: "Music Academy",
    description:
      "nteractive UI: Aesthetic and responsive design with Tailwind CSS.• Smooth Animations: Engaging user experience with Framer Motion",

    tags: ["React", "Tailwind", "Acertinity Ui"],
    image: images.music,
    link: "https://musicacadmy.vercel.app/",
    github: "https://github.com/manish14071",
  },
  {
    id: 4,
    title: "GLobal Borders Travel",
    description:
      "Modern UI: Built with MUI and Tailwind for a sleek, responsive design.Animations & Effects: Uses Framer Motion for smooth interactions. Carousel Integration: React Slick for showcasing destinations dynamically.SEO & Performance: Optimized with Next.js for fast loading.",

    tags: ["React", "Nextjs", "Tailwind Css", "Mui"],
    image: images.gbt,
    link: "https://globalborderstravels.netlify.app/",
    github: "https://github.com/manish14071",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background/80"
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Explore my latest work and technical projects
          </p>

          <div className="flex gap-2 mb-10 flex-wrap justify-center">
            <motion.div
              className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {allTags.map((tag) => (
                <motion.div
                  key={tag}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant={filter === tag ? "default" : "outline"}
                    className={`cursor-pointer text-sm py-1.5 px-3 rounded-full transition-all duration-300 ${
                      filter === tag
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={() => setFilter(filter === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={item}
                className="h-full"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Card className="h-full overflow-hidden group border border-border/50 dark:border-border/30 bg-card/50 backdrop-blur-sm dark:bg-card/30 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-48 overflow-hidden"
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </motion.div>

                    <motion.div
                      className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-lg bg-background/80 backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
                        onClick={() =>
                          setExpandedId(
                            expandedId === project.id ? null : project.id
                          )
                        }
                      >
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            expandedId === project.id ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </motion.div>
                  </div>

                  <CardHeader className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div
                      initial={{ height: "80px", overflow: "hidden" }}
                      animate={{
                        height: expandedId === project.id ? "auto" : "80px",
                        overflow:
                          expandedId === project.id ? "visible" : "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group/btn relative overflow-hidden border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                            Code
                          </a>
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full group/btn relative overflow-hidden"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">
              No projects found with the selected filter.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setFilter(null)}
            >
              Clear filter
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
