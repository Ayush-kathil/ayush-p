"use client";

import { motion, useScroll, useTransform, MotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({
  children,
  width = "fit-content",
  className,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
