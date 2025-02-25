import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 md:px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <skill.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
