import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiAmazon, SiGit, SiDocker, SiPostgresql } from "react-icons/si";

const skills = [
  { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]" },
  { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
  { icon: SiAmazon, name: "AWS", color: "text-[#FF9900]" },
  { icon: SiGit, name: "Git", color: "text-[#F05032]" },
  { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 md:px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern web development technologies and cloud services
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <skill.icon className={`w-12 h-12 mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}