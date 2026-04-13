import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    text: `I had the pleasure of working directly with Robert on multiple initiatives, and he is an exceptional UI/UX designer who truly understands both design and the technical realities behind it. He has a strong grasp of design thinking and consistently transforms abstract ideas into intuitive, working prototypes. Robert invests time in clearly understanding requirements before proposing solutions, ensuring the final experience is both user-friendly and technically feasible. His ability to bridge product vision, user needs, and engineering constraints makes collaboration seamless. Any team would benefit from his creativity, structure, and user-first mindset.`,
    name: 'Gunjan Dave',
    role: 'Engineering Manager',
    initials: 'GD',
    gradient: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)',
  },
  {
    stars: 5,
    text: `I had the pleasure of working with Robert at Parlay Gaming, where he excelled as a Lead Designer. Robert is an incredibly talented and detail-oriented designer with a keen eye for creating visually stunning and user-focused designs. His ability to turn complex ideas into intuitive and engaging interfaces consistently elevated the quality of our products.\n\nRobert's collaborative approach and dedication to excellence made him a joy to work with and a key contributor to our team's success. He was always open to feedback and worked tirelessly to ensure that every design element aligned with the project's vision. I highly recommend Robert to any organization looking for a skilled and innovative design leader.`,
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

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(108,99,255,0.2)' }}
      className="flex flex-col gap-4 p-6 rounded-[20px] flex-1"
      style={{
        background: '#1b1d2c',
        border: '1px solid rgba(108,99,255,0.18)',
      }}
    >
      {/* Stars */}
      <span className="text-[#fbbf24] text-[18px] tracking-[3px]">{'★'.repeat(testimonial.stars)}</span>

      {/* Quote */}
      <p
        className="text-[14px] font-semibold leading-[1.85] flex-1"
        style={{ color: '#b4badb', fontFamily: 'Montserrat, sans-serif', whiteSpace: 'pre-line' }}
      >
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-2">
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white text-[13px] font-bold shrink-0"
          style={{ background: testimonial.gradient, fontFamily: 'Montserrat, sans-serif' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p
            className="text-[14px] font-bold text-[#e8eaf6]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-[12px] font-normal text-[#8b8fa8]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  return (
    <section
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #12131e 0%, #1b1d2c 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto px-12">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#8b8fa8', fontFamily: 'Montserrat, sans-serif' }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] font-black tracking-tight mb-4"
            style={{ color: '#e8eaf6', fontFamily: 'Montserrat, sans-serif' }}
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] font-medium"
            style={{ color: '#b4badb', fontFamily: 'Montserrat, sans-serif' }}
          >
            Feedback from colleagues I've had the pleasure of working with.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
