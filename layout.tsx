import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export const metadata: Metadata = {
  title: "Syed Muhammad Shayan Uddin | Cybersecurity & AI Expert",
  description: "Portfolio of a Cybersecurity Enthusiast, Ethical Hacker, and AI Learner. Specializing in penetration testing, network security, and AI-powered defense systems.",
  keywords: ["Cybersecurity", "Ethical Hacker", "CEH", "AI", "Penetration Testing", "Network Security", "Portfolio"],
  authors: [{ name: "Syed Muhammad Shayan Uddin" }],
  openGraph: {
    title: "Syed Muhammad Shayan Uddin | Cybersecurity & AI Expert",
    description: "Portfolio of a Cybersecurity Enthusiast, Ethical Hacker, and AI Learner.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Client-side preloader component (SECURE - no dangerouslySetInnerHTML)
function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Security Meta Tags */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=()" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} bg-cyber-black text-white antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
