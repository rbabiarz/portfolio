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

const projects = [
  {
    id: 'dali',
    category: 'Enterprise · IoT',
    title: 'DALI-2 Lighting System',
    description: 'First DALI-2 lighting control system of this scale in North America, designed for NEW Mississauga Hospital. Full end-to-end UX across commissioning, control zones, and fault diagnostics for a mission-critical healthcare facility.',
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
    description: 'Scalable multi-site dashboards for facility managers, turning IoT sensor data into actionable intelligence around energy ownership, space utilization, and predictive maintenance across large commercial building portfolios.',
    tags: ['Dashboard', 'Data Viz', 'Enterprise', 'Multi-site'],
    image: ASSETS.insights,
    gradient: 'linear-gradient(151deg, rgb(6,78,59) 0%, rgb(5,46,22) 100%)',
    locked: true,
  },
  {
    id: 'ai',
    category: 'AI · Enterprise',
    title: 'Application of AI',
    description: 'Infusing AI-powered intelligence into existing enterprise lighting applications — diagnostics, predictive maintenance, spatial intelligence, and smart fixture recommendations that surface insights without disrupting workflows.',
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
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(99,52,132,0.25)' }}
      className="flex flex-col overflow-hidden rounded-[2px]"
      style={{
        background: '#1b1d2c',
        border: '1px solid rgba(108,99,255,0.18)',
      }}
    >
      {/* Image */}
      <div
        className="relative h-[200px] overflow-hidden"
        style={{ background: project.gradient }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Shine sweep on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '200%', opacity: 0.15 }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(90deg, transparent, white, transparent)',
            width: '60%',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Category + lock */}
        <div className="flex items-center gap-3">
          <span
            className="px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8b8fa8]"
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.18)' }}
          >
            {project.category}
          </span>
          {project.locked && (
            <span className="text-[#8b8fa8] text-[18px]" title="NDA Protected">🔒</span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-[18px] font-bold text-[#e8eaf6] leading-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-[14px] font-medium leading-[1.65] text-white flex-1"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8b8fa8]"
              style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.18)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className="mt-1 self-start px-7 py-3 rounded-full text-[14px] font-semibold uppercase tracking-[0.05em] text-white"
          style={{ background: '#633484', fontFamily: 'Montserrat, sans-serif' }}
          whileHover={{ scale: 1.05, background: '#7a3fa0' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {project.locked ? 'Request Access →' : 'View Case Study →'}
        </motion.button>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #1b1d2c 0%, #12131e 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto px-12">
        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#8b8fa8', fontFamily: 'Montserrat, sans-serif' }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] font-black tracking-tight mb-4"
            style={{ color: '#e8eaf6', fontFamily: 'Montserrat, sans-serif' }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] font-medium"
            style={{ color: '#b4badb', fontFamily: 'Montserrat, sans-serif' }}
          >
            End-to-end design work spanning IoT, augmented reality, enterprise platforms, and large-scale gaming systems.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
