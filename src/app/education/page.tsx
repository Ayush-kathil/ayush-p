"use client";

import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export default function EducationPage() {
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
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
              Education
            </h1>
            <div className="w-full h-[1px] bg-foreground/20" />
          </motion.div>

          <div className="relative border-l border-foreground/20 ml-4 md:ml-12 space-y-12 pl-8 md:pl-16 py-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-background border-2 border-foreground rounded-full" />
                
                <Link href={`/education/${edu.id}`} className="group block">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                         <h2 className="text-3xl md:text-5xl font-bold uppercase group-hover:text-primary transition-colors">
                            {edu.institution}
                        </h2>
                        <span className="text-lg md:text-xl font-mono text-muted-foreground whitespace-nowrap">
                            {edu.duration}
                        </span>
                    </div>
                   
                    <h3 className="text-xl md:text-2xl text-muted-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {edu.degree}
                    </h3>
                    
                    <p className="max-w-2xl text-muted-foreground mb-6">
                        {edu.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                        View Details <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
