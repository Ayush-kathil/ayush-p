"use client";

import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen } from "lucide-react";
import { notFound, useParams } from "next/navigation";

export default function EducationDetailPage() {
  const params = useParams();
  const id = params.id;
  const edu = education.find((e) => e.id === id);

  if (!edu) {
    return notFound();
  }

  return (
    <>
      <main className="min-h-screen pt-12 pb-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
            <Link 
                href="/education" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group uppercase tracking-widest text-sm"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Timeline
            </Link>
        </div>

        <Section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">
                        {edu.institution}
                    </h1>
                    <span className="text-xl md:text-2xl font-mono text-muted-foreground mb-2 block">
                        // {edu.duration}
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl text-primary mb-12 font-medium">
                    {edu.degree}
                </h2>
                
                <div className="w-full h-[1px] bg-foreground/20 mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Coursework */}
                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                             <BookOpen className="w-5 h-5 text-bg-foreground" /> Coursework
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {edu.courses.map((course, i) => (
                                <motion.span 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border/50"
                                >
                                    {course}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" /> Achievements
                        </h3>
                        <ul className="space-y-4">
                            {edu.achievements.map((achievement, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-secondary/20"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-lg">{achievement}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </Section>
      </main>
    </>
  );
}
