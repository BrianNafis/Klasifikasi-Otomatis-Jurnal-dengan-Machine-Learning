import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const sampleJournals = [
    {
      title: "Analisis Reservoir Migas dengan Machine Learning",
      category: "Reservoir Engineering",
      date: "2024-12-16"
    },
    {
      title: "Optimasi Produksi Sumur Minyak Menggunakan AI",
      category: "Production Engineering", 
      date: "2024-12-10"
    },
    {
      title: "Studi Geologi Regional Cekungan Sumatera",
      category: "Geology",
      date: "2024-12-05"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sample Journals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Contoh Jurnal Terklasifikasi</h3>
          <p className="text-gray-400">Beberapa jurnal yang telah berhasil diklasifikasikan oleh sistem</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sampleJournals.map((journal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs bg-ppsdm-blue rounded-full">
                  {journal.category}
                </span>
                <span className="text-xs text-gray-400">{journal.date}</span>
              </div>
              <h4 className="font-semibold text-white mb-2 line-clamp-2">
                {journal.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-400">✓ Terklasifikasi</span>
                <button className="text-xs text-ppsdm-blue hover:text-blue-300 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Tentang PPSDM MIGAS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Profil Lembaga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visi & Misi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Struktur Organisasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pelatihan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sertifikasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Publikasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Jurnal Ilmiah</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buku & Modul</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laporan Penelitian</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jl. Sorogo No. 1, Cepu</li>
              <li>Blora, Jawa Tengah 58315</li>
              <li>Tel: (0296) 421070</li>
              <li>Email: info@ppsdm.migas.go.id</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Copyright © 2025 PPSDM MIGAS - All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
