"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "@/components/ui/parallax-image";

interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  links: { github: string; demo: string };
  year?: string;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <Link 
        href={`/projects/${project.slug}`}
        className={cn("group block w-full md:w-[500px] shrink-0", className)}
    >
      <div className="relative aspect-[4/3] bg-muted/30 overflow-hidden mb-6 rounded-lg border border-white/10">
         <ParallaxImage src={project.images?.[0]} className="bg-secondary/10" />
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
         <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0">
            {index + 1}
        </div>
      </div>

      <div className="flex justify-between items-start border-t border-border pt-4">
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </h3>
          <div className="flex gap-2 text-sm text-muted-foreground">
             {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i}>{tag}</span>
             ))}
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
      </div>
    </Link>
  );
}
