"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop Scroll Logic
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <>
      {/* Mobile View: Vertical Stack */}
      <section id="projects-mobile" className="block md:hidden py-24 px-6 overflow-hidden">
        <ScrollReveal>
             <h2 className="text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
                Selected
                <span className="text-primary block ml-12">Works</span>
             </h2>
             <div className="h-1 w-24 bg-primary mb-12" />
        </ScrollReveal>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-16"
        >
            {projects.map((project, idx) => (
                <motion.div 
                    key={idx} 
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="w-full"
                >
                     <ProjectCard project={project} index={idx} className="w-full max-w-sm mx-auto shadow-2xl shadow-primary/5" />
                </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Desktop View: Horizontal Scroll */}
      <section ref={targetRef} id="projects-desktop" className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-16 pl-24">
            <div className="flex flex-col justify-center min-w-[400px] shrink-0">
               <h2 className="text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
                  Selected
                  <br />
                  <span className="text-primary ml-12">Works</span>
               </h2>
               <p className="text-2xl max-w-sm ml-2 text-muted-foreground">
                  A selection of projects that showcase my passion for engineering and design.
               </p>
            </div>
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} className="w-[600px]" />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
