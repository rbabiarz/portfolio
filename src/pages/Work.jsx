import { motion } from 'framer-motion'
import Projects from '../components/Projects'

const ADOBE_LOGO = 'https://www.figma.com/api/mcp/asset/25f5c2e8-d8d5-41b7-b105-3f7f94b8ee6d'

const experience = [
  {
    company: 'Signify / Cooper Lighting',
    role: 'Lead UX Designer — Enterprise IoT',
    period: '2019 – Present',
    bullets: [
      'Founded and scaled an enterprise-wide design system in Figma adopted across the full product suite',
      'Led UX for DALI-2 lighting control system — first of its scale in North America (Mississauga Hospital)',
      'Drove 34% increase in 2025 sales through UX-led product improvements',
      'Partnered with product and engineering across iOS, Android, responsive web, and desktop platforms',
    ],
    color: 'var(--md-sys-color-secondary-container)',
    textColor: 'var(--md-sys-color-on-secondary-container)',
  },
  {
    company: 'Parlay Gaming',
    role: 'Lead Designer — iGaming',
    period: '2017 – 2019',
    bullets: [
      'Designed full mobile and desktop lobby experience for a regulated iGaming platform',
      'Created high-engagement retention patterns for rapid content discovery',
      'Delivered compliance-aware UX across multiple jurisdictions',
    ],
    color: 'var(--md-sys-color-tertiary-container)',
    textColor: 'var(--md-sys-color-on-tertiary-container)',
  },
  {
    company: 'Adobe',
    role: 'UX Consultant — Contract',
    period: 'Contract',
    bullets: [
      'Consulting UX engagements supporting Adobe product teams',
      'Contributed design thinking and prototyping across enterprise software workflows',
    ],
    color: 'var(--md-sys-color-error-container)',
    textColor: 'var(--md-sys-color-on-error-container)',
  },
]

export default function Work() {
  return (
    <>
      {/* Page hero — M3 surface tinted */}
      <section style={{
        paddingTop: 64,
        background: 'var(--md-sys-color-surface)',
        borderBottom: '1px solid var(--md-sys-color-outline-variant)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'var(--md-spacing-16) var(--md-spacing-12) var(--md-spacing-12)' }}>
          <motion.p
            className="m3-label-large"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-4)' }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="m3-display-medium"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 400, marginBottom: 'var(--md-spacing-4)' }}
          >
            Work
          </motion.h1>
          <motion.p
            className="m3-body-large"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: 640 }}
          >
            End-to-end design work spanning IoT, augmented reality, enterprise platforms, and large-scale gaming systems. 50+ products shipped across 10+ years of craft.
          </motion.p>
        </div>
      </section>

      {/* Projects grid */}
      <Projects />

      {/* Experience timeline — M3 List */}
      <section style={{
        padding: 'var(--md-spacing-20) 0',
        background: 'var(--md-sys-color-surface-container-low)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--md-spacing-12)' }}>
          <motion.p
            className="m3-label-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-4)' }}
          >
            Experience
          </motion.p>
          <motion.h2
            className="m3-headline-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.2, 0, 0, 1] }}
            style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 400, marginBottom: 'var(--md-spacing-12)' }}
          >
            Career History
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-6)' }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="m3-card"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -3 }}
                style={{
                  borderRadius: 'var(--md-sys-shape-large)',
                  overflow: 'hidden',
                  display: 'flex',
                  boxShadow: 'var(--md-sys-elevation-1)',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
              >
                {/* Color accent strip */}
                <div style={{ width: 6, background: exp.color, flexShrink: 0 }} />
                <div style={{ padding: 'var(--md-spacing-6)', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--md-spacing-2)' }}>
                    <div>
                      <h3 className="m3-title-large" style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}>
                        {exp.company}
                      </h3>
                      <p className="m3-title-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="m3-label-medium"
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--md-sys-shape-full)',
                        background: exp.color,
                        color: exp.textColor,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: `var(--md-spacing-4) 0 0 0`, display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-2)' }}>
                    {exp.bullets.map((b) => (
                      <li key={b} className="m3-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'flex', gap: 'var(--md-spacing-2)', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--md-sys-color-primary)', marginTop: 2, flexShrink: 0 }}>◆</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
