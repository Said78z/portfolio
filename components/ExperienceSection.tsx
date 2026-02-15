'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaCode, FaGraduationCap } from 'react-icons/fa'

interface Experience {
  period: string
  title: string
  company?: string
  description: string
  icon: React.ReactNode
  color: string
}

const experiences: Experience[] = [
  {
    period: '2024 – Présent',
    title: 'Apprenti SysOps',
    company: '@DILA (Gouvernement Français)',
    description:
      'Gestion d\'infras cloud, automatisation avec Terraform/Kubernetes, monitoring Grafana/Prometheus, mise en place de CI/CD. Je fais tourner des trucs sérieux pour l\'État. Pas de pression.',
    icon: <FaBuilding className="text-3xl" />,
    color: 'border-neon-blue',
  },
  {
    period: '2022',
    title: 'Stage DevOps',
    company: '@Centre Informatique Douanier',
    description:
      'Jenkins, JMeter, Apache Tomcat… J\'ai appris à casser des trucs avant de les réparer. Méthodologie Agile, intégration continue, et une bonne dose de café.',
    icon: <FaCode className="text-3xl" />,
    color: 'border-neon-green',
  },
  {
    period: '2020 – Présent',
    title: 'Tuteur en Maths/Info',
    description:
      'J\'explique les trucs compliqués à des ados. Donc je saurai vous expliquer mes projets. Pédagogie, adaptabilité, et beaucoup de patience.',
    icon: <FaGraduationCap className="text-3xl" />,
    color: 'border-neon-red',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative">
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
          <h2 className="text-5xl md:text-6xl font-bold font-bebas text-neon-green mb-4">
            MON PARCOURS
          </h2>
          <p className="text-neon-blue font-fira text-lg">
            D'apprenti à futur CTO (pourquoi pas ?)
          </p>
          <div className="w-24 h-1 bg-gradient-cyber rounded mt-4"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-dark-card border-2 rounded-lg p-6 md:p-8 cursor-pointer transform transition-all ${exp.color}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="text-neon-blue md:w-20 flex-shrink-0">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Period & Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-neon-red font-bold font-fira text-sm mb-2">
                      {exp.period}
                    </p>
                    <h3 className="text-3xl font-bold text-neon-blue mb-2 font-bebas">
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <p className="text-neon-green font-fira font-bold mb-4">
                        {exp.company}
                      </p>
                    )}
                  </motion.div>

                  {/* Description */}
                  <p className="text-gray-300 font-fira text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-dark-card border-2 border-neon-blue rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold text-neon-blue mb-6 font-bebas">
            FORMATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-neon-green font-bold font-fira mb-2">2024–2027</p>
              <h4 className="text-2xl font-bold text-neon-blue mb-2 font-bebas">
                ESILV
              </h4>
              <p className="text-gray-300 font-fira">
                M1 Cyber & Cloud | Spécialisation en sécurité et cloud computing
              </p>
            </div>
            <div>
              <p className="text-neon-red font-bold font-fira mb-2">2022–2024</p>
              <h4 className="text-2xl font-bold text-neon-blue mb-2 font-bebas">
                IUT Paris Descartes
              </h4>
              <p className="text-gray-300 font-fira">
                BUT Informatique | Tronc commun + spécialisation DevOps
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-neon-blue">
            <p className="text-neon-green font-bold font-fira mb-4">
              Certifications & Compétences
            </p>
            <div className="flex flex-wrap gap-3">
              {['TOEIC 800', 'Kubernetes Basics', 'Terraform', 'Docker', 'CI/CD'].map(
                (cert) => (
                  <motion.span
                    key={cert}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-neon-blue text-dark-bg font-bold rounded-full text-sm font-fira cursor-pointer"
                  >
                    {cert}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
