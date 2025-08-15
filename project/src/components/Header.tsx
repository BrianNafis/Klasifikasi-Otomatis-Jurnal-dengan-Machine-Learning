import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header className="bg-white shadow-lg border-b-4 border-ppsdm-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md text-gray-600 hover:text-ppsdm-blue hover:bg-gray-100 transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-3 ml-4">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop"
                alt="PPSDM MIGAS Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-ppsdm-blue">PPSDM MIGAS</h1>
                <p className="text-xs text-gray-600">Pusat Pengembangan SDM Migas</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center flex-1 mx-4">
              <h2 className="text-xl font-bold text-gray-800 hidden md:block">
                Sistem Klasifikasi Jurnal
              </h2>
              <p className="text-sm text-gray-600 hidden lg:block">
                Klasifikasi Otomatis Jurnal dengan Machine Learning
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;