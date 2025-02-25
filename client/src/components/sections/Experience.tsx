import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "2023 - Present",
    description: "Lead frontend development for enterprise applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    technologies: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    duration: "2021 - 2023",
    description: "Developed and maintained multiple client projects. Integrated payment systems and real-time features.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Agency",
    duration: "2019 - 2021",
    description: "Created responsive web applications and improved user experiences. Collaborated with designers to implement pixel-perfect interfaces.",
    technologies: ["JavaScript", "React", "CSS", "Figma"],
  },
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Experience() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful web solutions and leading development teams
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="relative"
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
