import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiPlay, FiX } = FiIcons;

const Missions = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const missions = [
    {
      id: 1,
      title: 'Deep Sea Salvage Operation',
      location: 'Mediterranean Sea',
      depth: '285 FT',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Recovery of critical equipment from sunken vessel',
    },
    {
      id: 2,
      title: 'Underwater Welding & Repair',
      location: 'Norfolk Naval Base',
      depth: '120 FT',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Critical hull repairs on active duty vessel',
    },
    {
      id: 3,
      title: 'Training Exercise',
      location: 'Panama City, FL',
      depth: '60 FT',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Advanced diving techniques with new recruits',
    },
    {
      id: 4,
      title: 'EOD Support Mission',
      location: 'Classified Location',
      depth: '200 FT',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Underwater ordnance disposal and reconnaissance',
    },
    {
      id: 5,
      title: 'Dive Locker Brotherhood',
      location: 'USS Enterprise',
      depth: 'Surface',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Post-dive camaraderie and gear maintenance',
    },
    {
      id: 6,
      title: 'Saturation Diving',
      location: 'Atlantic Ocean',
      depth: '400 FT',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Extended deep-water operations using saturation techniques',
    },
  ];

  return (
    <section id="missions" className="py-20 bg-dive-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            MISSION HIGHLIGHTS
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Documenting the depths of service – where courage meets the abyss.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-deep-navy/50 backdrop-blur-sm border border-coral-blue/30 hover:border-oxygen-yellow/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(mission)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <SafeIcon icon={FiCamera} className="h-6 w-6 text-oxygen-yellow" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-orbitron text-xs text-coral-blue bg-coral-blue/20 px-2 py-1 rounded-full">
                      {mission.depth}
                    </span>
                    <span className="font-orbitron text-xs text-wet-gray">
                      {mission.location}
                    </span>
                  </div>
                  <h3 className="font-bebas text-lg text-white mb-1">
                    {mission.title}
                  </h3>
                  <p className="font-inter text-sm text-wet-gray">
                    {mission.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-deep-navy rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bebas text-2xl text-oxygen-yellow">
                      {selectedImage.title}
                    </h3>
                    <span className="font-orbitron text-sm text-coral-blue bg-coral-blue/20 px-3 py-1 rounded-full">
                      {selectedImage.depth}
                    </span>
                  </div>
                  <p className="font-inter text-wet-gray mb-2">
                    {selectedImage.location}
                  </p>
                  <p className="font-inter text-white">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Missions;