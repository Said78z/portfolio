'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add email service integration here (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contacts = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      label: 'Email',
      value: 'said.kaci.pro@gmail.com',
      link: 'mailto:said.kaci.pro@gmail.com',
      color: 'neon-red',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      label: 'LinkedIn',
      value: 'Saïd KACI',
      link: 'https://www.linkedin.com/in/saïd-kaci-690337272/',
      color: 'neon-blue',
    },
    {
      icon: <FaGithub className="text-3xl" />,
      label: 'GitHub',
      value: 'Said78z',
      link: 'https://github.com/Said78z',
      color: 'neon-green',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative">
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
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-bebas text-neon-red mb-4">
            PRÊT À TRAVAILLER AVEC MOI ?
          </h2>
          <p className="text-neon-green font-fira text-lg">
            (Spoiler : vous allez adorer)
          </p>
          <div className="w-24 h-1 bg-gradient-danger rounded mt-4 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-neon-blue mb-8 font-bebas">
              CONTACTEZ-MOI
            </h3>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`flex items-center gap-4 p-4 bg-dark-card border-2 border-${contact.color} rounded-lg hover:shadow-lg transition-all cursor-pointer`}
                >
                  <div className={`text-${contact.color}`}>{contact.icon}</div>
                  <div>
                    <p className={`text-${contact.color} font-bold font-fira text-sm`}>
                      {contact.label}
                    </p>
                    <p className="text-gray-300 font-fira">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* PS Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8 p-4 bg-dark-card border-2 border-neon-green rounded-lg"
            >
              <p className="text-neon-green font-fira text-sm">
                <span className="font-bold">PS :</span> Si vous me recrutez, vous bénéficiez d'un
                audit sécurité gratuit. C'est cadeau. 🎁
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card border-2 border-neon-blue rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-neon-blue mb-6 font-bebas">
              ENVOYEZ-MOI UN MESSAGE
            </h3>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-2xl text-neon-green font-bold mb-4">✓ Message reçu !</p>
                <p className="text-gray-300 font-fira">
                  Je vais vous répondre rapidement. Préparez-vous pour des trucs de fou. 🚀
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-neon-green font-fira font-bold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Comment tu t'appelles ?"
                    className="w-full bg-dark-bg border-2 border-neon-blue text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neon-green font-fira"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-neon-green font-fira font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ton@email.com"
                    className="w-full bg-dark-bg border-2 border-neon-blue text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neon-green font-fira"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-neon-green font-fira font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 'On a un projet de ouf pour toi'"
                    rows={5}
                    className="w-full bg-dark-bg border-2 border-neon-blue text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neon-green font-fira resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-neon-red text-white font-bold rounded-lg border-2 border-neon-red hover:shadow-neon-red transition-all text-lg font-fira"
                >
                  ENVOYER
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neon-blue font-fira mb-4">
            Vous êtes un recruteur passionné par les talents ?
          </p>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Je cherche un stage de 3 à 6 mois (juin 2026+) dans une équipe qui push des projets ambitieux.
            DevOps, Cloud, Cyber, Automatisation… Je suis votre homme. 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
