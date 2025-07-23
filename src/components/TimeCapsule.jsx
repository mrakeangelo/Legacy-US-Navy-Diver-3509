import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiMail, FiClock, FiUser, FiHeart } = FiIcons;

const TimeCapsule = () => {
  const [unlockedLetters, setUnlockedLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = [
    {
      id: 1,
      title: 'To Future Navy Divers',
      recipient: 'The Next Generation',
      unlockDate: '2024-01-01',
      isUnlocked: true,
      icon: FiUser,
      preview: 'The ocean doesn\'t care about your rank...',
      content: `To the young sailors who will follow in our dive boots,

The ocean doesn't care about your rank, your background, or your fears. It only responds to respect, preparation, and unwavering commitment to your dive buddy.

When you first descend into the depths, you'll think you're conquering the sea. But the truth is, the sea is teaching you. Every dive is a lesson in humility, precision, and trust.

Remember these words when the pressure builds and the darkness surrounds you:

• Your gear is your lifeline, but your training is your salvation
• Never dive alone, never leave a buddy behind
• The surface is always there, but the mission comes first
• Fear is natural, panic is deadly

I've seen divers who could handle 400 feet of pressure crack under the weight of their own doubt. I've also seen sailors who were terrified of deep water become legends in the dive locker.

The difference? They never stopped learning, never stopped respecting the environment, and never forgot that every dive is both a privilege and a responsibility.

Take care of each other down there. The Navy needs divers who can think under pressure, lead by example, and bring everyone home.

Fair winds and following seas,
Master Chief Marcus "Shark" Tate`,
    },
    {
      id: 2,
      title: 'To My Children',
      recipient: 'Emma & Jake',
      unlockDate: '2025-12-25',
      isUnlocked: false,
      icon: FiHeart,
      preview: 'When you read this, you\'ll understand why...',
      content: `My dearest Emma and Jake,

When you read this, you'll understand why Daddy spent so much time away from home, why I missed some of your games and school events, and why the ocean always seemed to call me back.

I want you to know that every moment underwater, I carried you both with me. In the deepest, darkest depths, your faces were my light. When the pressure built and the mission got tough, thinking of you gave me strength.

The Navy taught me about duty, honor, and service. But you two taught me about love, sacrifice, and what it truly means to have something worth fighting for.

I hope you're proud of the work I did, the lives I helped save, and the legacy I tried to build. But more than that, I hope you know that being your father was the greatest honor of my life.

Chase your dreams with the same passion I chased mine. Be brave, be kind, and always remember that home is not a place – it's the people who love you unconditionally.

All my love,
Dad`,
    },
    {
      id: 3,
      title: 'To My Younger Self',
      recipient: 'Seaman Recruit Tate',
      unlockDate: '2026-06-15',
      isUnlocked: false,
      icon: FiClock,
      preview: 'That scared kid stepping off the bus...',
      content: `Hey there, scared kid stepping off the bus at boot camp,

I know you're terrified. I know you're wondering if you made the right choice. I know you're homesick and questioning everything.

Here's what I wish I could tell you:

You're stronger than you think. That fear you feel? It's not weakness – it's awareness. The ocean will test you in ways you can't imagine, but you'll rise to meet every challenge.

Don't be afraid to ask questions. The senior divers who seem so intimidating? They were once exactly where you are now. They want you to succeed.

Study hard, train harder, and never let anyone tell you that you don't belong. You'll earn your place in the dive locker through dedication, not birthright.

The friendships you'll make will last a lifetime. The skills you'll learn will define you. The person you'll become will make everyone who loves you proud.

Trust the process. Trust your training. Trust yourself.

You've got this, kid.

Your future self,
Master Chief Tate`,
    },
  ];

  const handleUnlock = (letterId) => {
    if (!unlockedLetters.includes(letterId)) {
      setUnlockedLetters([...unlockedLetters, letterId]);
    }
  };

  return (
    <section className="py-20 bg-deep-navy relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-oxygen-yellow mb-4">
            TIME CAPSULE
          </h2>
          <p className="font-inter text-lg text-wet-gray max-w-2xl mx-auto">
            Messages sealed in the depths of time – wisdom preserved for future generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-6 hover:border-oxygen-yellow/50 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-oxygen-yellow to-coral-blue rounded-full flex items-center justify-center">
                    <SafeIcon icon={letter.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon 
                      icon={letter.isUnlocked || unlockedLetters.includes(letter.id) ? FiUnlock : FiLock} 
                      className="h-5 w-5 text-oxygen-yellow" 
                    />
                  </div>
                </div>

                <h3 className="font-orbitron text-lg text-oxygen-yellow mb-2">
                  {letter.title}
                </h3>
                
                <p className="font-inter text-sm text-coral-blue mb-3">
                  To: {letter.recipient}
                </p>

                <p className="font-inter text-xs text-wet-gray mb-4">
                  Unlock Date: {new Date(letter.unlockDate).toLocaleDateString()}
                </p>

                <div className="bg-deep-navy/50 rounded-lg p-4 mb-4">
                  <p className="font-inter text-sm text-wet-gray italic">
                    "{letter.preview}"
                  </p>
                </div>

                {letter.isUnlocked || unlockedLetters.includes(letter.id) ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLetter(letter)}
                    className="w-full bg-coral-blue hover:bg-coral-blue/80 text-white py-2 px-4 rounded-lg font-inter font-medium transition-colors duration-300"
                  >
                    Read Letter
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleUnlock(letter.id)}
                    className="w-full bg-oxygen-yellow hover:bg-oxygen-yellow/80 text-deep-navy py-2 px-4 rounded-lg font-inter font-medium transition-colors duration-300"
                  >
                    Unlock Letter
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Letter Modal */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-dive-black border border-coral-blue/30 rounded-xl p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-orbitron text-2xl text-oxygen-yellow">
                    {selectedLetter.title}
                  </h3>
                  <button
                    onClick={() => setSelectedLetter(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiMail} className="h-6 w-6 text-wet-gray" />
                  </button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-line font-inter text-wet-gray leading-relaxed">
                    {selectedLetter.content}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimeCapsule;