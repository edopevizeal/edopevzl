import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import LoadingScreen from '../components/LoadingScreen'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import PortfolioSection from '../components/PortfolioSection'
import ShowreelSection from '../components/ShowreelSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [loading])

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ShowreelSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
