import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";
import { GravityBackground } from "@/components/3d/GravityBackground";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Gupta - Portfolio",
  description: "Full Stack Engineer & Designer",
  icons: {
    icon: "/favicon.ico", // Ensure this points to a real file or remove if you don't have one yet
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <GravityBackground />
            <main className="min-h-screen">
               {children}
            </main>
            <Footer />
            <div className="fixed bottom-6 right-6 z-50">
              <ThemeToggle />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
