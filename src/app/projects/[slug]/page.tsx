"use client";

import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { projects } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { ParallaxImage } from "@/components/ui/parallax-image";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <main className="min-h-screen pt-12 pb-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
            <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group uppercase tracking-widest text-sm"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Archives
            </Link>
        </div>

        {/* Hero Section */}
        <Section className="mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">
                        {project.title}
                    </h1>
                    <span className="text-xl md:text-2xl font-mono text-muted-foreground mb-2 block">
                        // {project.year}
                    </span>
                </div>
                
                <div className="w-full h-[1px] bg-foreground/20 mb-12" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                   {/* Left Column: Role & Links */}
                   <div className="space-y-8">
                       <div>
                           <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Stack</h3>
                           <div className="flex flex-wrap gap-2">
                               {project.tags.map(tag => (
                                   <span key={tag} className="px-3 py-1 rounded-full border border-border text-sm">
                                       {tag}
                                   </span>
                               ))}
                           </div>
                       </div>

                       <div>
                           <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Links</h3>
                           <div className="flex flex-col gap-3">
                               <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                   <Globe className="w-4 h-4" /> Live Demo <ArrowUpRight className="w-3 h-3" />
                               </a>
                               <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                   <Github className="w-4 h-4" /> Source Code <ArrowUpRight className="w-3 h-3" />
                               </a>
                           </div>
                       </div>
                   </div>

                   {/* Right Column: Description */}
                   <div className="lg:col-span-2">
                       <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                           {project.fullDescription || project.description}
                       </p>
                   </div>
                </div>
            </motion.div>
        </Section>

        {/* Hero Image */}
        <div className="container mx-auto px-4 md:px-6 mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
                Project Preview
            </h2>
            <ProjectImagePreview src={project.images?.[0]} />
        </div>

        {/* Problem / Solution */}
        {(project.problem || project.solution) && (
            <Section className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {project.problem && (
                        <div>
                            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" /> Problem
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.problem}
                            </p>
                        </div>
                    )}
                    {project.solution && (
                        <div>
                            <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" /> Solution
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    )}
                </div>
            </Section>
        )}

        {/* Next Project */}
        <Section>
            <div className="w-full h-[1px] bg-foreground/20 mb-12" />
            <Link href={`/projects/${nextProject.slug}`} className="group block text-right">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Next Project</span>
                <div className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors flex items-center justify-end gap-4">
                    {nextProject.title}
                    <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16 group-hover:rotate-45 transition-transform" />
                </div>
            </Link>
        </Section>

      </main>
    </>
  );
}

function ProjectImagePreview({ src }: { src?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-2xl origin-bottom"
    >
        <ParallaxImage src={src} className="bg-muted" />
        {!src && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-bold uppercase z-0">
                No Preview Available
            </div>
        )}
    </motion.div>
  );
}
