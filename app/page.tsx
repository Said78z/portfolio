'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useRef, useState } from 'react'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import HackathonsSection from '@/components/HackathonsSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import NavBar from '@/components/NavBar'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        
        {/* Main Sections */}
        <HeroSection />
        <ProjectsSection />
        <HackathonsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-dark-card border-t-2 border-neon-blue py-8 px-6 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-gray-400 mb-4">
              © 2026 Saïd KACI. Tous les droits réservés. | Built with Next.js + Tailwind + ❤️
            </p>
            <div className="flex justify-center gap-6 text-2xl">
              <motion.a
                href="https://github.com/Said78z"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#39FF14' }}
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saïd-kaci-690337272/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#39FF14' }}
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:said.kaci.pro@gmail.com"
                whileHover={{ scale: 1.2, color: '#39FF14' }}
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
