"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-16 text-center relative">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-cyber-primary/10 rounded-full blur-2xl -z-10"
        animate={isInView ? { 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary inline-block relative"
      >
        {title}
        
        {/* Underline Effect */}
        <motion.div 
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-6 font-mono text-sm md:text-base flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyber-primary" />
          {subtitle}
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-cyber-secondary" />
        </motion.p>
      )}

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute -top-4 -left-4 text-cyber-primary/30"
      >
        <span className="text-2xl">{'{'}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, type: "spring" }}
        className="absolute -top-4 -right-4 text-cyber-secondary/30"
      >
        <span className="text-2xl">{'}'}</span>
      </motion.div>
    </div>
  );
}
