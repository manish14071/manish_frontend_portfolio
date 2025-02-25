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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={item}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />

                <div className={`relative pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-32 md:text-right' : 'md:pl-32'}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-2">
                        <motion.h3 
                          className="text-xl font-semibold text-primary"
                          whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}