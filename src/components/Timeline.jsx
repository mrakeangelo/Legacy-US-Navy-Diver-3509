import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiAnchor, FiTarget, FiShield, FiStar } = FiIcons;

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2001',
      title: 'Enlistment',
      description: 'Joined the U.S. Navy with dreams of diving deep',
      icon: FiAnchor,
      depth: '0 FT',
    },
    {
      year: '2002',
      title: 'Navy Dive School (NDSTC)',
      description: 'Completed rigorous training at Naval Diving and Salvage Training Center',
      icon: FiTarget,
      depth: '130 FT',
    },
    {
      year: '2003',
      title: 'First Dive Assignment',
      description: 'Ship salvage and repair operations in the Mediterranean',
      icon: FiShield,
      depth: '180 FT',
    },
    {
      year: '2006',
      title: 'Deep Sea Certification',
      description: 'Qualified for deep sea diving operations and saturation diving',
      icon: FiStar,
      depth: '300 FT',
    },
    {
      year: '2010',
      title: 'Instructor Tour',
      description: 'Training the next generation of Navy Divers',
      icon: FiAward,
      depth: '200 FT',
    },
    {
      year: '2015',
      title: 'Combat Support Operations',
      description: 'EOD support and underwater reconnaissance missions',
      icon: FiTarget,
      depth: '250 FT',
    },
    {
      year: '2020',
      title: 'Final Tour & Retirement',
      description: '19 years of dedicated service to the underwater fleet',
      icon: FiAward,
      depth: '∞',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-deep-navy to-dive-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            DIVE TIMELINE
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            A career journey measured in depth, courage, and unwavering dedication to the mission.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-oxygen-yellow via-coral-blue to-oxygen-yellow"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-8 w-6 h-6 rounded-full bg-oxygen-yellow border-4 border-deep-navy flex items-center justify-center z-10">
                  <SafeIcon icon={event.icon} className="h-3 w-3 text-deep-navy" />
                </div>

                {/* Event Card */}
                <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-6 hover:border-oxygen-yellow/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-orbitron text-2xl font-bold text-oxygen-yellow">
                        {event.year}
                      </span>
                      <span className="font-orbitron text-sm text-coral-blue bg-coral-blue/20 px-3 py-1 rounded-full">
                        {event.depth}
                      </span>
                    </div>
                    <h3 className="font-bebas text-xl text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="font-inter text-wet-gray leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;