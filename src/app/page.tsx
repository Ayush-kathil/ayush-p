"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />

      {/* Selected Works Gateway */}
      <Section className="py-24 md:py-32 border-t border-foreground/10">
         <Link href="/projects" className="group block">
            <div className="relative overflow-hidden mb-8 rounded-lg aspect-[4/5] md:aspect-[21/9]">
                <ParallaxImage src="/images/project-preview.png" className="bg-secondary/20 scale-105 group-hover:scale-100 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-mono uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm text-white opacity-100 md:opacity-0 group-hover:opacity-100 transform md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Archive
                    </span>
                 </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
                <div>
                     <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                        Selected<br />Works
                     </h2>
                </div>
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                 >
                    A curated selection of projects demonstrating my expertise in full-stack development, AI integration, and user-centric design.
                 </motion.p>
            </div>
            
            <div className="flex justify-end">
                 <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 group-hover:rotate-45 transition-transform duration-500" />
            </div>
         </Link>
      </Section>

      {/* Expertise Gateway */}
      <Section className="py-24 md:py-32 border-foreground/10">
         <Link href="/experience" className="group block">
             <div className="relative overflow-hidden mb-8 rounded-lg aspect-[4/5] md:aspect-[21/9]">

                <ParallaxImage src="/images/expertise-preview.png" className="bg-secondary/20 scale-105 group-hover:scale-100 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-mono uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm text-white opacity-100 md:opacity-0 group-hover:opacity-100 transform md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Capability
                    </span>
                 </div>
            </div>

             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
                 <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                    Expertise<br />& Skills
                 </h2>
                 <p className="max-w-md text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Typically my approach is diagnostic. I dive deep into the problem space to engineer solutions that are both scalable and intuitive.
                 </p>
            </div>
            <div className="w-full h-[2px] bg-foreground/20 group-hover:bg-primary transition-colors duration-500 origin-left group-hover:scale-x-100" />
            <div className="flex justify-end mt-4">
                 <div className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                        Explore Capability <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                 </div>
            </div>
         </Link>
      </Section>

      {/* Contact Gateway */}
      <Section className="py-24 md:py-32 border-t border-foreground/10 bg-muted/5">
        <Link href="/contact" className="group block text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-[14vw] md:text-[10vw] font-bold uppercase tracking-tighter leading-none mb-8 group-hover:text-primary transition-colors duration-300">
                    Let's Talk
                </h2>
                <div className="inline-flex items-center gap-4 text-xl md:text-4xl border border-foreground/20 rounded-full px-6 py-3 md:px-8 md:py-4 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    Start a Project <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                </div>
            </motion.div>
        </Link>
      </Section>
    </div>
  );
}
