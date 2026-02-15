'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-neon-blue opacity-20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* Glitch Effect Title */}
        <motion.div variants={item} className="mb-6">
          <h1
            className="text-7xl md:text-8xl font-bold font-bebas text-neon-blue mb-4 glitch"
            data-text="SAÏD KACI"
          >
            SAÏD KACI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={item} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-neon-green font-bebas mb-4">
            L'INGÉNIEUR QUI DÉTRUIT LES LIMITES
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div variants={item} className="mb-12">
          <p className="text-lg md:text-xl text-gray-300 font-fira leading-relaxed max-w-2xl mx-auto">
            Apprenti SysOps @DILA | Hacker Éthique | Builder Web 3 (en devenir)
          </p>
          <p className="text-md md:text-lg text-neon-blue font-fira mt-4">
            Dispo pour un stage de fou qui déchire (juin 2026+)
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-red text-white font-bold rounded-lg border-2 border-neon-red hover:shadow-neon-red transition-all text-lg font-fira"
          >
            ME RECRUTER
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-neon-blue font-bold rounded-lg border-2 border-neon-blue hover:bg-neon-blue hover:text-dark-bg hover:shadow-neon-blue transition-all text-lg font-fira"
          >
            VOIR MES HACKS
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <a href="#projects" className="text-neon-green text-3xl hover:text-neon-blue transition-colors">
            <FaChevronDown />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
