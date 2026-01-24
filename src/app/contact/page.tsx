"use client";

import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/sections/Section";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowLeft } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen pt-12 pb-24">
        <div className="container mx-auto px-4 md:px-6 mb-12">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group uppercase tracking-widest text-sm"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Hub
            </Link>
        </div>
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
              Contact
            </h1>
            <div className="w-full h-[1px] bg-foreground/20" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold uppercase mb-8">Let's Connect</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                I'm currently available for freelance work or full-time positions. 
                If you have a project that needs some creative direction, 
                or just want to say hello, feel free to reach out.
              </p>

              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@example.com
                </a>
                <div className="flex items-center gap-4 text-xl text-muted-foreground">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30" 
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30" 
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 resize-none" 
                />
              </div>

              <div className="pt-8">
                <MagneticButton className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium flex items-center justify-center gap-2 group">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </MagneticButton>
              </div>
            </form>
          </div>
        </Section>
      </main>
    </>
  );
}
