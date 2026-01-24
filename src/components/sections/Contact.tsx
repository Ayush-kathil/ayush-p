"use client";

import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="min-h-[70vh]">
      <div className="max-w-4xl mx-auto w-full text-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8 md:p-12 rounded-3xl"
         >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              I am actively seeking Software Engineering Internships. Ready to leverage my strong foundation in Data Structures, Algorithms, and AI to build scalable, real-world solutions.
            </p>
            
            <motion.a
              href="mailto:kathilshiva@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </motion.a>

            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 bg-background rounded-full border border-border group-hover:border-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                 <div className="p-3 bg-background rounded-full border border-border group-hover:border-primary transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
         </motion.div>
      </div>
    </Section>
  );
}
