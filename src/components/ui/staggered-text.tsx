"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  word?: boolean; // If true, split by words instead of lines/chars (simplified here to just text block reveal)
}

export function StaggeredText({ text, className, delay = 0 }: StaggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Split text by words for a staggered effect
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block overflow-hidden leading-[1.1]", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
            <motion.span
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : { y: "110%" }}
                transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1], // Cubic bezier for smoothness
                    delay: delay + i * 0.05,
                }}
                className="inline-block"
            >
                {word}
            </motion.span>
        </span>
      ))}
    </span>
  );
}
