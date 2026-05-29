import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'TikTok / Reels Editing',
    desc: 'Hook-driven short-form content optimized for virality, retention, and engagement.',
    tag: 'Short Form',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M17 12H7M12 7v10" strokeLinecap="round" />
      </svg>
    ),
    title: 'YouTube Editing',
    desc: 'Long-form storytelling with pacing that holds audiences through full watch-throughs.',
    tag: 'Long Form',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Commercial Editing',
    desc: 'High-impact ads that communicate brand value and drive measurable results.',
    tag: 'Commercial',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
      </svg>
    ),
    title: 'VFX Cleanup',
    desc: 'Seamless removal and replacement of unwanted elements, wires, rigs, and blemishes.',
    tag: 'VFX',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Motion Graphics',
    desc: 'Animated titles, lower thirds, infographics, and branded motion elements.',
    tag: 'Motion',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Color Grading',
    desc: 'Professional color science from LOG to cinematic — Rec.709, DCI-P3, and HDR workflows.',
    tag: 'Color',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden">
      <div className="ambient-glow w-[500px] h-[500px] bg-white/[0.02] top-1/2 -translate-y-1/2 -left-40 light-leak" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-label text-white/30 mb-6"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="heading-section text-white"
          >
            What I{' '}
            <span className="gradient-text-silver">deliver</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 font-light mt-5 max-w-md mx-auto text-base"
          >
            End-to-end post-production for creators, brands, and studios.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 + 0.2 }}
              className="service-card group relative"
              data-hover
            >
              {/* Tag */}
              <div className="absolute top-5 right-5 glass rounded-full px-3 py-1">
                <span className="text-white/30 text-xs">{service.tag}</span>
              </div>

              <div className="text-white/30 mb-5 group-hover:text-white/60 transition-colors duration-500">
                {service.icon}
              </div>

              <h3
                className="text-white text-base font-medium mb-3"
                style={{ letterSpacing: '-0.02em' }}
              >
                {service.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom line accent */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/25 text-sm font-light">
            Custom packages available — every project is unique.{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/50 hover:text-white transition-colors underline underline-offset-4"
            >
              Let's talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
