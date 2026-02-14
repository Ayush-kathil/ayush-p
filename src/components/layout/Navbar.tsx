"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
       setIsHidden(true);
    } else {
       setIsHidden(false);
    }
  });

  const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-6 mix-blend-difference text-white"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter uppercase"
        >
          Ayush G.
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
             <MagneticButton key={link.name}>
                <Link
                  href={link.href}
                  className="px-6 py-2 text-sm font-medium uppercase tracking-wide hover:text-white/60 transition-colors"
                >
                  {link.name}
                </Link>
             </MagneticButton>
          ))}
          <MagneticButton>
            <Link
                href="mailto:kathilshiva@gmail.com"
                className="ml-4 px-6 py-2 rounded-full border border-white/20 text-sm font-medium uppercase hover:bg-white hover:text-black transition-all"
            >
                Hire Me
            </Link>
          </MagneticButton>
        </div>

      {/* Mobile Nav Toggle */}
        <div className="md:hidden z-50">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-[2px] bg-current block transition-all duration-300"
              />
              <motion.span 
                 animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-[2px] bg-current block transition-all duration-300"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-[2px] bg-current block transition-all duration-300"
              />
            </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
    </motion.nav>
  );
}
