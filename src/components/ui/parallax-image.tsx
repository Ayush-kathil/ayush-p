"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src?: string; // In a real app, use Next.js Image
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function ParallaxImage({ src, alt, className, containerClassName }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a vertical translate
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div 
        ref={containerRef} 
        className={cn("overflow-hidden relative h-full w-full", containerClassName)}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
         <div className={cn("w-full h-full bg-cover bg-center", className)} style={{ backgroundImage: src ? `url(${src})` : undefined }} />
         {!src && <div className="w-full h-full bg-muted" />} {/* Fallback */}
      </motion.div>
    </div>
  );
}
