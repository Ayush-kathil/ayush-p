"use client";

import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
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
              Archive
            </h1>
            <div className="w-full h-[1px] bg-foreground/20" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} className="w-full" />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
