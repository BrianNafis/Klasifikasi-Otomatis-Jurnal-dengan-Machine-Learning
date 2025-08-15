import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, user } = useAuth();

  useEffect(() => {
    // Check for demo login parameters
    const urlParams = new URLSearchParams(window.location.search);
    const demo = urlParams.get('demo');
    
    if (demo === 'admin') {
      setEmail('admin@ppsdm.migas.go.id');
      setPassword('admin123');
    } else if (demo === 'user') {
      setEmail('user@ppsdm.migas.go.id');
      setPassword('user123');
    }
  }, []);

  useEffect(() => {
    if (user) {
      window.location.href = '/';
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        window.location.href = '/';
      } else {
        setError('Email atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ppsdm-blue to-ppsdm-green flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
              alt="PPSDM MIGAS"
              className="h-16 w-16 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
            <p className="text-gray-600 mt-2">Masuk ke Sistem Klasifikasi Jurnal</p>
          </div>

          {/* Demo Buttons */}
          <div className="mb-6 space-y-2">
            <p className="text-sm text-gray-600 text-center">Demo Login:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setEmail('user@ppsdm.migas.go.id');
                  setPassword('user123');
                }}
                className="px-3 py-2 text-xs bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
              >
                Demo User
              </button>
              <button
                onClick={() => {
                  setEmail('admin@ppsdm.migas.go.id');
                  setPassword('admin123');
                }}
                className="px-3 py-2 text-xs bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors"
              >
                Demo Admin
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ppsdm-blue focus:border-transparent transition-colors"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ppsdm-blue focus:border-transparent transition-colors pr-12"
                  placeholder="Masukkan password Anda"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-ppsdm-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-ppsdm-blue focus:ring-offset-2 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memproses...' : 'Login'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{' '}
              <a href="/register" className="text-ppsdm-blue hover:text-blue-700 font-medium">
                Daftar di sini
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;