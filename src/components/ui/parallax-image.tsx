"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src?: string; // In a real app, use Next.js Image
  alt?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "antigravity";
}

export function ParallaxImage({ src, alt, className, containerClassName, variant = "default" }: ParallaxImageProps) {
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
      <motion.div 
        style={variant === "default" ? { y, scale } : undefined} 
        animate={variant === "antigravity" ? {
             y: [0, -20, 0],
             scale: [1, 1.05, 1],
        } : undefined}
        transition={variant === "antigravity" ? {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        } : undefined}
        className="absolute inset-0 w-full h-full"
      >
         <div className={cn("w-full h-full bg-cover bg-center", className)} style={{ backgroundImage: src ? `url(${src})` : undefined }} />
         {!src && <div className="w-full h-full bg-muted" />} {/* Fallback */}
      </motion.div>
    </div>
  );
}
