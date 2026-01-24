"use client";

import { Section } from "@/components/sections/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaggeredText } from "@/components/ui/staggered-text";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  // Dramatic Scale: Starts at 1, goes to 2.5 (very big) then fades out
  // The user wants "small to big", so distinct growth is key.
  const scale = useTransform(scrollY, [0, 600], [1, 2.5]); 
  const opacity = useTransform(scrollY, [0, 400, 600], [1, 1, 0]); // Fade out as it gets huge

  return (
    <Section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="z-10">
        <motion.h1 
            style={{ scale, opacity }}
            className="text-[14vw] md:text-[12vw] leading-[0.9] md:leading-[0.85] font-bold tracking-tighter uppercase text-foreground origin-center"
        >
          <div className="overflow-hidden">
             <StaggeredText text="Software" delay={0.1} />
          </div>
          <div className="overflow-hidden">
             <StaggeredText text="Engineer" delay={0.4} />
          </div>
        </motion.h1>
      </div>
      
      <motion.div 
        style={{ y }}
        className="mt-12 max-w-xl self-end text-right"
      >
         <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Building scalable digital experiences powered by intelligent data.
            <br />
            <span className="text-primary">Ayush Gupta</span> — AI & ML Specialist
         </p>
      </motion.div>

      <div className="absolute bottom-10 left-4 md:left-8 flex gap-8 text-sm uppercase tracking-widest text-muted-foreground/60">
         <span>Scroll to explore</span>
         <span>[2024 — 2025]</span>
      </div>
    </Section>
  );
}
