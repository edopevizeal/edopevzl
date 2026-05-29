import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Short Form', 'Long Form', 'Commercial', 'VFX', 'Cinematic']

const projects = [
  {
    id: 1,
    title: 'Urban Pulse',
    subtitle: 'Brand Film',
    category: 'Commercial',
    color: '#1a1a2e',
    accent: '#16213e',
  },
  {
    id: 2,
    title: 'Midnight Drift',
    subtitle: 'Short Film Edit',
    category: 'Cinematic',
    color: '#0f0f1a',
    accent: '#1a1a2e',
  },
  {
    id: 3,
    title: 'Reel 2024',
    subtitle: 'Short Form Content',
    category: 'Short Form',
    color: '#111111',
    accent: '#1c1c1c',
  },
  {
    id: 4,
    title: 'Storm VFX',
    subtitle: 'Visual Effects',
    category: 'VFX',
    color: '#0d1117',
    accent: '#161b22',
  },
  {
    id: 5,
    title: 'Documentary: Earth',
    subtitle: 'Long Form',
    category: 'Long Form',
    color: '#0a0a0a',
    accent: '#141414',
  },
  {
    id: 6,
    title: 'Product Launch',
    subtitle: 'Commercial Edit',
    category: 'Commercial',
    color: '#151515',
    accent: '#1f1f1f',
  },
  {
    id: 7,
    title: 'Viral Moments',
    subtitle: 'TikTok / Reels',
    category: 'Short Form',
    color: '#0e0e0e',
    accent: '#181818',
  },
  {
    id: 8,
    title: 'Neon Dreams',
    subtitle: 'VFX Composite',
    category: 'VFX',
    color: '#0c0c1a',
    accent: '#14142e',
  },
]

const gradients = [
  'from-zinc-900 via-zinc-800 to-zinc-900',
  'from-slate-900 via-gray-800 to-slate-900',
  'from-neutral-900 via-stone-800 to-neutral-900',
  'from-gray-900 via-zinc-700 to-gray-900',
  'from-stone-900 via-neutral-800 to-stone-900',
]

function ProjectCard({ project, index, onPlay }: { project: typeof projects[0]; index: number; onPlay: (id: number) => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="portfolio-item group cursor-none"
      style={{ background: project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(project.id)}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-80`}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-full glass-light flex items-center justify-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <motion.div
          animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.35 }}
        >
          <span className="text-label text-white/40 text-xs mb-1 block">{project.category}</span>
          <h3 className="text-white font-light text-base tracking-tight">{project.title}</h3>
          <p className="text-white/40 text-xs mt-0.5">{project.subtitle}</p>
        </motion.div>
      </div>

      {/* Corner tag */}
      <div className="absolute top-4 right-4 z-10 opacity-60">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8l6 4-6 4V8z" fill="white" stroke="none" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [activeCategory, setActiveCategory] = useState('All')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const handlePlay = (id: number) => {
    setSelectedProject(id)
    setModalOpen(true)
  }

  return (
    <section id="portfolio" ref={ref} className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="ambient-glow w-[600px] h-[400px] bg-white/[0.015] -top-20 left-1/2 -translate-x-1/2 light-leak" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-label text-white/30 mb-6"
          >
            Portfolio
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0 justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="heading-section text-white max-w-sm"
            >
              Selected{' '}
              <span className="gradient-text-silver">Work</span>
            </motion.h2>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onPlay={handlePlay}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="video-modal-overlay"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl mx-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="glass rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/30 text-sm mb-2">Video Preview</p>
                  <p className="text-white/60 text-lg font-light">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-4 -right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
