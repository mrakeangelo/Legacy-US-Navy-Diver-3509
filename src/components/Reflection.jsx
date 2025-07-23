import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiWaves, FiUsers } = FiIcons;

const Reflection = () => {
  return (
    <section id="reflection" className="py-20 bg-gradient-to-b from-dive-black to-deep-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-oxygen-yellow rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-coral-blue rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-wet-gray rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            WHY I DIVE
          </h2>
          <p className="font-inter text-lg text-wet-gray">
            A reflection on the depths that shaped a warrior's soul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-oxygen-yellow to-coral-blue rounded-full flex items-center justify-center">
              <SafeIcon icon={FiHeart} className="h-8 w-8 text-deep-navy" />
            </div>
            <h3 className="font-bebas text-xl text-oxygen-yellow mb-2">FIRST BREATH</h3>
            <p className="font-inter text-wet-gray text-sm">
              The moment I descended and took that first breath underwater, I knew I had found my calling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coral-blue to-oxygen-yellow rounded-full flex items-center justify-center">
              <SafeIcon icon={FiWaves} className="h-8 w-8 text-deep-navy" />
            </div>
            <h3 className="font-bebas text-xl text-oxygen-yellow mb-2">CLARITY</h3>
            <p className="font-inter text-wet-gray text-sm">
              In the silence of the deep, where pressure builds and darkness reigns, I found absolute clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-oxygen-yellow to-coral-blue rounded-full flex items-center justify-center">
              <SafeIcon icon={FiUsers} className="h-8 w-8 text-deep-navy" />
            </div>
            <h3 className="font-bebas text-xl text-oxygen-yellow mb-2">BROTHERHOOD</h3>
            <p className="font-inter text-wet-gray text-sm">
              Every dive buddy becomes family. Trust isn't just earned – it's forged in the depths.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-4">
              Personal Reflection
            </h3>
          </div>

          <div className="space-y-6 font-inter text-lg text-wet-gray leading-relaxed">
            <p>
              The first time I suited up and felt the weight of the gear, I thought I was ready. 
              But nothing prepares you for that moment when you break the surface and enter another world entirely.
            </p>

            <p>
              <span className="text-oxygen-yellow font-semibold">Diving taught me that fear and courage aren't opposites – they're dance partners.</span> 
              Every descent into the unknown required both. The fear kept me sharp, respectful of the environment. 
              The courage kept me moving forward when the mission demanded it.
            </p>

            <p>
              In the depths, there's no room for ego or pretense. The water doesn't care about your rank or your reputation. 
              It only responds to competence, preparation, and respect. That's where I learned what it truly means to be a professional.
            </p>

            <p>
              <span className="text-coral-blue font-semibold">The brotherhood of divers is unlike any other.</span> 
              When you're 200 feet down and your life depends on your dive buddy's skills and attention, 
              you form bonds that surface dwellers can't understand. We didn't just work together – we lived for each other.
            </p>

            <p className="text-white font-semibold italic">
              "The ocean taught me humility. The Navy taught me duty. But diving – diving taught me who I really am."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reflection;