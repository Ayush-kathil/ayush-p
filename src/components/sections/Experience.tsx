"use client";

import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Core Member - Technical Team",
    org: "MATRIX Club, VIT Bhopal University",
    date: "Present",
    description: "Collaborate with team members to organize coding competitions and technical workshops. Mentor junior students in Python programming and Data Structures."
  },
  {
    role: "Core Member - Technical Team",
    org: "TechnoMech Club, VIT Bhopal University",
    date: "Present",
    description: "Spearheading the development of scalable technical projects and internal tools, focusing on optimizing system performance and enhancing user experience for the university community."
  },
  {
    role: "Team Leader",
    org: "Yoga Pose Detection System",
    date: "Project",
    description: "Managed project planning, task allocation, and version control using GitHub. Integrated the model into a functional prototype providing real-time feedback."
  },
  {
    role: "B.Tech in CSE (AI & ML)",
    org: "VIT Bhopal University",
    date: "2023 - 2027",
    description: "Current CGPA: 7.32/10. Active member of technical clubs."
  }
];

export function Experience() {
  return (
    <Section id="experience" classNameContainer="bg-muted/20">
      <div className="max-w-4xl mx-auto w-full">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
         >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Education</h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8 mx-auto" />
         </motion.div>

        <div className="relative ml-3 md:ml-6 space-y-12 pb-12">
          {/* Animated Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-[2px] bg-primary/20"
          />
          
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute top-0 left-[-9px] md:left-[-11px] w-5 h-5 md:w-6 md:h-6 rounded-full bg-background border-4 border-primary shadow-lg shadow-primary/20 z-10" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">{item.role}</h3>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <span className="text-primary font-medium">{item.org}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {item.date}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed bg-card p-4 rounded-lg border border-border/50 shadow-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
