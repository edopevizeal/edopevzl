import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useRef } from 'react'

const skills = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M8 12l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Video Editing',
    desc: 'Precision cuts and rhythmic storytelling that keep viewers engaged from first frame to last.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Color Grading',
    desc: 'Cinematic color science that transforms raw footage into visually stunning palettes.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Motion Graphics',
    desc: 'Dynamic animations and kinetic typography that elevate brand identity and narrative.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M12 22V12" strokeLinecap="round" />
        <path d="M3.29 7L12 12l8.71-5" strokeLinecap="round" />
      </svg>
    ),
    title: 'VFX Compositing',
    desc: 'Seamless visual effects integration that blurs the line between reality and imagination.',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="ambient-glow w-[500px] h-[500px] bg-white/[0.02] -top-40 right-0 light-leak" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-label text-white/30 mb-6"
        >
          About
        </motion.p>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left - Main text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="heading-section text-white mb-8"
            >
              Crafting{' '}
              <span className="gradient-text-silver">emotion</span>{' '}
              through every cut.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 leading-relaxed mb-6 text-base font-light"
            >
              With over five years of experience shaping narratives across platforms and formats,
              I bring a cinematic sensibility to every project — from 15-second reels to
              feature-length documentaries.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 leading-relaxed text-base font-light"
            >
              My process begins with story. Every technical decision — the cut, the grade,
              the composite — serves the emotion of the moment. I work with creators, brands,
              and studios who believe that great editing is invisible.
            </motion.p>
          </div>

          {/* Right - Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 h-full min-h-64 flex flex-col justify-between">
              <div>
                <p className="text-white/20 text-xs tracking-widest uppercase mb-4">Philosophy</p>
                <blockquote className="text-white/70 text-xl font-light leading-relaxed italic" style={{ letterSpacing: '-0.02em' }}>
                  "Great editing doesn't show itself. It takes you somewhere you didn't know you needed to go."
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-xs font-medium">AM</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Alex Monroe</p>
                  <p className="text-white/30 text-xs">Video Editor & VFX Compositor</p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/[0.03] border border-white/[0.06] float-slow" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.05] float-medium" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider mb-20" />

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i + 0.4 }}
              className="service-card group"
            >
              <div className="text-white/40 mb-5 group-hover:text-white/70 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-white text-base font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>
                {skill.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
