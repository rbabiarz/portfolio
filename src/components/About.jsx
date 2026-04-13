import { motion } from 'framer-motion'

const skills = [
  'UX / Product Design', 'Design Systems', 'Interaction Design', 'IoT',
  'Enterprise SaaS', 'Accessibility', 'B2B/B2C', 'AR/XR',
  'iGaming', 'iOS / Android', 'Figma', 'Agile / Scrum',
  'User Research', 'Prototyping', 'Design Tokens', 'Touchscreen Concepts',
]

function M3Chip({ text, delay }) {
  return (
    <motion.span
      className="m3-chip m3-state-layer"
      initial={{ opacity: 0, scale: 0.88, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38, delay, ease: [0.2, 0, 0, 1] }}
      whileHover={{ borderColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-primary)' }}
      style={{
        background: 'var(--md-brand-pill-bg)',
        border: '1px solid var(--md-brand-pill-border)',
        color: 'var(--md-sys-color-on-surface-dark)',
        cursor: 'default',
        transition: 'border-color 0.2s, color 0.2s',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
      }}
    >
      {text}
    </motion.span>
  )
}

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{
          background: 'rgba(0,0,0,0.82)',
          borderRadius: '0 var(--md-sys-shape-extra-large) 0 0',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'var(--md-spacing-20) var(--md-spacing-12)' }}>
          <div style={{ maxWidth: 860 }}>

            {/* Eyebrow — M3 Label Large */}
            <motion.p
              className="m3-label-large"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-6)' }}
            >
              About Me
            </motion.p>

            {/* Heading — M3 Display Small */}
            <motion.h2
              className="m3-display-small"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              style={{
                color: 'var(--md-sys-color-on-surface-dark)',
                fontWeight: 400,
                marginBottom: 'var(--md-spacing-8)',
                lineHeight: 1.2,
              }}
            >
              A genuine obsession with the moment when a complicated system suddenly feels effortless to use
            </motion.h2>

            {/* Body — M3 Body Large */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-5)' }}>
              {[
                `I turn complex technology into experiences people actually enjoy using. Across IoT-connected lighting, augmented reality, enterprise SaaS, and iGaming, my focus has always been the same: the moment a complicated system suddenly feels effortless.`,
                `I led UX across a full suite of mobile-first commercial software — iOS, Android, responsive web, and desktop — and founded an enterprise-wide design system in Figma adopted across the entire product suite. I've taken products from zero to production, contributed 3 issued patents with 1 pending, and partnered closely with product and engineering in Agile environments to ship cohesive, accessible outcomes.`,
                `I'm a strong communicator, a systems thinker, and the kind of designer who walks out of a 30-minute meeting with a working prototype and a clear direction.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="m3-body-large"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18 + i * 0.1 }}
                  style={{ color: 'white', lineHeight: 1.75 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Skills — M3 Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--md-spacing-2)', marginTop: 'var(--md-spacing-10)' }}>
              {skills.map((s, i) => <M3Chip key={s} text={s} delay={0.04 * i} />)}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
