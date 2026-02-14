"use client";

import { Section } from "@/components/sections/Section";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <Section id="about" className="py-12 md:py-24 border-b border-foreground/10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        {/* Photo Column */}
        <div className="w-full md:w-5/12 sticky top-24">
            <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto">
               <div className="absolute inset-0 border border-foreground/20 rounded-xl transform rotate-3" />
               <div className="absolute inset-0 border border-foreground/20 rounded-xl transform -rotate-3" />
               <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted/20 border border-foreground/10">
                  <ParallaxImage src="/profile.jpg" className=" hover:grayscale transition-all duration-700" alt="My Photo" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-muted-foreground/40 text-sm uppercase tracking-widest">
                        
                     </span>
                  </div>
               </div>
            </div>
            
             <div className="mt-8 text-center md:text-left hidden">
               {/* Link removed as requested */}
            </div>
        </div>

        {/* Text Column */}
        <div className="w-full md:w-7/12 space-y-12 text-lg">
            <div>
                <ScrollReveal>
                    <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-primary">
                        About
                    </h2>
                </ScrollReveal>
                <ScrollReveal>
                     <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
                        <span className="text-foreground font-normal">A fusion of logic and creativity.</span>
                        <br />
                        I believe in the power of code to reshape reality. My work sits at the intersection of rigorous engineering and fluid design.
                     </p>
                </ScrollReveal>
            </div>

           <div className="space-y-12">
               <ScrollReveal>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Background</h3>
                  <p className="leading-relaxed">
                    I am a 2nd-year B.Tech Student specializing in Artificial Intelligence & Machine Learning at <strong className="text-foreground">VIT Bhopal University</strong>. My academic journey is fueled by a relentless curiosity for how things work, from the lowest level of memory management to the highest level of neural network abstractions.
                  </p>
               </ScrollReveal>
               
               <ScrollReveal>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Philosophy</h3>
                  <p className="leading-relaxed">
                    Software is modern alchemy. It turns language into action, and ideas into experiences. I strive to build applications that feel inevitable—simple, powerful, and essential.
                  </p>
               </ScrollReveal>
               
               <ScrollReveal>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Community</h3>
                  <p className="leading-relaxed">
                    Active member of <strong className="text-foreground">MATRIX</strong> and <strong className="text-foreground">TechnoMech</strong> clubs, where I mentor peers and lead technical initiatives. Knowledge grows when shared.
                  </p>
               </ScrollReveal>
           </div>
        </div>
      </div>
    </Section>
  );
}
