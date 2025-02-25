import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality, payment processing, and order management using React, Node.js, and AWS.",
    tags: ["React", "Node.js", "AWS", "Stripe"],
    image: "https://placehold.co/600x400",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features built using Next.js and WebSocket technology.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    image: "https://placehold.co/600x400",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Content generation platform using OpenAI's GPT-3 API with a modern React frontend and serverless backend.",
    tags: ["React", "AWS Lambda", "OpenAI", "Tailwind"],
    image: "https://placehold.co/600x400",
    link: "https://example.com",
    github: "https://github.com"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = filter 
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my latest work and technical projects
          </p>

          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {allTags.map(tag => (
              <Badge 
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setFilter(filter === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
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
      </div>
    </section>
  );
}