import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const ROB_PHOTO = 'https://www.figma.com/api/mcp/asset/47ee7f15-54bc-4458-967e-acb43776d4c4'

const stats = [
  { value: '50+', label: 'Products' },
  { value: '+34%', label: '2025 Sales' },
  { value: '3+1', label: 'Patents' },
]

function AnimatedStat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-2"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-[#8144ab] to-transparent mb-1" />
      <span
        className="text-[28px] font-black tracking-tight"
        style={{ color: '#8144ab', fontFamily: 'Montserrat, sans-serif' }}
      >
        {value}
      </span>
      <span
        className="text-[15px] font-medium text-[#1c1b1f]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#eeeeee] pt-24"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(99,52,132,0.12) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(129,68,171,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-12 relative">
        <div className="grid grid-cols-2 gap-8 items-start pt-12 min-h-[calc(100vh-96px)]">
          {/* Left — text */}
          <motion.div
            style={{ y: textY }}
            className="flex flex-col gap-8 pt-6 z-10"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] font-bold tracking-[0.2em] text-[#8b8fa8] uppercase"
            >
              Experience Design Leader
            </motion.p>

            {/* Headline */}
            <div className="overflow-hidden">
              {['I Make Complex', 'Systems Feel', 'Effortless'].map((line, i) => (
                <motion.h1
                  key={line}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[64px] font-black leading-[1.05] tracking-[-0.03em] text-[#1c1b1f] block"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16px] font-medium leading-[1.8] text-[#1c1b1f] max-w-[480px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              I am a <strong>Experience Designer</strong>, crafting intuitive digital products and problem solving across{' '}
              <strong>IoT</strong>, <strong>Enterprise SaaS</strong>, <strong>B2B/B2C, AR,</strong> and{' '}
              <strong>iGaming</strong> domains.
            </motion.p>

            {/* Stats */}
            <div className="flex gap-10">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} {...s} delay={0.6 + i * 0.1} />
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-5 items-center flex-wrap"
            >
              <motion.a
                href="https://www.linkedin.com/in/robert-babiarz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 rounded-full text-white font-bold text-[15px] tracking-[0.04em] uppercase no-underline"
                style={{ background: '#633484', border: '1px solid #8144ab', fontFamily: 'Montserrat, sans-serif' }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(99,52,132,0.45)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                LinkedIn Profile →
              </motion.a>
              <motion.a
                href="https://www.dropbox.com/scl/fi/cbmlzto69jvxolxa52rfz/Robert-Babiarz_2026_ATS_Resume.pdf?rlkey=ir1w22ybtma6qsfibhl67ydxq&st=bkuc3s0q&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 rounded-full font-bold text-[15px] tracking-[0.04em] uppercase no-underline text-[#1c1b1f]"
                style={{ background: 'white', border: '1px solid #e4e4e4', fontFamily: 'Montserrat, sans-serif' }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Download Resume →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="relative h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={ROB_PHOTO}
              alt="Robert Babiarz — Experience Design Leader"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ y: photoY, scale: photoScale }}
            />
            {/* Gradient fade at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #eeeeee 0%, transparent 100%)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#8b8fa8] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-[#8144ab] to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  )
}
