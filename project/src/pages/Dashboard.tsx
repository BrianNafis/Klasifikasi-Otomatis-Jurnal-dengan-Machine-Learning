import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, UserGroupIcon, ChartBarIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: DocumentTextIcon,
      label: 'Total Jurnal',
      value: '1,247',
      change: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: UserGroupIcon,
      label: 'Mentor Aktif',
      value: '24',
      change: '+3',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: ChartBarIcon,
      label: 'Akurasi Model',
      value: '94.2%',
      change: '+2.1%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: CloudArrowUpIcon,
      label: 'Upload Hari Ini',
      value: '18',
      change: '+6',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentJournals = [
    {
      title: "Machine Learning untuk Prediksi Reservoir",
      category: "Reservoir Engineering",
      author: "Dr. Ahmad Susanto",
      date: "2024-12-20",
      status: "Terklasifikasi"
    },
    {
      title: "Analisis Geologi Struktur Cekungan Jawa",
      category: "Geology",
      author: "Prof. Siti Nurhaliza",
      date: "2024-12-19",
      status: "Menunggu Review"
    },
    {
      title: "Optimasi Produksi dengan AI",
      category: "Production Engineering",
      author: "Ir. Budi Santoso",
      date: "2024-12-18",
      status: "Terklasifikasi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ppsdm-blue to-ppsdm-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sistem Klasifikasi Jurnal
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Klasifikasi Otomatis Jurnal PPSDM MIGAS dengan Machine Learning
            </p>
            {user ? (
              <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-2">Selamat Datang, {user.name}!</h3>
                <p className="opacity-90">Mulai upload jurnal atau lihat riwayat klasifikasi Anda</p>
              </div>
            ) : (
              <div className="space-x-4">
                <a
                  href="/login"
                  className="inline-block bg-white text-ppsdm-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ppsdm-blue transition-colors"
                >
                  Register
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Jurnal Baru</h3>
            <p className="text-gray-600 mb-6">
              Upload file PDF atau masukkan link jurnal untuk klasifikasi otomatis
            </p>
            <a
              href="/upload"
              className="inline-flex items-center px-6 py-3 bg-ppsdm-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CloudArrowUpIcon className="h-5 w-5 mr-2" />
              Mulai Upload
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lihat Riwayat</h3>
            <p className="text-gray-600 mb-6">
              Cek status klasifikasi dan riwayat jurnal yang telah diupload
            </p>
            <a
              href="/history"
              className="inline-flex items-center px-6 py-3 bg-ppsdm-green text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Lihat Riwayat
            </a>
          </motion.div>
        </div>

        {/* Recent Journals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Jurnal Terbaru</h3>
            <p className="text-gray-600">Jurnal yang baru saja diupload dan diklasifikasikan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penulis
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentJournals.map((journal, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{journal.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {journal.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {journal.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {journal.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        journal.status === 'Terklasifikasi' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {journal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;