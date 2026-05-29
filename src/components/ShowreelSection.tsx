import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function ShowreelSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [playing, setPlaying] = useState(false)

  return (
    <section id="showreel" ref={ref} className="section-padding relative overflow-hidden bg-black">
      {/* Ambient glows */}
      <div className="ambient-glow w-[800px] h-[400px] bg-white/[0.025] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 light-leak" />
      <div className="ambient-glow w-[300px] h-[300px] bg-white/[0.02] top-10 left-10 light-leak" style={{ animationDelay: '2s' }} />
      <div className="ambient-glow w-[250px] h-[250px] bg-white/[0.015] bottom-10 right-10 light-leak" style={{ animationDelay: '4s' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-label text-white/30 mb-6"
          >
            Showreel
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="heading-section gradient-text"
          >
            Two years.
            <br />
            One reel.
          </motion.h2>
        </div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
            {/* Cinematic stripes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px opacity-5"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
                }}
              />
            ))}
          </div>

          {/* Film grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Play button */}
          <AnimatePresence>
            {!playing && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play showreel"
              >
                {/* Pulsing rings */}
                <div className="relative">
                  <div className="play-ring absolute inset-0 w-24 h-24 rounded-full border border-white/20" />
                  <div className="play-ring absolute inset-0 w-24 h-24 rounded-full border border-white/10" style={{ animationDelay: '0.7s' }} />

                  <div className="relative w-24 h-24 rounded-full glass-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Playing state */}
          <AnimatePresence>
            {playing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/60"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-3">
                    <div className="flex gap-1">
                      <div className="w-1 h-5 bg-white/60 rounded-full" />
                      <div className="w-1 h-5 bg-white/60 rounded-full" />
                    </div>
                  </div>
                  <p className="text-white/40 text-xs">Showreel Playing</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm font-light">2024 Showreel</p>
                <p className="text-white/30 text-xs">3:47 · 4K</p>
              </div>
              <button
                onClick={() => setPlaying(!playing)}
                className="glass rounded-full px-4 py-2 text-white/50 text-xs hover:text-white transition-colors"
              >
                {playing ? 'Pause' : 'Play'}
              </button>
            </div>
            {/* Progress bar */}
            <div className="mt-3 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/40 rounded-full"
                initial={{ width: '0%' }}
                animate={playing ? { width: '45%' } : { width: '0%' }}
                transition={{ duration: playing ? 40 : 0 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats below video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-8"
        >
          {[
            { label: 'Frames Per Second', value: '60fps' },
            { label: 'Resolution', value: '4K HDR' },
            { label: 'Color Space', value: 'DCI-P3' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-white text-lg font-light tracking-tight">{stat.value}</p>
              <p className="text-white/25 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
