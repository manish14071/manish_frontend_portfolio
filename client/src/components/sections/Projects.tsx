import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with cart and checkout functionality",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://placehold.co/600x400",
    link: "https://example.com"
  },
  // Add more projects as needed
];

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {["React", "Node.js", "Stripe"].map(tag => (
            <Badge 
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter(filter === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
