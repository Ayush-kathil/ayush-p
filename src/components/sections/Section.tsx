"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  classNameContainer?: string;
}

export function Section({ children, className, id, classNameContainer }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 min-h-screen relative flex flex-col justify-center", classNameContainer)}>
      <div className={cn("container mx-auto px-4 md:px-8", className)}>
        <ScrollReveal width="100%">{children}</ScrollReveal>
      </div>
    </section>
  );
}
