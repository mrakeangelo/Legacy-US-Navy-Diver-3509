import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Missions from './components/Missions';
import Reflection from './components/Reflection';
import Qualifications from './components/Qualifications';
import DiveBuddies from './components/DiveBuddies';
import Family from './components/Family';
import Metrics from './components/Metrics';
import TimeCapsule from './components/TimeCapsule';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import BubbleEffect from './components/BubbleEffect';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-deep-navy flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-oxygen-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-orbitron text-oxygen-yellow text-lg">Preparing to Dive...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-deep-navy text-white overflow-x-hidden">
        <BubbleEffect />
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={
            <>
              <Navigation />
              <Hero />
              <Timeline />
              <Missions />
              <Reflection />
              <Qualifications />
              <DiveBuddies />
              <Family />
              <Metrics />
              <TimeCapsule />
              <Guestbook />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;