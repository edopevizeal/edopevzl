import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1800

    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 300)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <motion.div
      className="loader flex-col gap-8"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Portfolio</p>
        <h1 className="text-white text-2xl font-light tracking-tight">Edope/Vizeal</h1>
      </motion.div>

      <div className="w-32 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      <p className="text-white/20 text-xs font-light tabular-nums">{progress}</p>
    </motion.div>
  )
}
