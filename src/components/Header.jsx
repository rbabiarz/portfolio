import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const navItems = [
  { label: 'Home / Bio', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Patents', path: '/patents' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 10))

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 m3-nav-bar"
      style={{
        background: scrolled
          ? 'rgba(243,237,247,0.96)'
          : 'rgba(255,251,254,0.90)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'var(--md-sys-color-outline-variant)' : 'transparent'}`,
        boxShadow: scrolled ? 'var(--md-sys-elevation-2)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s',
        height: 64,
        padding: '0 48px',
      }}
    >
      {/* Logo / Wordmark */}
      <NavLink to="/" style={{ display: 'flex', flexDirection: 'column', gap: 1, textDecoration: 'none' }}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400 }}>
          <div
            className="m3-title-large"
            style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 700, letterSpacing: '-0.3px' }}
          >
            ROBERT BABIARZ
          </div>
          <div
            className="m3-label-medium"
            style={{ color: 'var(--md-sys-color-on-surface-variant)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Experience Design Leader
          </div>
        </motion.div>
      </NavLink>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Navigation destinations (M3 Nav Bar pattern) */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <NavLink key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
              <motion.div
                className="m3-state-layer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 20px',
                  borderRadius: 'var(--md-sys-shape-full)',
                  background: isActive
                    ? 'var(--md-sys-color-secondary-container)'
                    : 'transparent',
                  color: isActive
                    ? 'var(--md-sys-color-on-secondary-container)'
                    : 'var(--md-sys-color-on-surface-variant)',
                  transition: 'background 0.2s, color 0.2s',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="m3-label-large"
                  style={{ fontWeight: isActive ? 700 : 500 }}
                >
                  {item.label}
                </span>
                {/* M3 active indicator dot */}
                <motion.div
                  animate={{ width: isActive ? 32 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
                  style={{
                    height: 3,
                    borderRadius: 2,
                    background: 'var(--md-sys-color-primary)',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              </motion.div>
            </NavLink>
          )
        })}
      </nav>
    </motion.header>
  )
}
