'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🎨',
    title: 'クリエイティブデザイン',
    description: 'Z世代の感性を活かした最新トレンドのデザインで、あなたのブランドを際立たせます',
    color: 'from-pink-400 to-purple-500',
    bgColor: 'bg-pastel-pink'
  },
  {
    icon: '🚀',
    title: 'デジタルマーケティング',
    description: 'SNSネイティブな戦略で、ターゲット層にダイレクトにアプローチします',
    color: 'from-blue-400 to-teal-500',
    bgColor: 'bg-pastel-blue'
  },
  {
    icon: '💻',
    title: 'テック開発',
    description: '最新技術を駆使して、直感的で使いやすいプロダクトを開発します',
    color: 'from-green-400 to-blue-500',
    bgColor: 'bg-pastel-green'
  }
]

export default function Services() {
  return (
    <section id="サービス" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-yellow/30 to-pastel-teal/30"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            私たちの
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              サービス
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            あなたのビジョンを現実に変える、革新的なソリューションをお届けします ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${service.bgColor} rounded-4xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/50`}
            >
              <motion.div
                className="text-6xl mb-8 text-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-center mb-8">
                {service.description}
              </p>

              <motion.button
                className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                詳しく見る
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-16 py-6 rounded-4xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            全サービスを見る 🎯
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-10 text-4xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-3xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🎪
      </motion.div>
    </section>
  )
}