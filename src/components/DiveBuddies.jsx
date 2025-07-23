import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiHeart, FiStar } = FiIcons;

const DiveBuddies = () => {
  const testimonials = [
    {
      name: 'Chief Petty Officer Sarah "Bubbles" Martinez',
      role: 'Dive Buddy & Close Friend',
      message: 'Marcus was the kind of diver you wanted on every mission. Cool under pressure, always had your back, and never left anyone behind. We called him "Shark" because he moved through the water like he was born there.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: '250+ dives together',
    },
    {
      name: 'Commander James "Deep Six" Thompson',
      role: 'Commanding Officer',
      message: 'In 20 years of naval service, I have never met a more dedicated and skilled diver. Tate set the standard for excellence and trained dozens of divers who carry his legacy forward today.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: 'Served together 5 years',
    },
    {
      name: 'Petty Officer Mike "Anchor" Rodriguez',
      role: 'Student & Mentee',
      message: 'Chief Tate taught me that diving isn\'t just about going down and coming back up. It\'s about precision, respect for the environment, and absolute trust in your team. He saved my life more than once.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: 'Trained under Tate',
    },
    {
      name: 'Senior Chief Lisa "Pressure" Williams',
      role: 'Fellow Instructor',
      message: 'Marcus had this way of making the most dangerous situations feel manageable. His calm voice over the comm during emergency ascents became legendary. We all learned from watching him work.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: 'Instructor partnership',
    },
    {
      name: 'Petty Officer First Class Tony "Wrench" Garcia',
      role: 'Dive Team Member',
      message: 'The dive locker was never the same after Tate arrived. He brought discipline, but also brought heart. We weren\'t just a team – we were brothers. Still are.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: 'Dive team member',
    },
    {
      name: 'Master Chief Robert "Depth Charge" Johnson',
      role: 'Mentor & Friend',
      message: 'I watched Marcus grow from a eager young diver into one of the finest Master Divers I\'ve ever served with. His dedication to the craft and his shipmates was unmatched.',
      image: 'https://images.unsplash.com/photo-1559829175-0d6ec4b3b6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      depth: 'Career mentor',
    },
  ];

  return (
    <section id="dive-buddies" className="py-20 bg-gradient-to-b from-deep-navy to-dive-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            DIVE BUDDY WALL
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Messages from those who shared the depths – bonds forged in pressure, trust, and brotherhood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-6 hover:border-oxygen-yellow/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral-blue to-oxygen-yellow flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUsers} className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron text-lg text-oxygen-yellow mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="font-inter text-sm text-coral-blue mb-1">
                    {testimonial.role}
                  </p>
                  <p className="font-inter text-xs text-wet-gray">
                    {testimonial.depth}
                  </p>
                </div>
              </div>

              <blockquote className="font-inter text-wet-gray leading-relaxed italic border-l-4 border-oxygen-yellow/30 pl-4">
                "{testimonial.message}"
              </blockquote>

              <div className="flex justify-end mt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className="h-4 w-4 text-oxygen-yellow fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brotherhood Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 max-w-3xl mx-auto">
            <SafeIcon icon={FiHeart} className="h-12 w-12 text-oxygen-yellow mx-auto mb-4" />
            <blockquote className="font-inter text-xl text-wet-gray italic leading-relaxed mb-4">
              "In the depths, we learned that brotherhood isn't just about sharing the same uniform – 
              it's about sharing the same breath, the same trust, and the same commitment to bring everyone home."
            </blockquote>
            <p className="font-orbitron text-oxygen-yellow">
              — The Dive Locker Creed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiveBuddies;