import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiTarget, FiStar, FiTool, FiZap } = FiIcons;

const Qualifications = () => {
  const badges = [
    {
      name: 'Master Diver',
      level: 'Master',
      icon: FiStar,
      color: 'from-yellow-400 to-orange-500',
      description: 'Highest enlisted diving qualification',
    },
    {
      name: 'First Class Diver',
      level: 'First Class',
      icon: FiShield,
      color: 'from-blue-400 to-cyan-500',
      description: 'Advanced diving operations certified',
    },
    {
      name: 'Saturation Diver',
      level: 'Specialized',
      icon: FiTarget,
      color: 'from-purple-400 to-pink-500',
      description: 'Deep saturation diving qualified',
    },
  ];

  const certifications = [
    {
      category: 'Diving Operations',
      items: [
        'Saturation Diving Systems',
        'Recompression Chamber Operations',
        'Mixed Gas Diving',
        'Deep Sea Diving',
        'Underwater Cutting & Welding',
        'Ship Husbandry & Repair',
      ],
    },
    {
      category: 'Combat Support',
      items: [
        'EOD Support Operations',
        'Underwater Reconnaissance',
        'Port Security Diving',
        'Combat Swimmer',
        'Expeditionary Warfare',
        'Fleet Marine Force',
      ],
    },
    {
      category: 'Technical Skills',
      items: [
        'Underwater Photography',
        'Rigging & Salvage',
        'Hyperbaric Medicine',
        'Diving Supervisor',
        'Equipment Maintenance',
        'Safety Officer',
      ],
    },
  ];

  const necs = [
    { code: '5342', title: 'First Class Diver', tooltip: 'Qualified for most diving operations' },
    { code: '5343', title: 'Master Diver', tooltip: 'Highest level diving qualification' },
    { code: '5345', title: 'Saturation Diver', tooltip: 'Deep water saturation diving' },
    { code: '5346', title: 'Diving Medical Technician', tooltip: 'Hyperbaric medicine specialist' },
  ];

  return (
    <section id="qualifications" className="py-20 bg-deep-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            QUALIFICATIONS
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Badges earned through dedication, certifications forged in the depths.
          </p>
        </motion.div>

        {/* Dive Badges */}
        <div className="mb-16">
          <h3 className="font-bebas text-2xl text-oxygen-yellow mb-8 text-center">
            DIVE BADGES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <SafeIcon icon={badge.icon} className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-orbitron text-lg text-white mb-1">
                  {badge.name}
                </h4>
                <p className="font-inter text-sm text-coral-blue mb-2">
                  {badge.level}
                </p>
                <p className="font-inter text-xs text-wet-gray">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-bebas text-2xl text-oxygen-yellow mb-8 text-center">
            CERTIFICATIONS & QUALIFICATIONS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-6 hover:border-oxygen-yellow/50 transition-all duration-300"
              >
                <h4 className="font-orbitron text-lg text-oxygen-yellow mb-4 flex items-center">
                  <SafeIcon icon={FiAward} className="h-5 w-5 mr-2" />
                  {cert.category}
                </h4>
                <ul className="space-y-2">
                  {cert.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-inter text-sm text-wet-gray flex items-center">
                      <div className="w-2 h-2 bg-coral-blue rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NECs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-bebas text-2xl text-oxygen-yellow mb-8">
            NAVY ENLISTED CLASSIFICATIONS (NECs)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {necs.map((nec, index) => (
              <div
                key={nec.code}
                className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-lg p-4 hover:border-oxygen-yellow/50 transition-all duration-300 group cursor-pointer"
                title={nec.tooltip}
              >
                <div className="font-orbitron text-xl text-oxygen-yellow mb-1">
                  {nec.code}
                </div>
                <div className="font-inter text-sm text-wet-gray group-hover:text-white transition-colors">
                  {nec.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;