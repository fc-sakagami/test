'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: '爆速レスポンス',
    description: 'Z世代のスピード感に合わせた、迅速な対応とスピーディーな納期を実現',
    stats: '24時間以内',
    bgGradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🎯',
    title: 'ピンポイント戦略',
    description: 'データ分析に基づいた精密なターゲティングで、確実な成果を約束',
    stats: '97%成功率',
    bgGradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🌈',
    title: 'オンリーワンデザイン',
    description: 'あなただけの個性を活かした、他にはないオリジナリティ溢れるクリエイティブ',
    stats: '100%オリジナル',
    bgGradient: 'from-green-400 to-blue-500'
  },
  {
    icon: '🤝',
    title: '寄り添うサポート',
    description: '24/7体制で、あなたのプロジェクトを最後まで責任を持ってサポート',
    stats: '365日対応',
    bgGradient: 'from-teal-400 to-cyan-500'
  },
  {
    icon: '📈',
    title: '成長志向',
    description: '継続的な改善とスケールアップで、長期的な成功をお約束',
    stats: '+200%成長',
    bgGradient: 'from-indigo-400 to-purple-500'
  },
  {
    icon: '💡',
    title: 'イノベーション',
    description: '最新トレンドと革新的なアイデアで、業界をリードするソリューション',
    stats: '最新技術',
    bgGradient: 'from-pink-400 to-red-500'
  }
]

export default function Features() {
  return (
    <section id="特徴" className="py-32 bg-gradient-to-br from-pastel-purple/50 via-pastel-pink/50 to-pastel-blue/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            選ばれる
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              理由
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            なぜ多くの企業が私たちを選ぶのか？その秘密をご紹介します 🔥
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 80, opacity: 0, rotateY: 15 }}
              whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                rotateX: 5
              }}
              className="bg-white/90 backdrop-blur-sm rounded-4xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/60 relative overflow-hidden group"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <motion.div
                className="text-5xl mb-6 text-center relative z-10"
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -10, 10, 0],
                  y: -5
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  duration: 0.6
                }}
              >
                {feature.icon}
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-center mb-6 text-sm">
                  {feature.description}
                </p>

                <motion.div
                  className={`text-center py-3 px-6 bg-gradient-to-r ${feature.bgGradient} text-white rounded-3xl font-bold text-sm shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.stats}
                </motion.div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block bg-white/90 backdrop-blur-sm rounded-4xl p-8 shadow-2xl border border-white/60"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              まだ迷っている方へ 🤔
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              無料相談で、あなたのプロジェクトに最適なソリューションをご提案します
            </p>
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              無料相談を予約 📅
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 text-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-3xl"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🎉
      </motion.div>
    </section>
  )
}