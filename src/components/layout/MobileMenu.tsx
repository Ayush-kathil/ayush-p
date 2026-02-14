"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  const menuVars: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobilLinkVars: Variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 w-full h-screen bg-background origin-top z-40 flex flex-col justify-between p-10"
        >
          <div className="flex flex-col h-full justify-center">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-4 "
            >
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    variants={mobilLinkVars}
                    className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
                  >
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8, duration: 0.5 } 
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex flex-col gap-4"
          >
             <div className="w-full h-[1px] bg-muted-foreground/20" />
             <div className="flex justify-between items-end">
                <div className="flex gap-4">
                    <Link href="https://github.com/Ayush-kathil" target="_blank" className="p-2 border border-muted-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                     <Link href="https://linkedin.com/in/ayushkathil" target="_blank" className="p-2 border border-muted-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                     <Link href="mailto:kathilshiva@gmail.com"  className="p-2 border border-muted-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
                
                <div className="text-right">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Based in India</span>
                    <p className="font-medium">{new Date().getFullYear()} ©</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
