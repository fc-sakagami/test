'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm shadow-lg shadow-pastel-purple/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            🌟 CuteCorP
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['サービス', '特徴', 'FAQ', 'お問い合わせ'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-3xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            無料体験
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}