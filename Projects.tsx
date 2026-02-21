"use client";

import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaAward, FaExternalLinkAlt, FaCode, FaLock, FaBrain } from "react-icons/fa";
import { useRef } from "react";

const projects = [
  {
    title: "Network Vulnerability Scanner",
    desc: "Python-based automated scanner utilizing Nmap scripts to identify open ports and potential CVEs in local networks. Features real-time vulnerability detection and reporting.",
    tags: ["Python", "Nmap", "Automation", "Security"],
    icon: FaCode,
    color: "#00f3ff"
  },
  {
    title: "AI Phishing Detector",
    desc: "Machine learning model trained to detect phishing URLs and malicious email headers with 94% accuracy. Uses NLP and pattern recognition techniques.",
    tags: ["Python", "Scikit-Learn", "AI/ML", "Cyber Defense"],
    icon: FaBrain,
    color: "#bd00ff"
  },
  {
    title: "Secure Chat Application",
    desc: "End-to-end encrypted messaging app built with C++ ensuring zero-knowledge privacy architecture. Features military-grade encryption protocols.",
    tags: ["C++", "Cryptography", "Socket Programming", "Security"],
    icon: FaLock,
    color: "#ff0055"
  }
];

const certs = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2024", color: "#00f3ff" },
  { name: "Advent of Cyber 2023", issuer: "TryHackMe", year: "2023", color: "#bd00ff" },
  { name: "Ethical Hacker Beginner", issuer: "Udemy", year: "2023", color: "#ff0055" }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-[120px] -z-10" />

      <SectionTitle title="// OPERATIONS LOG" subtitle="Projects & Certifications" />

      <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ 
              y: -10,
              boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${project.color}30`
            }}
            className="glass-panel p-7 rounded-2xl border-t-2 group cursor-pointer relative overflow-hidden"
            style={{ borderColor: `${project.color}40` }}
          >
            {/* Gradient Background on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`
              }}
            />

            {/* Icon */}
            <motion.div 
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
              style={{ 
                backgroundColor: `${project.color}20`,
                border: `1px solid ${project.color}40`
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <project.icon className="text-3xl" style={{ color: project.color }} />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                {project.title}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-xs text-gray-500"
                >
                  →
                </motion.span>
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, index) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-xs px-3 py-1.5 rounded-lg font-mono"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Action Button */}
              <motion.button 
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/btn"
                whileHover={{ x: 5 }}
              >
                <span>View Code</span>
                <FaExternalLinkAlt size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-transparent group-hover:border-current transition-colors opacity-20" style={{ borderColor: project.color }} />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-transparent group-hover:border-current transition-colors opacity-20" style={{ borderColor: project.color }} />
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-3xl font-bold text-center mb-10 text-white flex items-center justify-center gap-4"
      >
        <span className="w-12 h-1 bg-gradient-to-r from-cyber-primary to-transparent rounded-full" />
        CREDENTIALS
        <span className="w-12 h-1 bg-gradient-to-l from-cyber-secondary to-transparent rounded-full" />
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="glass-panel p-6 rounded-xl flex items-center gap-5 border border-transparent hover:border-current group transition-all"
            style={{ borderColor: `${cert.color}30` }}
          >
            <motion.div 
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ 
                backgroundColor: `${cert.color}20`
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaAward size={24} style={{ color: cert.color }} />
            </motion.div>
            <div className="min-w-0">
              <h4 className="font-bold text-white text-sm md:text-base truncate">{cert.name}</h4>
              <p className="text-gray-400 text-xs md:text-sm">{cert.issuer}</p>
              <span 
                className="text-xs font-mono mt-1 inline-block"
                style={{ color: cert.color }}
              >
                ◆ {cert.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-cyber-primary/30 text-cyber-primary font-mono hover:bg-cyber-primary/10 transition-all"
        >
          <FaCode />
          View All Projects
          <span className="text-xs">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
