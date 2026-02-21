"use client";

import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaUserSecret, FaShieldAlt, FaBrain, FaCrosshairs, FaDef } from "react-icons/fa";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Offensive Security (Red Team)", level: 70, color: "#bd00ff" },
    { name: "Defensive Security (Blue Team)", level: 30, color: "#00f3ff" },
    { name: "Python Development", level: 85, color: "#3776AB" },
    { name: "Network Security", level: 65, color: "#1BA0D7" },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-primary/5 rounded-full blur-[100px] -z-10" />

      <SectionTitle title="// ABOUT THE OPERATOR" subtitle="Mission Profile & Capabilities" />

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Main Bio Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden border-animate"
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 scanlines pointer-events-none" />
          
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <FaUserSecret size={120} />
          </div>

          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-cyber-primary flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-8 bg-cyber-primary rounded-full" />
              OPERATOR BRIEFING
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              I am a passionate cybersecurity enthusiast with a vision to integrate Artificial Intelligence into defensive systems. 
              With a strong foundation in ethical hacking and a CEH certification, I focus on identifying vulnerabilities before they can be exploited.
            </motion.p>
            
            {/* Animated Progress Bars */}
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm" style={{ color: skill.color }}>
                      {skill.name}
                    </span>
                    <span className="font-mono text-sm text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 15px ${skill.color}`
                      }}
                    >
                      {/* Glowing tip */}
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision & Certifications Cards */}
        <div className="space-y-6">
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 rounded-xl border-l-4 border-cyber-primary intense-glow group cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-cyber-primary/10 flex items-center justify-center border border-cyber-primary/30 group-hover:border-cyber-primary transition-colors">
                <FaBrain className="text-cyber-primary text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">THE VISION</h4>
                <span className="text-xs text-cyber-primary font-mono">AI × CYBERSECURITY</span>
              </div>
            </div>
            <p className="text-gray-400">
              My ultimate goal is to pioneer the combination of AI and Cybersecurity to create intelligent, self-healing defense systems that can predict and neutralize threats in real-time.
            </p>
          </motion.div>

          {/* Certification Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-6 rounded-xl border-l-4 border-cyber-secondary intense-glow group cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-cyber-secondary/10 flex items-center justify-center border border-cyber-secondary/30 group-hover:border-cyber-secondary transition-colors">
                <FaShieldAlt className="text-cyber-secondary text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">CERTIFIED EXPERTISE</h4>
                <span className="text-xs text-cyber-secondary font-mono">EC-COUNCIL CEH</span>
              </div>
            </div>
            <p className="text-gray-400">
              Holding the Certified Ethical Hacker (CEH) credential, I adhere to the highest standards of integrity and technical proficiency in securing digital assets.
            </p>
          </motion.div>

          {/* Specialization Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-6 rounded-xl border-l-4 border-cyber-accent intense-glow group cursor-default"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-cyber-accent/10 flex items-center justify-center border border-cyber-accent/30 group-hover:border-cyber-accent transition-colors">
                <FaCrosshairs className="text-cyber-accent text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">SPECIALIZATION</h4>
                <span className="text-xs text-cyber-accent font-mono">PENETRATION TESTING</span>
              </div>
            </div>
            <p className="text-gray-400">
              Specialized in advanced penetration testing methodologies, vulnerability assessment, and security auditing for enterprise networks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {[
          { number: "2+", label: "Years Experience", color: "#00f3ff" },
          { number: "50+", label: "Tools Mastered", color: "#bd00ff" },
          { number: "20+", label: "Projects Completed", color: "#ff0055" },
          { number: "3+", label: "Certifications", color: "#00f3ff" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="glass-panel p-6 rounded-xl text-center group hover:scale-105 transition-transform"
          >
            <motion.div 
              className="text-4xl font-bold mb-2"
              style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}` }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
