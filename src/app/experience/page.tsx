"use client";

import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Reuse Skills Data
const skills = [
  "Python", "C++", "JavaScript", "TypeScript",
  "TensorFlow", "PyTorch", "OpenCV", "Next.js",
  "React", "Node.js", "Docker", "AWS",
  "Git", "Figma", "Algorithms", "Data Structures"
];

// Refined Experience Data (removing education items)
const experienceData = [
  {
    role: "Core Member - Technical Team",
    org: "MATRIX Club, VIT Bhopal",
    date: "Present",
    description: "Collaborating to organize coding competitions and technical workshops. Mentoring junior students in Python programming and Data Structures."
  },
  {
    role: "Core Member - Technical Team",
    org: "TechnoMech Club, VIT Bhopal",
    date: "Present",
    description: "Spearheading the development of scalable technical projects and internal tools, focusing on optimizing system performance and enhancing user experience."
  },
  {
    role: "Team Leader - Project",
    org: "Yoga Pose Detection System",
    date: "Past",
    description: "Managed project planning, task allocation, and version control using GitHub for a team of 3 members."
  }
];

export default function ExperiencePage() {
  return (
    <>
      <main className="min-h-screen pt-12 pb-24">
        <div className="container mx-auto px-4 md:px-6 mb-12">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group uppercase tracking-widest text-sm"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Hub
            </Link>
        </div>
        
        {/* Header */}
        <Section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
              Expertise
            </h1>
            <div className="w-full h-[1px] bg-foreground/20" />
          </motion.div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="mb-24">
             <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                 <div className="md:w-1/3">
                     <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                        Arsenal
                     </h2>
                     <p className="text-muted-foreground text-lg mb-8">
                        The tools and technologies I leverage to build robust solutions.
                     </p>
                 </div>
                 <div className="md:w-2/3">
                    <div className="flex flex-wrap gap-4">
                       {skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="px-6 py-3 border border-border rounded-full text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                       ))}
                    </div>
                 </div>
              </div>
        </Section>

        <div className="container mx-auto px-4 md:px-6 mb-24">
             <div className="w-full h-[1px] bg-foreground/20" />
        </div>

        {/* Experience Section */}
        <Section id="experience">
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16">
                Professional Experience
            </h2>
            <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-16 pl-8 md:pl-16 py-4">
              {experienceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[43px] md:-left-[75px] top-2 w-5 h-5 bg-background border-4 border-primary rounded-full group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                     <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {item.role}
                     </h3>
                     <span className="text-xl text-muted-foreground font-medium">
                        @ {item.org}
                     </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </div>
                  
                  <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
        </Section>

      </main>
    </>
  );
}
