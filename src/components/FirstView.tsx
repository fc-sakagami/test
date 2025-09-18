'use client'

import { motion } from 'framer-motion'

export default function FirstView() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue relative overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
            className="text-8xl mb-8"
          >
            ✨
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight"
          >
            未来を創る
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              あなたのパートナー
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Z世代のクリエイティビティを最大限に引き出すソリューションで、
            あなたのビジネスを次のレベルへ導きます 🚀
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-5 rounded-4xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              今すぐ始める ✨
            </motion.button>

            <motion.button
              className="bg-white/80 backdrop-blur-sm text-gray-800 px-12 py-5 rounded-4xl text-xl font-bold border-2 border-gray-200 hover:border-pink-300 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              詳しく見る 👀
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-20 left-10 text-4xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎨
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 text-5xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        💫
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-3xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🌈
      </motion.div>
    </section>
  )
}