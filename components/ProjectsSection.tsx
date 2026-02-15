'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  link?: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ANSSI Security Alert Monitor',
    description: 'Outil Python qui traque les failles de sécurité en temps réel. Analyse des alertes RSS via l\'API MITRE avec notifications email automatiques.',
    technologies: ['Python', 'MITRE API', 'Email Automation', 'RSS'],
    image: '🛡️',
    github: 'https://github.com/Said78z',
    color: 'border-neon-red',
  },
  {
    id: 2,
    title: 'Medicapps',
    description: 'Application Flutter/Supabase pour signaler les ruptures de stock de médicaments via QR code. Sauve des vies en l\'on parle.',
    technologies: ['Flutter', 'Supabase', 'QR Codes', 'Firebase'],
    image: '💊',
    github: 'https://github.com/Said78z',
    color: 'border-neon-green',
  },
  {
    id: 3,
    title: 'Hackathon IBM Watsonx',
    description: 'Prédire les pannes industrielles avec de l\'IA. Modèle de maintenance prédictive avec AutoAI. Spoiler : on a gagné.',
    technologies: ['IBM Watson', 'AutoAI', 'IoT', 'OpenScale'],
    image: '🤖',
    github: 'https://github.com/Said78z',
    color: 'border-neon-blue',
  },
  {
    id: 4,
    title: 'RootMe Challenges',
    description: 'Je casse des systèmes pour mieux les protéger. Éthiquement, bien sûr. CTF, pentesting, challenges web — le terrain de jeu idéal.',
    technologies: ['CTF', 'Pentesting', 'Web Exploits', 'Security'],
    image: '🔓',
    github: 'https://rootme.org',
    color: 'border-neon-red',
  },
  {
    id: 5,
    title: 'Pokemon Simulator',
    description: 'Un simulateur Pokémon pour montrer que j\'automatise même le fun. Preuve que la technique, ça peut être cool.',
    technologies: ['Python', 'Git', 'Automation', 'Game Logic'],
    image: '🎮',
    github: 'https://github.com/Said78z',
    color: 'border-neon-green',
  },
  {
    id: 6,
    title: 'Infrastructure DILA',
    description: 'J\'ai aidé le gouvernement français à moderniser ses déploiements. Terraform, Kubernetes, CI/CD flava. Votre tour ?',
    technologies: ['Terraform', 'Kubernetes', 'CI/CD', 'Cloud'],
    image: '☁️',
    github: 'https://github.com/Said78z',
    color: 'border-neon-blue',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative">
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
            MES ARMES POUR VOTRE PROCHAIN DÉFI
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber rounded"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`card-cyber ${project.color} bg-dark-card border-2 p-6 rounded-lg cursor-pointer`}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{project.image}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-neon-blue mb-3 font-bebas">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 font-fira text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-bg border-1 border-neon-green text-neon-green text-xs rounded-full font-fira"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-neon-blue hover:text-neon-green text-2xl"
                  >
                    <FaGithub />
                  </motion.a>
                )}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-neon-green hover:text-neon-blue text-2xl"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
