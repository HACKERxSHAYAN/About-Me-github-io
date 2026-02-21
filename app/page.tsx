"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamic import for ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(() => import('@/ParticleBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[-1] bg-cyber-black" />
});

import Hero from '@/Hero';
import About from '@/About';
import Skills from '@/Skills';
import Projects from '@/Projects';
import Contact from '@/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel py-6 mx-4 rounded-xl"
          >
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-cyber-primary">{'//'}</span> SYSTEM STATUS: OPERATIONAL
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 Syed Muhammad Shayan Uddin. All systems secure.
            </p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
