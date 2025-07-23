import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPenTool, FiSend, FiUser, FiHeart, FiStar } = FiIcons;

const Guestbook = () => {
  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    message: '',
    relationship: '',
  });

  const [tributes, setTributes] = useState([
    {
      id: 1,
      name: 'Admiral Rebecca Hayes',
      rank: 'US Navy (Ret.)',
      relationship: 'Former CO',
      message: 'Master Chief Tate exemplified the finest traditions of the Navy Diving community. His dedication to excellence and unwavering commitment to his shipmates made him a legend in our ranks.',
      date: '2024-01-15',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Tate',
      rank: 'Navy Spouse',
      relationship: 'Wife',
      message: 'To my husband, my hero, my anchor. You dove into the depths of the ocean and brought back stories that filled our home with wonder. Thank you for 19 years of service and a lifetime of love.',
      date: '2024-01-14',
      rating: 5,
    },
    {
      id: 3,
      name: 'Petty Officer James Mitchell',
      rank: 'US Navy',
      relationship: 'Former Student',
      message: 'Chief Tate saved my life during a training exercise gone wrong. His calm voice and expert guidance got me safely to the surface. I owe my career to his mentorship.',
      date: '2024-01-13',
      rating: 5,
    },
    {
      id: 4,
      name: 'Dr. Patricia Coleman',
      rank: 'Civilian',
      relationship: 'Family Friend',
      message: 'Marcus was not just a decorated diver, but a wonderful father and friend. His stories of underwater adventures captivated our children and inspired a new generation.',
      date: '2024-01-12',
      rating: 5,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      const newTribute = {
        id: tributes.length + 1,
        ...formData,
        date: new Date().toISOString().split('T')[0],
        rating: 5,
      };
      setTributes([newTribute, ...tributes]);
      setFormData({
        name: '',
        rank: '',
        message: '',
        relationship: '',
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-b from-deep-navy to-dive-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            DIVE SALUTE WALL
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Leave your tribute to honor a life of service, courage, and dedication to the deep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tribute Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiPenTool} className="h-8 w-8 text-oxygen-yellow mr-3" />
              <h3 className="font-orbitron text-2xl text-oxygen-yellow">
                Leave a Tribute
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-inter text-sm text-wet-gray mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block font-inter text-sm text-wet-gray mb-2">
                  Rank/Title
                </label>
                <input
                  type="text"
                  name="rank"
                  value={formData.rank}
                  onChange={handleInputChange}
                  className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors"
                  placeholder="e.g., US Navy, Civilian, etc."
                />
              </div>

              <div>
                <label className="block font-inter text-sm text-wet-gray mb-2">
                  Relationship
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors"
                >
                  <option value="">Select relationship</option>
                  <option value="Dive Buddy">Dive Buddy</option>
                  <option value="Commanding Officer">Commanding Officer</option>
                  <option value="Student">Student</option>
                  <option value="Family Member">Family Member</option>
                  <option value="Friend">Friend</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm text-wet-gray mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors resize-none"
                  placeholder="Share your tribute, memory, or message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coral-blue hover:bg-coral-blue/80 text-white py-3 px-6 rounded-lg font-inter font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSend} className="h-5 w-5" />
                <span>Submit Tribute</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Tributes Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiHeart} className="h-8 w-8 text-oxygen-yellow mr-3" />
              <h3 className="font-orbitron text-2xl text-oxygen-yellow">
                Tributes ({tributes.length})
              </h3>
            </div>

            <div className="max-h-[600px] overflow-y-auto space-y-4 pr-2">
              {tributes.map((tribute, index) => (
                <motion.div
                  key={tribute.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-lg p-6 hover:border-oxygen-yellow/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-coral-blue to-oxygen-yellow rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiUser} className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-orbitron text-white text-sm">
                          {tribute.name}
                        </h4>
                        <p className="font-inter text-xs text-coral-blue">
                          {tribute.rank}
                        </p>
                        {tribute.relationship && (
                          <p className="font-inter text-xs text-wet-gray">
                            {tribute.relationship}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(tribute.rating)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className="h-3 w-3 text-oxygen-yellow fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="font-inter text-sm text-wet-gray leading-relaxed mb-3">
                    {tribute.message}
                  </p>

                  <p className="font-inter text-xs text-coral-blue">
                    {new Date(tribute.date).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;