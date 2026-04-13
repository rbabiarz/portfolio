import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    text: `I had the pleasure of working directly with Robert on multiple initiatives, and he is an exceptional UI/UX designer who truly understands both design and the technical realities behind it. He transforms abstract ideas into intuitive, working prototypes — investing time in clearly understanding requirements before proposing solutions. His ability to bridge product vision, user needs, and engineering constraints makes collaboration seamless.`,
    name: 'Gunjan Dave',
    role: 'Engineering Manager',
    initials: 'GD',
    gradient: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)',
  },
  {
    stars: 5,
    text: `I had the pleasure of working with Robert at Parlay Gaming where he excelled as Lead Designer. He is an incredibly talented and detail-oriented designer with a keen eye for visually stunning, user-focused designs. His collaborative approach and dedication to excellence made him a joy to work with and a key contributor to our team's success. I highly recommend Robert to any organization looking for a skilled and innovative design leader.`,
    name: 'Gavyn Elrick',
    role: 'Senior Full Stack Engineer',
    initials: 'GE',
    gradient: 'linear-gradient(135deg, rgb(245,158,11) 0%, rgb(239,68,68) 100%)',
  },
  {
    stars: 5,
    text: `Robert is a rare designer who combines deep aesthetic sensibility with a systematic approach to solving hard problems. Working alongside him on enterprise IoT products, I was constantly impressed by how quickly he could synthesize user research, business requirements, and technical constraints into designs that actually shipped. He brings clarity to ambiguity and elevates everyone around him.`,
    name: 'Dhyan Patel',
    role: 'Product Manager',
    initials: 'DP',
    gradient: 'linear-gradient(135deg, rgb(99,52,132) 0%, rgb(129,68,171) 100%)',
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-48px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.13, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(108,99,255,0.2)' }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--md-spacing-4)',
        padding: 'var(--md-spacing-6)',
        borderRadius: 'var(--md-sys-shape-extra-large)',
        background: 'var(--md-sys-color-surface-dark)',
        border: '1px solid var(--md-brand-pill-border)',
        boxShadow: 'var(--md-sys-elevation-1)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}
    >
      {/* Stars */}
      <span style={{ color: '#fbbf24', fontSize: 16, letterSpacing: 3 }}>{'★'.repeat(t.stars)}</span>

      {/* Quote — M3 Body Medium */}
      <p
        className="m3-body-medium"
        style={{ color: 'var(--md-sys-color-tertiary)', lineHeight: 1.85, flex: 1 }}
      >
        {t.text}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--md-spacing-4)', paddingTop: 'var(--md-spacing-2)' }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: 'var(--md-sys-shape-medium)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: t.gradient, flexShrink: 0,
          }}
        >
          <span className="m3-label-medium" style={{ color: 'white' }}>{t.initials}</span>
        </div>
        <div>
          <p className="m3-title-small" style={{ color: 'var(--md-sys-color-on-surface-dark)' }}>{t.name}</p>
          <p className="m3-body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{t.role}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  return (
    <section style={{
      padding: 'var(--md-spacing-20) 0',
      background: 'linear-gradient(180deg, var(--md-sys-color-surface-dark) 0%, var(--md-sys-color-surface-dark-container) 100%)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--md-spacing-12)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'var(--md-spacing-12)' }}>
          <motion.p
            className="m3-label-large"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 'var(--md-spacing-4)' }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            className="m3-display-small"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            style={{ color: 'var(--md-sys-color-on-surface-dark)', fontWeight: 400, marginBottom: 'var(--md-spacing-4)' }}
          >
            What People Say
          </motion.h2>
          <motion.p
            className="m3-body-large"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--md-sys-color-tertiary)' }}
          >
            Feedback from colleagues I've had the pleasure of working with.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 'var(--md-spacing-6)', alignItems: 'stretch' }}>
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}
