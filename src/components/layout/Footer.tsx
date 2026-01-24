import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <Link href="https://github.com/Ayush-kathil" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/ayushkathil" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:kathilshiva@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
             <Mail className="w-5 h-5" />
          </Link>
          <div className="w-px h-6 bg-border mx-2" />
          <ThemeToggle />
        </div>
        <div className="text-center">
             <p className="text-sm text-muted-foreground">
                Designed & Built by Ayush Gupta © {new Date().getFullYear()}
             </p>
             <p className="text-xs text-muted-foreground/60 mt-2">
                Built with Next.js, React, Tailwind, Framer Motion & Gemini AI
             </p>
        </div>
      </div>
    </footer>
  );
}
