"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Glowing Orb Effects */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        style={{ opacity }}
        className="text-center z-10 max-w-4xl"
      >
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 mb-8 border border-cyan-400/50 rounded-full bg-cyan-400/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <motion.span 
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">SYSTEM ONLINE // SECURE</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Syed Muhammad</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
            Shayan Uddin
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 font-mono h-10"
        >
          <TypeAnimation
            sequence={[
              'Ethical Hacker',
              1500,
              'Developer',
              1500,
              'Tech Enthusiast',
              1500,
              'Cybersecurity Expert',
              1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          {/* View Operations - Cyan */}
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-lg transition-all duration-300 relative overflow-hidden group"
            style={{
              boxShadow: '0 0 20px rgba(0, 243, 255, 0.4), 0 0 40px rgba(0, 243, 255, 0.2)'
            }}
          >
            <span className="relative z-10">VIEW OPERATIONS</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Initialize Contact - Purple */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">INITIALIZE CONTACT</span>
            <motion.div
              className="absolute inset-0 bg-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: FaGithub, color: 'hover:text-white', href: 'https://github.com' },
            { icon: FaLinkedin, color: 'hover:text-[#0077b5]', href: 'https://linkedin.com' },
            { icon: FaShieldAlt, color: 'hover:text-cyan-400', href: '#' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl text-gray-500 ${item.color} transition-all duration-300 relative`}
            >
              <item.icon />
              <motion.div
                className="absolute -inset-2 bg-currentColor opacity-0 rounded-full blur-lg"
                whileHover={{ opacity: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-cyan-400/50 cursor-pointer"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-400/30 rounded-tr-lg" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30 rounded-bl-lg" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30 rounded-br-lg" />
    </section>
  );
}
