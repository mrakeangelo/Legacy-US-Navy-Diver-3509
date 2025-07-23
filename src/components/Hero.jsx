import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
          }}
        />
      </div>

      {/* Depth Gauge Overlay */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border-4 border-oxygen-yellow/30 bg-deep-navy/50 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-oxygen-yellow font-orbitron text-xs">DEPTH</div>
            <div className="text-white font-orbitron text-lg font-bold">165 FT</div>
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl mb-4 text-oxygen-yellow tracking-wide">
            NDCS MARCUS "SHARK" TATE
          </h1>
          <h2 className="font-orbitron text-xl sm:text-2xl lg:text-3xl mb-6 text-wet-gray">
            U.S. Navy Diver – Forged in Depth
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-inter italic text-wet-gray mb-8 leading-relaxed">
            "When others saw pressure, he found clarity."
          </blockquote>
          
          <motion.a
            href="#timeline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-coral-blue hover:bg-coral-blue/80 text-white px-8 py-4 rounded-lg font-orbitron font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Dive into His Legacy</span>
            <SafeIcon icon={FiChevronDown} className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <SafeIcon icon={FiChevronDown} className="h-8 w-8 text-oxygen-yellow opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;