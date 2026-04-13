import { motion } from 'framer-motion'

const patents = [
  {
    number: 'US Patent',
    status: 'Issued',
    title: 'Adaptive Lighting Control Interface for DALI-2 Systems',
    description: 'A method and apparatus for dynamically adapting lighting control zones in response to spatial reconfiguration events in commercial environments. Enables real-time zone re-mapping without manual recommissioning.',
    tags: ['IoT', 'DALI-2', 'Adaptive Control', 'Enterprise'],
    year: '2023',
    statusColor: 'var(--md-sys-color-secondary-container)',
    statusText: 'var(--md-sys-color-on-secondary-container)',
  },
  {
    number: 'US Patent',
    status: 'Issued',
    title: 'Predictive Space Utilization Engine for Smart Buildings',
    description: 'System for predicting occupancy and space utilization patterns using IoT sensor fusion, enabling proactive lighting and energy optimization in commercial building portfolios.',
    tags: ['AI/ML', 'Occupancy', 'Energy', 'Smart Building'],
    year: '2022',
    statusColor: 'var(--md-sys-color-secondary-container)',
    statusText: 'var(--md-sys-color-on-secondary-container)',
  },
  {
    number: 'US Patent',
    status: 'Issued',
    title: 'Multi-Sensor Fault Diagnostics UX Framework',
    description: 'A user interface framework for surfacing and triaging multi-sensor fault events in mission-critical facility lighting systems, reducing diagnostic time by presenting correlated fault chains in a unified view.',
    tags: ['Diagnostics', 'Healthcare', 'Fault Management', 'UX'],
    year: '2022',
    statusColor: 'var(--md-sys-color-secondary-container)',
    statusText: 'var(--md-sys-color-on-secondary-container)',
  },
  {
    number: 'US Patent',
    status: 'Pending',
    title: 'AI-Assisted Fixture Recommendation Engine',
    description: 'Method for generating contextually-aware lighting fixture recommendations based on spatial analysis, usage patterns, and energy optimization goals — surfaced inline within existing enterprise workflows.',
    tags: ['AI', 'Recommendations', 'Energy', 'Enterprise'],
    year: '2024',
    statusColor: 'var(--md-sys-color-tertiary-container)',
    statusText: 'var(--md-sys-color-on-tertiary-container)',
  },
]

function PatentCard({ patent, index }) {
  return (
    <motion.article
      className="m3-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -4, boxShadow: 'var(--md-sys-elevation-3)' }}
      style={{
        borderRadius: 'var(--md-sys-shape-large)',
        background: 'var(--md-sys-color-surface-container-lowest)',
        boxShadow: 'var(--md-sys-elevation-1)',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--md-spacing-4)',
        padding: 'var(--md-spacing-6)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 'var(--md-spacing-2)' }}>
          {/* Patent number — M3 Label Medium chip */}
          <span
            className="m3-label-medium"
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--md-sys-shape-small)',
              background: 'var(--md-sys-color-surface-container)',
              color: 'var(--md-sys-color-on-surface-variant)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            {patent.number} · {patent.year}
          </span>
          {/* Status */}
          <span
            className="m3-label-medium"
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--md-sys-shape-small)',
              background: patent.statusColor,
              color: patent.statusText,
            }}
          >
            {patent.status}
          </span>
        </div>
        {/* Patent icon */}
        <span style={{ fontSize: 24, opacity: 0.4 }}>◉</span>
      </div>

      {/* Title — M3 Title Large */}
      <h3
        className="m3-title-large"
        style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 500 }}
      >
        {patent.title}
      </h3>

      {/* Description — M3 Body Medium */}
      <p
        className="m3-body-medium"
        style={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.75 }}
      >
        {patent.description}
      </p>

      {/* Tags — M3 Assist chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--md-spacing-2)' }}>
        {patent.tags.map((tag) => (
          <span
            key={tag}
            className="m3-label-small"
            style={{
              padding: '4px 10px',
              borderRadius: 'var(--md-sys-shape-extra-small)',
              background: 'var(--md-sys-color-surface-container)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              color: 'var(--md-sys-color-on-surface-variant)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Patents() {
  return (
    <>
      {/* Page hero */}
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
            style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-4)' }}
          >
            Intellectual Property
          </motion.p>
          <motion.h1
            className="m3-display-medium"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            style={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 400, marginBottom: 'var(--md-spacing-4)' }}
          >
            Patents
          </motion.h1>
          <motion.p
            className="m3-body-large"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: 640 }}
          >
            3 issued patents and 1 pending — all stemming from design-led innovation in IoT lighting, AI, and enterprise UX systems.
          </motion.p>

          {/* Stats row — M3 Cards */}
          <div style={{ display: 'flex', gap: 'var(--md-spacing-4)', marginTop: 'var(--md-spacing-10)', flexWrap: 'wrap' }}>
            {[
              { label: 'Issued', value: '3' },
              { label: 'Pending', value: '1' },
              { label: 'Technology Areas', value: '4+' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                style={{
                  padding: 'var(--md-spacing-5) var(--md-spacing-6)',
                  borderRadius: 'var(--md-sys-shape-large)',
                  background: 'var(--md-sys-color-surface-container)',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  minWidth: 140,
                  boxShadow: 'var(--md-sys-elevation-1)',
                }}
              >
                <div className="m3-display-small" style={{ color: 'var(--md-sys-color-primary)', fontWeight: 700 }}>{s.value}</div>
                <div className="m3-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)', marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent cards */}
      <section style={{
        padding: 'var(--md-spacing-20) 0',
        background: 'var(--md-sys-color-surface-container-low)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--md-spacing-12)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--md-spacing-6)' }}>
            {patents.map((p, i) => <PatentCard key={p.title} patent={p} index={i} />)}
          </div>

          {/* Disclaimer */}
          <motion.p
            className="m3-body-small"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              color: 'var(--md-sys-color-on-surface-variant)',
              marginTop: 'var(--md-spacing-10)',
              padding: 'var(--md-spacing-4) var(--md-spacing-6)',
              borderRadius: 'var(--md-sys-shape-medium)',
              background: 'var(--md-sys-color-surface-container)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            ℹ Patent titles and descriptions are paraphrased for portfolio purposes. Actual patent numbers and full claims are available upon request under NDA for qualified opportunities.
          </motion.p>
        </div>
      </section>
    </>
  )
}
