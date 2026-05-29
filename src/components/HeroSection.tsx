import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -20 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
}

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number; dx: number; dy: number }> = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.25 + 0.03,
        dx: (Math.random() - 0.5) * 0.3,
        dy: -(Math.random() * 0.3 + 0.05),
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
      })
      animId = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const titleWords = ['Editing', 'Stories', 'That', 'Feel', 'Cinematic']

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Ambient glows */}
      <div className="ambient-glow w-[600px] h-[600px] bg-white/[0.03] top-1/4 -left-40 light-leak" />
      <div className="ambient-glow w-[500px] h-[500px] bg-white/[0.02] bottom-1/4 -right-40 light-leak" style={{ animationDelay: '3s' }} />
      <div className="ambient-glow w-[300px] h-[300px] bg-white/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 light-leak" style={{ animationDelay: '1.5s' }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <span className="text-label text-white/30 tracking-widest">
            Short Form • Long Form • VFX Compositing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 perspective-1000"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="heading-hero gradient-text inline-block"
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="text-white/40 text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ letterSpacing: '-0.01em' }}
        >
          Premium storytelling through the lens of cinematic editing,
          motion design, and visual effects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button onClick={() => scrollTo('#portfolio')} className="btn-primary">
            View Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { num: '200+', label: 'Projects' },
            { num: '5+', label: 'Years' },
            { num: '50+', label: 'Clients' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-white text-2xl font-light tracking-tight">{stat.num}</p>
              <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="text-white/20 text-xs tracking-widest uppercase">Scroll</p>
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
