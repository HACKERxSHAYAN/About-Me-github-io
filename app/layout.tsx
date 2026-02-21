"use client";

import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

// Metadata must be exported from a separate server component or file
export const metadata = {
  title: "Syed Muhammad Shayan Uddin | Cybersecurity & AI Expert",
  description: "Portfolio of a Cybersecurity Enthusiast, Ethical Hacker, and AI Learner.",
};

// Client-side preloader component
function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePreloader = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener('load', hidePreloader);
    
    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="preloader" 
      className="fixed inset-0 z-[9999] bg-cyber-black flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyber-primary/30 border-t-cyber-primary rounded-full animate-spin mx-auto mb-4" />
        <p className="font-mono text-cyber-primary text-sm animate-pulse">INITIALIZING SYSTEM...</p>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=()" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} bg-cyber-black text-white antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
