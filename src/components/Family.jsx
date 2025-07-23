import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiAnchor, FiSun } = FiIcons;

const Family = () => {
  const familyMoments = [
    {
      title: 'Homecoming',
      description: 'After 8 months deployment, the pier reunion with Sarah and the kids',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      icon: FiHome,
    },
    {
      title: 'Teaching Moments',
      description: 'Showing Emma and Jake how to hold their breath underwater at the local pool',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      icon: FiSun,
    },
    {
      title: 'Missed Milestones',
      description: 'Photos sent via email - first steps, school plays, birthdays celebrated from afar',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      icon: FiHeart,
    },
    {
      title: 'Shore Leave Adventures',
      description: 'Family camping trips and beach days - making up for lost time',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      icon: FiAnchor,
    },
  ];

  return (
    <section id="family" className="py-20 bg-dive-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            SURFACE SUPPORT
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Behind every diver is a family that holds the surface line – the anchor that keeps us grounded.
          </p>
        </motion.div>

        {/* Family Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 lg:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-4">
                To Sarah, Emma, and Jake
              </h3>
              <div className="space-y-4 font-inter text-lg text-wet-gray leading-relaxed">
                <p>
                  While I explored the depths of the ocean, you three were my constant compass, 
                  always pointing me toward home. Every dive, every mission, every moment underwater 
                  was made possible by knowing you were waiting on the surface.
                </p>
                <p>
                  <span className="text-oxygen-yellow font-semibold">Sarah</span> – 
                  You held our family together through countless deployments, 
                  handled every crisis with grace, and never once made me feel guilty for following my calling.
                </p>
                <p>
                  <span className="text-coral-blue font-semibold">Emma and Jake</span> – 
                  You grew up understanding that Daddy's job was important, 
                  even when it meant missing bedtime stories and soccer games. 
                  Your drawings and letters were my lifeline in the deep.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Family photo"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-oxygen-yellow to-coral-blue rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Family Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {familyMoments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-deep-navy/50 backdrop-blur-sm border border-coral-blue/30 hover:border-oxygen-yellow/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <SafeIcon icon={moment.icon} className="h-6 w-6 text-oxygen-yellow" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bebas text-xl text-white mb-2">
                    {moment.title}
                  </h3>
                  <p className="font-inter text-sm text-wet-gray">
                    {moment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
              What They Taught Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <SafeIcon icon={FiHeart} className="h-8 w-8 text-oxygen-yellow mx-auto mb-3" />
                <h4 className="font-bebas text-lg text-white mb-2">UNCONDITIONAL LOVE</h4>
                <p className="font-inter text-sm text-wet-gray">
                  No matter how deep I went or how long I was gone, home was always waiting.
                </p>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiAnchor} className="h-8 w-8 text-coral-blue mx-auto mb-3" />
                <h4 className="font-bebas text-lg text-white mb-2">STRENGTH IN SACRIFICE</h4>
                <p className="font-inter text-sm text-wet-gray">
                  They showed me that true strength is supporting someone else's dreams.
                </p>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiHome} className="h-8 w-8 text-oxygen-yellow mx-auto mb-3" />
                <h4 className="font-bebas text-lg text-white mb-2">THE MEANING OF HOME</h4>
                <p className="font-inter text-sm text-wet-gray">
                  Home isn't a place – it's the people who make every return worth the journey.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;