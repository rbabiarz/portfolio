import { motion } from 'framer-motion'

const navLinks = [
  { label: 'HOME/BIO', href: '#hero' },
  { label: 'WORK', href: '#projects' },
  { label: 'PATENTS', href: '#about' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-14"
      style={{ background: '#2f193f' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,52,132,0.3) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-12 relative z-10 flex flex-col items-center gap-6">
        {/* Nav */}
        <nav className="flex flex-wrap gap-8 justify-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 no-underline text-white text-[14px] font-bold tracking-[0.08em] uppercase opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Divider */}
        <div
          className="w-full h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
        />

        {/* Identity */}
        <p
          className="text-[14px] font-medium text-white text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Robert Babiarz • Experience Design • UX Strategy • Product Design
        </p>

        {/* Contact */}
        <p
          className="text-[14px] font-medium text-white text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          rbabiarz@gmail.com • 416-315-4761
        </p>

        {/* Social links */}
        <div className="flex gap-5">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/robert-babiarz/' },
            { label: 'Resume', href: 'https://www.dropbox.com/scl/fi/cbmlzto69jvxolxa52rfz/Robert-Babiarz_2026_ATS_Resume.pdf?rlkey=ir1w22ybtma6qsfibhl67ydxq&st=bkuc3s0q&dl=0' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-[0.06em] text-white no-underline"
              style={{ border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Montserrat, sans-serif' }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-[13px] font-medium text-center"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif' }}
        >
          © 2026 Robert Babiarz. All rights reserved.
        </p>
        <p
          className="text-[11px] text-center"
          style={{ color: '#9e9c9a', fontFamily: 'Montserrat, sans-serif' }}
        >
          Designed in Figma · Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </motion.footer>
  )
}
