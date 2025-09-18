'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: '💰 料金体系はどうなっていますか？',
    answer: 'プロジェクトの規模に応じた柔軟な料金体系をご用意しています。スタートアップ向けのライトプランから、エンタープライズ向けのフルサポートプランまで、お客様のニーズに合わせてカスタマイズ可能です。まずは無料相談でお見積りをお出しします！'
  },
  {
    question: '📅 プロジェクトの納期はどれくらいですか？',
    answer: 'プロジェクトの内容によって異なりますが、小規模なものであれば1-2週間、大規模なものでも1-3ヶ月程度で完成させることが可能です。Z世代ならではのスピード感を大切にしており、他社よりも50%早い納期を実現しています✨'
  },
  {
    question: '🤔 どんな業界に対応していますか？',
    answer: 'IT、ファッション、エンタメ、教育、飲食、美容など、あらゆる業界に対応しています。特にZ世代をターゲットとする企業様には、同世代ならではの深い理解とインサイトで、より効果的なソリューションをご提供できます🎯'
  },
  {
    question: '🛠️ アフターサポートはありますか？',
    answer: 'はい！納品後も充実したアフターサポートをご提供します。24/7のチャットサポート、定期的なメンテナンス、機能追加やアップデートなど、お客様の成功を継続的にサポートします。安心してお任せください💪'
  },
  {
    question: '📱 モバイル対応は含まれますか？',
    answer: 'もちろんです！現代において、モバイルファーストは必須です。レスポンシブデザインはもちろん、PWA（Progressive Web App）やネイティブアプリ開発にも対応しています。Z世代の多くがモバイルユーザーなので、この点は特に力を入れています📱'
  },
  {
    question: '🎨 デザインの修正は何回まで可能ですか？',
    answer: 'お客様にご満足いただけるまで、回数制限なく修正対応いたします！私たちは「完璧になるまで」がモットー。ただし、大幅な仕様変更の場合は別途ご相談させていただく場合があります。まずはお気軽にご要望をお聞かせください🎨'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pastel-teal/30 via-pastel-green/30 to-pastel-yellow/30"></div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            よくある
            <span className="bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
              質問
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            お客様からよくいただく質問をまとめました。他にご不明な点があれば、お気軽にお問い合わせください 💬
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left focus:outline-none"
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="inline-block"
                    >
                      {openIndex === index ? '🔼' : '🔽'}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-2xl">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <motion.div
            className="inline-block bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-4xl shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              他にも質問がありますか？ 🤷‍♀️
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              どんな小さな疑問でも大歓迎！お気軽にお問い合わせください
            </p>
            <motion.button
              className="bg-white text-teal-600 px-12 py-4 rounded-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お問い合わせする 📧
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-10 text-3xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ❓
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-2xl"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        💡
      </motion.div>
    </section>
  )
}