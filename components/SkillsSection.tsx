'use client'

import { motion } from 'framer-motion'

interface Skill {
  category: string
  items: string[]
  color: string
  level: number
}

const skills: Skill[] = [
  {
    category: 'Cloud/DevOps',
    items: ['Kubernetes', 'Terraform', 'Docker', 'Ansible', 'Outscale', 'AWS'],
    color: 'neon-blue',
    level: 4.5,
  },
  {
    category: 'CI/CD',
    items: ['GitLab CI', 'Jenkins', 'Argo CD', 'GitHub Actions', 'Deployment'],
    color: 'neon-green',
    level: 4.5,
  },
  {
    category: 'Monitoring',
    items: ['Grafana', 'Prometheus', 'SonarQube', 'ELK Stack', 'Observability'],
    color: 'neon-red',
    level: 4,
  },
  {
    category: 'Cybersécurité',
    items: ['CTF', 'Pentesting', 'MITRE', 'Analyse CVE', 'RootMe'],
    color: 'neon-blue',
    level: 3.5,
  },
  {
    category: 'Langages',
    items: ['Python', 'Bash', 'Java', 'C++', 'JavaScript', 'SQL'],
    color: 'neon-green',
    level: 4.5,
  },
  {
    category: 'Web 3',
    items: ['Solidity (débutant)', 'MetaMask', 'Smart Contracts', 'Blockchain Basics'],
    color: 'neon-red',
    level: 2,
  },
]

export default function SkillsSection() {
  const renderStars = (level: number) => {
    return '★'.repeat(Math.floor(level)) + (level % 1 ? '✦' : '')
  }

  return (
    <section id="skills" className="py-20 px-6 relative bg-dark-card bg-opacity-50">
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
          <h2 className="text-5xl md:text-6xl font-bold font-bebas text-neon-blue mb-4">
            MA BOÎTE À OUTILS
          </h2>
          <p className="text-neon-green font-fira text-lg">
            Pourquoi je suis un couteau suisse
          </p>
          <div className="w-24 h-1 bg-gradient-cyber rounded mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-dark-bg border-2 rounded-lg p-6 cursor-pointer border-${skill.color}`}
            >
              {/* Category with Icon */}
              <div className="mb-4">
                <h3 className={`text-2xl font-bold font-bebas mb-2 text-${skill.color}`}>
                  {skill.category}
                </h3>
                <div className={`text-${skill.color} text-lg font-fira tracking-wider`}>
                  {renderStars(skill.level)}
                </div>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 bg-dark-card border-2 border-${skill.color} text-${skill.color} rounded-full text-xs font-fira font-bold hover:bg-${skill.color} hover:text-dark-bg transition-all`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-dark-bg via-dark-card to-dark-bg border-2 border-neon-green rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-neon-green mb-4 font-bebas">
            EN 30 SECONDES
          </h3>
          <p className="text-gray-300 font-fira text-lg leading-relaxed">
            Je combine expertise technique (DevOps, IaC, monitoring, cybersécurité) et adaptabilité
            pour résoudre des défis complexes. De l'infrastructure cloud à l'automatisation de
            processus, en passant par le pentesting éthique — j'aime quand ça bouge vite et que ça
            tient la route. Mon objectif : contribuer à des projets innovants dans un environnement
            exigeant, tout en apprenant d'experts.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-neon-blue font-fira mb-6">
            Vous cherchez quelqu'un avec ce profil ? 🚀
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-neon-red text-white font-bold rounded-lg hover:shadow-neon-red transition-all font-fira"
          >
            Contactez-moi Maintenant
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
