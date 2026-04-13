import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home / Bio', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Patents', to: '/patents' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      style={{ position: 'relative', overflow: 'hidden', padding: 'var(--md-spacing-12) 0', background: 'var(--md-brand-footer)' }}
    >
      {/* Tonal glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--md-sys-color-primary) 30%, transparent) 0%, transparent 65%)',
      }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 var(--md-spacing-12)',
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 'var(--md-spacing-6)',
      }}>

        {/* Nav — M3 Navigation links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--md-spacing-8)', justifyContent: 'center' }}>
          {navLinks.map((link) => (
            <motion.div key={link.label} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <Link
                to={link.to}
                className="m3-label-large m3-state-layer"
                style={{
                  color: 'var(--md-sys-color-on-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  opacity: 0.8,
                  padding: '4px 0',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

        {/* Identity — M3 Body Medium */}
        <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-on-primary)', textAlign: 'center' }}>
          Robert Babiarz • Experience Design • UX Strategy • Product Design
        </p>

        {/* Contact */}
        <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-on-primary)', textAlign: 'center' }}>
          rbabiarz@gmail.com • 416-315-4761
        </p>

        {/* Social links — M3 Outlined buttons */}
        <div style={{ display: 'flex', gap: 'var(--md-spacing-3)' }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/robert-babiarz/' },
            { label: 'Resume ↓', href: 'https://www.dropbox.com/scl/fi/cbmlzto69jvxolxa52rfz/Robert-Babiarz_2026_ATS_Resume.pdf?rlkey=ir1w22ybtma6qsfibhl67ydxq&st=bkuc3s0q&dl=0' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-label-large m3-state-layer"
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--md-sys-shape-full)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.6)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Copyright — M3 Label Small */}
        <p className="m3-label-small" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', letterSpacing: '0.05em' }}>
          © 2026 Robert Babiarz. All rights reserved.
        </p>
        <p className="m3-label-small" style={{ color: 'rgba(158,156,154,0.8)', textAlign: 'center' }}>
          Designed in Figma · Built with React + Tailwind CSS + Framer Motion · Material 3 Design System
        </p>
      </div>
    </motion.footer>
  )
}
