import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, UserIcon, CogIcon, DocumentTextIcon, HomeIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', href: '/' },
    { icon: DocumentTextIcon, label: 'Upload Jurnal', href: '/upload' },
    { icon: DocumentTextIcon, label: 'Riwayat Jurnal', href: '/history' },
    ...(user?.role === 'admin' ? [
      { icon: CogIcon, label: 'Admin Panel', href: '/admin' },
    ] : []),
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop"
                  alt="PPSDM MIGAS"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">PPSDM MIGAS</h3>
                  <p className="text-xs text-gray-600">Menu Navigasi</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* User Info */}
            {user && (
              <div className="p-6 bg-gradient-to-r from-ppsdm-blue to-ppsdm-green text-white">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-sm opacity-90">{user.email}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-white bg-opacity-20 rounded-full mt-1">
                      {user.role === 'admin' ? 'Administrator' : 'User'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Menu Items */}
            <nav className="p-4">
              {user ? (
                <>
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-ppsdm-blue hover:text-white transition-colors group"
                        onClick={onClose}
                      >
                        <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{item.label}</span>
                      </motion.a>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full group"
                    >
                      <ArrowLeftOnRectangleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Log out</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <a
                    href="/login"
                    className="flex items-center space-x-3 p-3 rounded-lg text-ppsdm-blue hover:bg-ppsdm-blue hover:text-white transition-colors group"
                    onClick={onClose}
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Login</span>
                  </a>
                  <a
                    href="/register"
                    className="flex items-center space-x-3 p-3 rounded-lg text-ppsdm-green hover:bg-ppsdm-green hover:text-white transition-colors group"
                    onClick={onClose}
                  >
                    <UserIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Register</span>
                  </a>
                </div>
              )}
            </nav>

            {/* Demo Logins */}
            {!user && (
              <div className="p-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Demo Login</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      // Demo user login
                      window.location.href = '/login?demo=user';
                      onClose();
                    }}
                    className="w-full text-left p-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    Demo User Login
                  </button>
                  <button
                    onClick={() => {
                      // Demo admin login
                      window.location.href = '/login?demo=admin';
                      onClose();
                    }}
                    className="w-full text-left p-2 text-sm bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors"
                  >
                    Demo Admin Login
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
