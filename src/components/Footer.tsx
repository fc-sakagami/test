'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'TikTok', icon: '🎵', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
  ]

  const quickLinks = [
    { name: 'サービス', href: '#サービス' },
    { name: '特徴', href: '#特徴' },
    { name: 'FAQ', href: '#faq' },
    { name: 'プライバシーポリシー', href: '#' },
  ]

  const contactInfo = [
    { label: '📧 Email', value: 'hello@cutecorp.com' },
    { label: '📞 Phone', value: '+81-3-1234-5678' },
    { label: '📍 Address', value: '東京都渋谷区xxx-xxx' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                className="text-3xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
              >
                🌟 CuteCorP
              </motion.div>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                Z世代のクリエイティビティで、あなたのビジネスを次のレベルへ。
                <br />
                未来を創る、あなたのパートナーとして。✨
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-white/60 text-sm">{info.label}</span>
                    <span className="text-white font-medium">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">クイックリンク</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 block"
                      whileHover={{ x: 5, color: '#ffffff' }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">SNSでつながろう</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      backgroundColor: 'rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="text-xs text-white/80">{social.name}</div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-3xl text-center"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-sm mb-3">📬 ニュースレター</div>
                <div className="text-xs text-white/90 mb-4">最新情報をお届け</div>
                <motion.button
                  className="bg-white text-purple-600 px-6 py-2 rounded-2xl text-sm font-bold w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  登録する ✉️
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 CuteCorP. All rights reserved. Made with 💖 by Gen Z
              </div>
              <div className="flex space-x-6 text-sm">
                <motion.a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Terms
                </motion.a>
                <motion.a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Privacy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Cookies
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-20 right-10 text-2xl"
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
          💫
        </motion.div>

        <motion.div
          className="absolute top-10 left-10 text-xl"
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🌙
        </motion.div>
      </div>
    </footer>
  )
}