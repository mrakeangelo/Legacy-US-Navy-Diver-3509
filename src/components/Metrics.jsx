import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingDown, FiClock, FiMap, FiPackage, FiUsers, FiTarget } = FiIcons;

const Metrics = () => {
  const [counters, setCounters] = useState({
    totalDives: 0,
    maxDepth: 0,
    deployments: 0,
    hoursSubmerged: 0,
    diversTrained: 0,
    missionsCompleted: 0,
  });

  const finalValues = {
    totalDives: 1247,
    maxDepth: 425,
    deployments: 8,
    hoursSubmerged: 3890,
    diversTrained: 67,
    missionsCompleted: 134,
  };

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const finalValue = finalValues[key];
      const increment = finalValue / steps;
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        currentValue = Math.min(Math.round(increment * step), finalValue);
        
        setCounters(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (step >= steps) {
          clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const metrics = [
    {
      icon: FiTrendingDown,
      label: 'Total Dives',
      value: counters.totalDives,
      suffix: '',
      color: 'from-oxygen-yellow to-orange-500',
    },
    {
      icon: FiTarget,
      label: 'Maximum Depth',
      value: counters.maxDepth,
      suffix: ' FT',
      color: 'from-coral-blue to-blue-600',
    },
    {
      icon: FiMap,
      label: 'Deployments',
      value: counters.deployments,
      suffix: '',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FiClock,
      label: 'Hours Submerged',
      value: counters.hoursSubmerged,
      suffix: ' HRS',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FiUsers,
      label: 'Divers Trained',
      value: counters.diversTrained,
      suffix: '',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: FiPackage,
      label: 'Missions Completed',
      value: counters.missionsCompleted,
      suffix: '',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dive-black to-deep-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            MISSION METRICS
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            A career measured in depth, dedication, and the lives touched along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center shadow-lg`}>
                <SafeIcon icon={metric.icon} className="h-12 w-12 text-white" />
              </div>
              
              <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-6 hover:border-oxygen-yellow/50 transition-all duration-300">
                <div className="font-orbitron text-3xl lg:text-4xl text-white mb-2">
                  {metric.value.toLocaleString()}
                  <span className="text-lg text-oxygen-yellow">{metric.suffix}</span>
                </div>
                <div className="font-inter text-sm text-wet-gray uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
              Beyond the Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bebas text-lg text-white mb-2">DEEPEST DIVE</h4>
                <p className="font-inter text-sm text-wet-gray mb-4">
                  425 feet during a saturation diving operation off the coast of Gibraltar. 
                  The mission lasted 18 hours and required precise decompression protocols.
                </p>
                
                <h4 className="font-bebas text-lg text-white mb-2">LONGEST DEPLOYMENT</h4>
                <p className="font-inter text-sm text-wet-gray">
                  8 months aboard USS Enterprise, conducting diving operations across 
                  the Mediterranean and Arabian Gulf.
                </p>
              </div>
              <div>
                <h4 className="font-bebas text-lg text-white mb-2">MOST CHALLENGING MISSION</h4>
                <p className="font-inter text-sm text-wet-gray mb-4">
                  Underwater EOD support in restricted waters. Mission details remain classified, 
                  but the operation earned the team a Navy Unit Commendation.
                </p>
                
                <h4 className="font-bebas text-lg text-white mb-2">PROUDEST ACHIEVEMENT</h4>
                <p className="font-inter text-sm text-wet-gray">
                  Training 67 divers who went on to serve with distinction. 
                  Several became Master Divers themselves, continuing the legacy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;