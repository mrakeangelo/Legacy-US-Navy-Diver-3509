import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiEdit, FiUpload, FiUsers, FiSettings, FiLogOut, FiHome } = FiIcons;

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('timeline');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in real app, use proper auth)
    if (credentials.username === 'admin' && credentials.password === 'divedeep') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: FiEdit },
    { id: 'media', label: 'Media', icon: FiUpload },
    { id: 'tributes', label: 'Tributes', icon: FiUsers },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="h-12 w-12 text-oxygen-yellow mx-auto mb-4" />
            <h2 className="font-orbitron text-2xl text-oxygen-yellow mb-2">
              Admin Access
            </h2>
            <p className="font-inter text-wet-gray">
              Enter credentials to manage the tribute site
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-inter text-sm text-wet-gray mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block font-inter text-sm text-wet-gray mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full bg-deep-navy/50 border border-coral-blue/30 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-oxygen-yellow/50 transition-colors"
                placeholder="Enter password"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-coral-blue hover:bg-coral-blue/80 text-white py-3 px-6 rounded-lg font-inter font-medium transition-colors duration-300"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="#/"
              className="font-inter text-coral-blue hover:text-oxygen-yellow transition-colors text-sm flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiHome} className="h-4 w-4" />
              <span>Back to Site</span>
            </a>
          </div>

          <div className="mt-8 p-4 bg-coral-blue/20 rounded-lg">
            <p className="font-inter text-xs text-wet-gray text-center">
              Demo credentials: admin / divedeep
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-navy">
      {/* Header */}
      <div className="bg-dive-black/50 backdrop-blur-sm border-b border-coral-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="h-8 w-8 text-oxygen-yellow" />
              <span className="font-orbitron font-bold text-lg text-oxygen-yellow">
                Admin Panel
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#/"
                className="font-inter text-coral-blue hover:text-oxygen-yellow transition-colors text-sm flex items-center space-x-2"
              >
                <SafeIcon icon={FiHome} className="h-4 w-4" />
                <span>View Site</span>
              </a>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="font-inter text-coral-blue hover:text-oxygen-yellow transition-colors text-sm flex items-center space-x-2"
              >
                <SafeIcon icon={FiLogOut} className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-coral-blue text-white'
                  : 'text-wet-gray hover:text-white'
              }`}
            >
              <SafeIcon icon={tab.icon} className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-dive-black/50 backdrop-blur-sm border border-coral-blue/30 rounded-xl p-8">
          {activeTab === 'timeline' && (
            <div>
              <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
                Manage Timeline
              </h3>
              <p className="font-inter text-wet-gray mb-4">
                Add, edit, or remove timeline events from the career journey.
              </p>
              <div className="bg-deep-navy/50 rounded-lg p-4">
                <p className="font-inter text-sm text-coral-blue">
                  Timeline management interface would be implemented here with full CRUD operations.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div>
              <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
                Media Management
              </h3>
              <p className="font-inter text-wet-gray mb-4">
                Upload and manage photos, videos, and other media assets.
              </p>
              <div className="bg-deep-navy/50 rounded-lg p-4">
                <p className="font-inter text-sm text-coral-blue">
                  Media upload and management interface would be implemented here.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tributes' && (
            <div>
              <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
                Moderate Tributes
              </h3>
              <p className="font-inter text-wet-gray mb-4">
                Review and moderate visitor tributes and guestbook entries.
              </p>
              <div className="bg-deep-navy/50 rounded-lg p-4">
                <p className="font-inter text-sm text-coral-blue">
                  Tribute moderation interface would be implemented here.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h3 className="font-orbitron text-2xl text-oxygen-yellow mb-6">
                Site Settings
              </h3>
              <p className="font-inter text-wet-gray mb-4">
                Configure site-wide settings and preferences.
              </p>
              <div className="bg-deep-navy/50 rounded-lg p-4">
                <p className="font-inter text-sm text-coral-blue">
                  Site configuration interface would be implemented here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;