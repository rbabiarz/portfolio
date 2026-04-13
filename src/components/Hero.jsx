import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const ROB_PHOTO = 'https://www.figma.com/api/mcp/asset/47ee7f15-54bc-4458-967e-acb43776d4c4'

const stats = [
  { value: '50+', label: 'Products shipped' },
  { value: '+34%', label: '2025 sales lift' },
  { value: '3+1', label: 'Patents filed' },
]

function StatCard({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-1)' }}
    >
      <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, var(--md-brand-accent), transparent)', marginBottom: 4 }} />
      <span
        className="m3-headline-medium"
        style={{ color: 'var(--md-sys-color-secondary)', fontWeight: 700 }}
      >
        {value}
      </span>
      <span
        className="m3-body-medium"
        style={{ color: 'var(--md-sys-color-on-surface)' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        background: 'var(--md-sys-color-surface)',
        paddingTop: 64,
      }}
    >
      {/* M3 tonal surface tint blob */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 720, height: 720, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 75% 15%, color-mix(in srgb, var(--md-sys-color-primary) 14%, transparent) 0%, transparent 65%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--md-spacing-12)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--md-spacing-8)', alignItems: 'flex-start', paddingTop: 'var(--md-spacing-12)', minHeight: 'calc(100svh - 64px)' }}>

          {/* ── Left: Text ── */}
          <motion.div style={{ y: textY, display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-8)', paddingTop: 'var(--md-spacing-6)', zIndex: 10 }}>
            {/* Eyebrow — M3 Label Large */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="m3-label-large"
              style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em' }}
            >
              Experience Design Leader
            </motion.p>

            {/* Headline — M3 Display Large */}
            <div style={{ overflow: 'hidden' }}>
              {['I Make Complex', 'Systems Feel', 'Effortless'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.2, 0, 0, 1] }}
                >
                  <h1
                    className="m3-display-large"
                    style={{
                      color: 'var(--md-sys-color-on-surface)',
                      fontWeight: 700,
                      fontSize: 'clamp(42px, 5vw, 57px)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {line}
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Body — M3 Body Large */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="m3-body-large"
              style={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: 480, lineHeight: 1.75 }}
            >
              I am a <strong style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>Experience Designer</strong>, crafting intuitive digital products across{' '}
              <strong style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>IoT</strong>,{' '}
              <strong style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>Enterprise SaaS</strong>,{' '}
              <strong style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>B2B/B2C, AR,</strong> and{' '}
              <strong style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>iGaming</strong> domains.
            </motion.p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 'var(--md-spacing-10)' }}>
              {stats.map((s, i) => <StatCard key={s.label} {...s} delay={0.6 + i * 0.1} />)}
            </div>

            {/* CTAs — M3 Filled + Outlined buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ display: 'flex', gap: 'var(--md-spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <motion.a
                href="https://www.linkedin.com/in/robert-babiarz/"
                target="_blank"
                rel="noopener noreferrer"
                className="m3-btn-filled m3-state-layer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                LinkedIn Profile →
              </motion.a>
              <motion.a
                href="https://www.dropbox.com/scl/fi/cbmlzto69jvxolxa52rfz/Robert-Babiarz_2026_ATS_Resume.pdf?rlkey=ir1w22ybtma6qsfibhl67ydxq&st=bkuc3s0q&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="m3-btn-outlined m3-state-layer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Download Resume →
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <Link to="/work" className="m3-btn-tonal m3-state-layer">
                  View Work →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            style={{ position: 'relative', height: '90vh', overflow: 'hidden', borderRadius: 'var(--md-sys-shape-extra-large) var(--md-sys-shape-extra-large) 0 0' }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            <motion.img
              src={ROB_PHOTO}
              alt="Robert Babiarz — Experience Design Leader"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', y: photoY }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
              background: 'linear-gradient(to top, var(--md-sys-color-surface), transparent)',
              pointerEvents: 'none',
            }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ position: 'absolute', bottom: 24, left: '50%', x: '-50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        <span className="m3-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--md-sys-color-primary), transparent)', originY: 0 }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
