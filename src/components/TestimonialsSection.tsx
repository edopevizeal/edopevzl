import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote: "Alex completely transformed our brand film. The pacing, color, the whole feel — it was beyond what we imagined. Every frame had intention.",
    name: "Sarah Chen",
    role: "Creative Director, LUMIS Studio",
    initials: "SC",
  },
  {
    quote: "Our YouTube channel went from 10k to 180k subscribers after working with Alex. The editing style he brought was exactly what we needed to break through.",
    name: "Marcus Webb",
    role: "Content Creator & Entrepreneur",
    initials: "MW",
  },
  {
    quote: "The VFX work was seamless. Our commercial looked like it had a million-dollar budget. Alex delivers premium results every single time.",
    name: "Priya Sharma",
    role: "Marketing Lead, Apex Brands",
    initials: "PS",
  },
  {
    quote: "I've worked with many editors. Alex is the only one who truly understands story first, tools second. That's the difference.",
    name: "James Okafor",
    role: "Documentary Filmmaker",
    initials: "JO",
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden">
      <div className="ambient-glow w-[400px] h-[400px] bg-white/[0.02] top-1/2 -translate-y-1/2 right-0 light-leak" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-label text-white/30 mb-6"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="heading-section text-white"
          >
            What clients{' '}
            <span className="gradient-text-silver">say</span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="testimonial-card relative">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-white/5 text-8xl font-serif leading-none select-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote
                  className="text-white/75 text-xl font-light leading-relaxed mb-10 italic"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white/60 text-xs font-medium">{testimonials[current].initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{testimonials[current].name}</p>
                    <p className="text-white/35 text-xs mt-0.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
