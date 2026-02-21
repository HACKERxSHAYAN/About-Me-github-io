"use client";

import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { 
  SiKalilinux, 
  SiMetasploit, 
  SiBurpsuite, 
  SiPython, 
  SiCplusplus, 
  SiJavascript, 
  SiCisco, 
  SiLinux,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNginx,
  SiMysql
} from "react-icons/si";
import { useRef } from "react";

const skills = [
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94", level: 90 },
  { name: "Metasploit", icon: SiMetasploit, color: "#1bb1f6", level: 85 },
  { name: "Burp Suite", icon: SiBurpsuite, color: "#ff6633", level: 80 },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 95 },
  { name: "C / C++", icon: SiCplusplus, color: "#00599C", level: 75 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
  { name: "React/Next.js", icon: SiReact, color: "#61DAFB", level: 90 },
  { name: "Networking", icon: SiCisco, color: "#1BA0D7", level: 80 },
  { name: "Linux Admin", icon: SiLinux, color: "#FCC624", level: 85 },
  { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26", level: 90 },
  { name: "Nginx", icon: SiNginx, color: "#009639", level: 70 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 75 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 bg-cyber-dark/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-[120px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionTitle title="// TECHNICAL ARSENAL" subtitle="Tools & Technologies" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                borderColor: skill.color,
                boxShadow: `0 0 30px ${skill.color}40`
              }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-transparent hover:border-transparent transition-all cursor-default group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`
              }}
            >
              {/* Hover Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
                }}
              />

              {/* Icon */}
              <div className="relative z-10">
                <skill.icon 
                  className="text-5xl md:text-6xl transition-all duration-300 group-hover:scale-125" 
                  style={{ 
                    color: skill.color,
                    filter: isInView ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                  }} 
                />
              </div>

              {/* Name */}
              <span className="font-mono font-bold text-gray-300 group-hover:text-white text-center relative z-10">
                {skill.name}
              </span>

              {/* Level Indicator */}
              <motion.div 
                className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-2 relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <motion.div 
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: 0.7 + index * 0.05,
                    ease: "easeOut"
                  }}
                  style={{ 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`
                  }}
                />
              </motion.div>

              {/* Percentage */}
              <motion.span 
                className="font-mono text-xs text-gray-500 group-hover:text-white relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
              >
                {skill.level}%
              </motion.span>

              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: skill.color }} />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: skill.color }} />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: skill.color }} />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: skill.color }} />
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Penetration Testing",
              skills: ["Vulnerability Assessment", "Network Scanning", "Exploitation", "Post-Exploitation"],
              color: "#ff0055"
            },
            {
              title: "Development",
              skills: ["Python Automation", "Web Applications", "Security Tools", "APIs"],
              color: "#bd00ff"
            },
            {
              title: "Infrastructure",
              skills: ["Network Security", "System Administration", "Cloud Security", "Firewalls"],
              color: "#00f3ff"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="glass-panel p-6 rounded-xl border-t-4"
              style={{ borderColor: category.color }}
            >
              <h4 
                className="text-lg font-bold mb-4"
                style={{ color: category.color }}
              >
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
