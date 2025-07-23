import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiStar, FiShield } = FiIcons;

const Footer = () => {
  const quotes = [
    "Some walk on land. Few master the deep.",
    "He dove where others wouldn't — and rose stronger.",
    "In the depths, legends are forged.",
    "Courage is not the absence of fear, but diving despite it.",
    "The ocean remembers its own."
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-dive-black border-t border-coral-blue/30 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32">
          <SafeIcon icon={FiAnchor} className="w-full h-full text-oxygen-yellow" />
        </div>
        <div className="absolute bottom-10 right-10 w-24 h-24">
          <SafeIcon icon={FiShield} className="w-full h-full text-coral-blue" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="h-20 flex items-center justify-center">
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-inter text-xl lg:text-2xl text-oxygen-yellow italic max-w-3xl"
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentQuote ? 'bg-oxygen-yellow' : 'bg-coral-blue/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <SafeIcon icon={FiAnchor} className="h-8 w-8 text-oxygen-yellow mr-3" />
              <h3 className="font-orbitron text-xl text-oxygen-yellow">
                LEGACY
              </h3>
            </div>
            <p className="font-inter text-wet-gray leading-relaxed">
              Master Chief Marcus "Shark" Tate served with distinction for 19 years, 
              touching countless lives and setting the standard for excellence in the Navy Diving community.
            </p>
          </motion.div>

          {/* Service Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiStar} className="h-8 w-8 text-oxygen-yellow mr-3" />
              <h3 className="font-orbitron text-xl text-oxygen-yellow">
                SERVICE
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-inter text-wet-gray">Years of Service:</span>
                <span className="font-orbitron text-white">19</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-wet-gray">Deployments:</span>
                <span className="font-orbitron text-white">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-wet-gray">Divers Trained:</span>
                <span className="font-orbitron text-white">67</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-wet-gray">Total Dives:</span>
                <span className="font-orbitron text-white">1,247</span>
              </div>
            </div>
          </motion.div>

          {/* Contact/Admin */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-right"
          >
            <div className="flex items-center justify-center lg:justify-end mb-4">
              <SafeIcon icon={FiHeart} className="h-8 w-8 text-oxygen-yellow mr-3" />
              <h3 className="font-orbitron text-xl text-oxygen-yellow">
                HONOR
              </h3>
            </div>
            <p className="font-inter text-wet-gray leading-relaxed mb-4">
              This tribute site was created to honor the memory and service of a true American hero. 
              His legacy lives on in every diver he trained and every life he touched.
            </p>
            <a
              href="#/admin"
              className="font-inter text-coral-blue hover:text-oxygen-yellow transition-colors text-sm"
            >
              Site Administration
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-coral-blue/30 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiShield} className="h-6 w-6 text-oxygen-yellow" />
              <span className="font-orbitron text-oxygen-yellow font-bold">
                NDCS MARCUS "SHARK" TATE
              </span>
            </div>
            
            <div className="font-inter text-wet-gray text-sm">
              <p>1982 - 2023 | U.S. Navy Diver | Master Chief Petty Officer</p>
            </div>
            
            <div className="font-inter text-wet-gray text-sm">
              <p>&copy; 2024 Tate Family Legacy</p>
            </div>
          </div>
        </motion.div>

        {/* Final Tribute */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-coral-blue/20 to-oxygen-yellow/20 backdrop-blur-sm border border-oxygen-yellow/30 rounded-full px-8 py-4">
            <SafeIcon icon={FiAnchor} className="h-6 w-6 text-oxygen-yellow" />
            <span className="font-orbitron text-white font-bold">
              SEMPER FIDELIS • HOOYAH • FAIR WINDS
            </span>
            <SafeIcon icon={FiAnchor} className="h-6 w-6 text-oxygen-yellow" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;