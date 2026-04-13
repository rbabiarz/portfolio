import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'UX / Product Design', 'Design Systems', 'Interaction Design', 'IoT',
  'Enterprise SaaS', 'Accessibility', 'B2B/B2C', 'AR/XR',
  'iGaming', 'iOS / Android', 'Figma', 'Agile / Scrum',
  'User Research', 'Prototyping', 'Design Tokens', 'Touchscreen Concepts',
]

const companies = [
  { name: 'Signify / Cooper Lighting', years: '2019 – Present' },
  { name: 'Parlay Gaming', years: '2017 – 2019' },
  { name: 'Adobe', years: 'Contract' },
  { name: 'Various Agencies', years: '2008 – 2017' },
]

function Pill({ text, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, borderColor: 'rgba(108,99,255,0.5)' }}
      className="inline-flex items-center justify-center px-4 py-2 rounded-full text-[13px] font-bold uppercase tracking-[0.05em] text-[#8b8fa8] cursor-default"
      style={{
        background: '#1b1d2c',
        border: '1px solid rgba(108,99,255,0.18)',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {text}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-0 overflow-hidden">
      {/* Dark overlay block flush with hero bottom */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ background: 'rgba(0,0,0,0.82)', borderRadius: '0 60px 0 0' }}
      >
        <div className="max-w-[1280px] mx-auto px-12 py-20">
          <div className="max-w-[860px]">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6"
              style={{ color: '#8b8fa8', fontFamily: 'Montserrat, sans-serif' }}
            >
              About Me
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[40px] font-bold leading-[1.15] tracking-[-0.02em] mb-8"
              style={{ color: '#e8eaf6', fontFamily: 'Montserrat, sans-serif' }}
            >
              A genuine obsession with the moment when a complicated system suddenly feels effortless to use
            </motion.h2>

            {/* Body */}
            <div className="space-y-5">
              {[
                `I turn complex technology into experiences people actually enjoy using. Across IoT-connected lighting, augmented reality, enterprise SaaS, and iGaming, my focus has always been the same: the moment a complicated system suddenly feels effortless.`,
                `I led UX across a full suite of mobile-first commercial software — iOS, Android, responsive web, and desktop — and founded an enterprise-wide design system in Figma adopted across the entire product suite. I've taken products from zero to production, contributed 3 issued patents with 1 pending, and partnered closely with product and engineering in Agile environments to ship cohesive, accessible outcomes.`,
                `I'm a strong communicator, a systems thinker, and the kind of designer who walks out of a 30-minute meeting with a working prototype and a clear direction.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                  className="text-[16px] font-medium leading-[1.75]"
                  style={{ color: 'white', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2.5 mt-10">
              {skills.map((s, i) => (
                <Pill key={s} text={s} delay={0.04 * i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
