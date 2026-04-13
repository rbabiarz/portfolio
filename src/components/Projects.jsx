import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ASSETS = {
  dali:     'https://www.figma.com/api/mcp/asset/bc80adee-3108-46cd-91b0-a4cc19804272',
  partition:'https://www.figma.com/api/mcp/asset/f6dcc976-d844-40ac-bfa4-420eb1e41486',
  smart:    'https://www.figma.com/api/mcp/asset/336538c7-2afb-4185-ba49-3e86242f8b45',
  insights: 'https://www.figma.com/api/mcp/asset/c83f4afb-8df3-4173-9934-c873329fc93a',
  ai:       'https://www.figma.com/api/mcp/asset/a3b4628f-21fa-4489-ba7a-8bef8d59d113',
  lobby:    'https://www.figma.com/api/mcp/asset/830873ed-180c-485e-99df-ba39c6504bcb',
}

export const projects = [
  {
    id: 'dali',
    category: 'Enterprise · IoT',
    title: 'DALI-2 Lighting System',
    description: 'First DALI-2 lighting control system of this scale in North America, designed for the new Mississauga Hospital. Full end-to-end UX across commissioning, control zones, and fault diagnostics for a mission-critical healthcare facility.',
    tags: ['DALI-2', 'Healthcare', 'Enterprise IoT', 'First in NA'],
    image: ASSETS.dali,
    gradient: 'linear-gradient(151deg, rgb(49,46,129) 0%, rgb(76,29,149) 100%)',
    locked: true,
  },
  {
    id: 'partition',
    category: 'Enterprise · IoT',
    title: 'Partitioning',
    description: 'Movable walls and partitions that automatically adapt lighting control zones as spaces reconfigure. Seamless hardware/software UX integration for commercial facilities that need flexible, intelligent lighting boundaries.',
    tags: ['IoT', 'Enterprise', 'Hardware UX', 'Automation'],
    image: ASSETS.partition,
    gradient: 'linear-gradient(151deg, rgb(17,24,39) 0%, rgb(31,41,55) 100%)',
    locked: true,
  },
  {
    id: 'smart',
    category: 'Consumer · Mobile',
    title: 'Smart Lighting App',
    description: 'Consumer iOS & Android lighting control app taken from zero to production. Intuitive scene management, scheduling, and group controls designed for everyday users across residential and hospitality markets.',
    tags: ['iOS', 'Android', 'Consumer', 'Zero-to-Production'],
    image: ASSETS.smart,
    gradient: 'linear-gradient(151deg, rgb(49,46,129) 0%, rgb(76,29,149) 100%)',
    locked: false,
  },
  {
    id: 'insights',
    category: 'Enterprise · SaaS',
    title: 'Core Insights',
    description: 'Scalable multi-site dashboards for facility managers, turning IoT sensor data into actionable intelligence around energy ownership, space utilization, and predictive maintenance.',
    tags: ['Dashboard', 'Data Viz', 'Enterprise', 'Multi-site'],
    image: ASSETS.insights,
    gradient: 'linear-gradient(151deg, rgb(6,78,59) 0%, rgb(5,46,22) 100%)',
    locked: true,
  },
  {
    id: 'ai',
    category: 'AI · Enterprise',
    title: 'Application of AI',
    description: 'Infusing AI-powered intelligence into enterprise lighting — diagnostics, predictive maintenance, spatial intelligence, and smart fixture recommendations that surface insights without disrupting workflows.',
    tags: ['AI', 'Predictive', 'Enterprise', 'Spatial'],
    image: ASSETS.ai,
    gradient: 'linear-gradient(151deg, rgb(49,10,80) 0%, rgb(99,52,132) 100%)',
    locked: true,
  },
  {
    id: 'lobby',
    category: 'iGaming · Mobile',
    title: 'iGaming Lobby',
    description: 'Full mobile and desktop lobby experience for a regulated iGaming platform. Designed for high-engagement retention, rapid content discovery, and compliance-aware UX across jurisdictions.',
    tags: ['iGaming', 'Mobile', 'Retention', 'Compliance'],
    image: ASSETS.lobby,
    gradient: 'linear-gradient(151deg, rgb(124,45,18) 0%, rgb(180,72,35) 100%)',
    locked: true,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-48px' })

  return (
    <motion.article
      ref={ref}
      className="m3-card-dark"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(99,52,132,0.28)' }}
      style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--md-sys-shape-large)' }}
    >
      {/* Image — M3 card media area */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: project.gradient, borderRadius: 'var(--md-sys-shape-large) var(--md-sys-shape-large) 0 0' }}>
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
        />
      </div>

      {/* Content — M3 card body padding: 16dp */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--md-spacing-4)', padding: 'var(--md-spacing-6)', flex: 1 }}>

        {/* Category chip + lock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--md-spacing-3)' }}>
          <span
            className="m3-label-medium"
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--md-sys-shape-full)',
              background: 'var(--md-brand-pill-bg)',
              border: '1px solid var(--md-brand-pill-border)',
              color: 'var(--md-sys-color-on-surface-variant)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {project.category}
          </span>
          {project.locked && <span style={{ fontSize: 18, opacity: 0.6 }} title="NDA Protected">🔒</span>}
        </div>

        {/* Title — M3 Title Large */}
        <h3
          className="m3-title-large"
          style={{ color: 'var(--md-sys-color-on-surface-dark)', fontWeight: 500 }}
        >
          {project.title}
        </h3>

        {/* Description — M3 Body Medium */}
        <p
          className="m3-body-medium"
          style={{ color: 'white', lineHeight: 1.65, flex: 1 }}
        >
          {project.description}
        </p>

        {/* Tags — M3 Assist chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--md-spacing-2)' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="m3-label-small"
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--md-sys-shape-small)',
                background: 'var(--md-brand-pill-bg)',
                border: '1px solid var(--md-brand-pill-border)',
                color: 'var(--md-sys-color-on-surface-variant)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA — M3 Filled button */}
        <motion.button
          className="m3-btn-filled m3-state-layer"
          style={{ alignSelf: 'flex-start', marginTop: 'var(--md-spacing-1)' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {project.locked ? 'Request Access →' : 'View Case Study →'}
        </motion.button>
      </div>
    </motion.article>
  )
}

export default function Projects({ limit }) {
  const items = limit ? projects.slice(0, limit) : projects

  return (
    <section
      id="projects"
      style={{
        padding: 'var(--md-spacing-20) 0',
        background: 'linear-gradient(180deg, var(--md-sys-color-surface-dark-container) 0%, var(--md-sys-color-surface-dark) 100%)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--md-spacing-12)' }}>

        {/* Section header */}
        <div style={{ marginBottom: 'var(--md-spacing-12)' }}>
          <motion.p
            className="m3-label-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-4)' }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            className="m3-display-small"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            style={{ color: 'var(--md-sys-color-on-surface-dark)', fontWeight: 400, marginBottom: 'var(--md-spacing-4)' }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="m3-body-large"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--md-sys-color-tertiary)' }}
          >
            End-to-end design spanning IoT, augmented reality, enterprise platforms, and large-scale gaming.
          </motion.p>
        </div>

        {/* M3 card grid — 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--md-spacing-8)' }}>
          {items.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
