"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaShieldAlt, FaTerminal, FaChevronDown } from 'react-icons/fa';
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
      {/* Multiple Glowing Orb Effects */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-primary/10 rounded-full blur-[150px] -z-10"
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
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyber-secondary/10 rounded-full blur-[120px] -z-10"
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
        className="text-center z-10"
      >
        {/* Animated Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 mb-6 border border-cyber-primary/50 rounded-full bg-cyber-primary/5 backdrop-blur-md relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-cyber-primary/20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex items-center gap-2 relative z-10">
            <motion.span 
              className="w-2 h-2 rounded-full bg-cyber-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-cyber-primary font-mono text-sm tracking-wider">SYSTEM ONLINE // SECURE</span>
          </div>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight relative"
        >
          <span className="text-white">Syed Muhammad</span>
          <br />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary gradient-animate inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Shayan Uddin
          </motion.span>
          
          {/* Decorative elements */}
          <motion.span 
            className="absolute -top-4 -left-4 text-cyber-primary opacity-50"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaTerminal size={24} />
          </motion.span>
        </motion.h1>

        {/* Animated Typing Sequence */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 font-mono h-[70px]"
        >
          <TypeAnimation
            sequence={[
              '> Initializing...',
              500,
              'Cybersecurity Enthusiast',
              1000,
              '> Loading modules...',
              500,
              'Ethical Hacker',
              1000,
              '> Compiling...',
              500,
              'AI Learner',
              1000,
              '> Building...',
              500,
              'Full Stack Developer',
              1000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-cyber-primary"
          />
        </motion.div>

        {/* CTA Buttons with Glow Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-cyber-primary text-cyber-black font-bold rounded-lg glow-button shadow-[0_0_30px_rgba(0,243,255,0.4)]"
          >
            <span className="flex items-center gap-2">
              <FaTerminal />
              VIEW OPERATIONS
            </span>
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-cyber-secondary text-cyber-secondary font-bold rounded-lg hover:bg-cyber-secondary/10 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaShieldAlt className="group-hover:rotate-12 transition-transform" />
              INITIALIZE CONTACT
            </span>
            <motion.div
              className="absolute inset-0 bg-cyber-secondary/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Social Links with Animated Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 flex justify-center gap-8"
        >
          {[
            { icon: FaGithub, color: 'hover:text-white', delay: 0 },
            { icon: FaLinkedin, color: 'hover:text-[#0077b5]', delay: 0.1 },
            { icon: FaShieldAlt, color: 'hover:text-cyber-primary', delay: 0.2 }
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
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
          className="text-cyber-primary/50"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyber-primary/30 rounded-tl-lg" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyber-primary/30 rounded-tr-lg" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyber-primary/30 rounded-bl-lg" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyber-primary/30 rounded-br-lg" />
    </section>
  );
}
