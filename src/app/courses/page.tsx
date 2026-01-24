"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle } from "lucide-react";
import { StaggeredText } from "@/components/ui/staggered-text";

const skillsList = [
  "C++", "Java", "Python", "SQL", "JavaScript", 
  "Data Structures & Algorithms", "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)", "Operating Systems",
  "Git", "GitHub", "VS Code", "Jupyter Notebook", "Linux",
  "Pandas", "NumPy", "Scikit-learn", "OpenCV", "MediaPipe",
  "Exploratory Data Analysis (EDA)", "Model Optimization",
  "Microsoft Excel", "Microsoft Word", "Netlify", "Vercel",
  "Google sites", "Railway", "Power BI"
];

const certificates = [
  {
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan (Coursera)",
    description: "Enhanced data analysis with applied machine learning techniques.",
    icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-primary" />
  },
  {
    title: "Operating Systems : Learn Fundamentals",
    issuer: "Udemy / Course Provider",
    description: "Covered process scheduling, memory management, threading, and concurrency.",
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-primary" />
  },
  {
    title: "Certificate of Participation #T20DSAChallenge",
    issuer: "Community Challenge",
    description: "Focusing on Stacks & Queues and applying 7 different DSA techniques.",
    icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
  },
  {
    title: "Google Cloud Skills Boost",
    issuer: "Google",
    description: "Introduction to Generative AI.",
    icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-primary" />
  }
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <Section>
          <motion.div className="mb-24">
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 max-w-4xl">
              <div className="overflow-hidden">
                 <StaggeredText text="Skills &" delay={0.1} />
              </div>
              <div className="overflow-hidden">
                 <StaggeredText text="Certifications" delay={0.3} />
              </div>
            </h1>
            <div className="w-full h-[1px] bg-foreground/20" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="mb-32">
             <h2 className="text-2xl uppercase tracking-widest text-muted-foreground mb-12">Certifications</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert, idx) => (
                   <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group border border-border p-8 hover:bg-foreground/5 transition-colors relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         {cert.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 pr-12">{cert.title}</h3>
                      <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                      <p className="text-muted-foreground leading-relaxed">
                         {cert.description}
                      </p>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Skills List */}
          <div>
             <h2 className="text-2xl uppercase tracking-widest text-muted-foreground mb-12">Technical Skills</h2>
             <div className="flex flex-wrap gap-x-4 gap-y-2">
                {skillsList.map((skill, idx) => (
                   <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.02 }}
                      className="text-lg md:text-2xl font-light hover:text-primary transition-colors cursor-default"
                   >
                      {skill} <span className="text-border mx-2">/</span>
                   </motion.div>
                ))}
             </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
