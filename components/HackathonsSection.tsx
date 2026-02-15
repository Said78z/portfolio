'use client'

import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'

interface Hackathon {
  year: string
  title: string
  description: string
  achievement: string
  color: string
}

const hackathons: Hackathon[] = [
  {
    year: '2025',
    title: 'IBM Watsonx Hackathon',
    description: '1er prix pour un modèle de maintenance prédictive. L\'IA, c\'est mon dada.',
    achievement: '🏆 1ER PRIX',
    color: 'bg-gradient-to-r from-neon-blue to-neon-green',
  },
  {
    year: '2024-2025',
    title: 'RootMe CTF Challenges',
    description: 'Top 10% sur les challenges Web & Crypto. Je casse, je répare, je sécurise.',
    achievement: '⭐ TOP 10%',
    color: 'bg-gradient-to-r from-neon-red to-neon-blue',
  },
  {
    year: '2024',
    title: 'Autres CTF & Challenges',
    description: 'Participation active à plusieurs CTF. Spécialité : Exploitation Web & Reverse Engineering.',
    achievement: '🎯 SPÉCIALISTE',
    color: 'bg-gradient-to-r from-neon-green to-neon-red',
  },
]

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="py-20 px-6 relative bg-dark-card bg-opacity-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-bebas text-neon-red mb-4">
            LÀ OÙ JE BRILLE
          </h2>
          <p className="text-neon-green font-fira text-lg">
            Hackathons & Défis Techniques
          </p>
          <div className="w-24 h-1 bg-gradient-danger rounded mt-4"></div>
        </motion.div>

        {/* Hackathons Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-green to-neon-red"></div>

          <div className="space-y-12">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-bg border-2 border-neon-blue rounded-lg p-6 hover:border-neon-green transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-neon-green font-bebas">
                        {hackathon.year}
                      </span>
                      <FaTrophy className="text-neon-red text-2xl" />
                    </div>

                    <h3 className="text-2xl font-bold text-neon-blue mb-2 font-bebas">
                      {hackathon.title}
                    </h3>

                    <p className="text-gray-300 mb-4 font-fira">
                      {hackathon.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-4 py-2 rounded-lg text-white font-bold font-fira text-sm ${hackathon.color}`}
                    >
                      {hackathon.achievement}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-12 h-12 absolute left-1/2 -translate-x-1/2 bg-dark-bg border-4 border-neon-blue rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-neon-green font-fira">
            Cherchez-vous un hacker éthique pour vos défis ? 🧠
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-4 px-8 py-3 bg-neon-green text-dark-bg font-bold rounded-lg hover:shadow-neon-green transition-all"
          >
            Discutons
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
