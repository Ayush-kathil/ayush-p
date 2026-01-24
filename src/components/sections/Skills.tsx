"use client";

import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";

const skills = [
  "Python", "C++", "JavaScript", "TypeScript",
  "TensorFlow", "PyTorch", "OpenCV", "Next.js",
  "React", "Node.js", "Docker", "AWS",
  "Git", "Figma", "Algorithms", "Data Structures"
];

export function Skills() {
  return (
    <Section id="skills" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
         <div className="md:w-1/3">
             <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                Arsenal
             </h2>
             <p className="text-muted-foreground text-lg">
                The tools and technologies I perform with.
             </p>
         </div>

         <div className="md:w-2/3">
            <div className="flex flex-wrap gap-4">
               {skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-6 py-3 border border-border rounded-full text-lg uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
               ))}
            </div>
         </div>
      </div>
    </Section>
  );
}
