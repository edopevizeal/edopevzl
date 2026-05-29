import { motion } from 'framer-motion'

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-white text-base font-light tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
              Alex Monroe
            </h3>
            <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
              Video Editor · Short Form · Long Form · VFX Compositor
            </p>
            <p className="text-white/20 text-xs mt-4">
              Based in Los Angeles, CA — Available Worldwide
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/25 text-xs tracking-widest uppercase mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Work', href: '#portfolio' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Showreel', href: '#showreel' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/35 hover:text-white/70 text-sm font-light transition-colors duration-200 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white/25 text-xs tracking-widest uppercase mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@alexmonroe.com" className="text-white/35 hover:text-white/70 text-sm font-light transition-colors duration-200">
                hello@alexmonroe.com
              </a>
              <a href="https://wa.me/1234567890" className="text-white/35 hover:text-white/70 text-sm font-light transition-colors duration-200">
                WhatsApp
              </a>
              <a href="#" className="text-white/35 hover:text-white/70 text-sm font-light transition-colors duration-200">
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-light">
            © 2024 Alex Monroe. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/20 hover:text-white/50 text-xs font-light transition-colors duration-200"
          >
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
