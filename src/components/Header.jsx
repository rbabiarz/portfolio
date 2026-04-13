import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const navItems = [
  { label: 'HOME/BIO', href: '#hero', icon: '⌂' },
  { label: 'WORK', href: '#projects', icon: '◈' },
  { label: 'PATENTS', href: '#about', icon: '◉' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('HOME/BIO')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 20)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #e0e0e0' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        className="flex flex-col leading-none no-underline"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <span
          className="text-[22px] font-black tracking-[-0.06em] text-[#1c1b1f]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          ROBERT BABIARZ
        </span>
        <span
          className="text-[11px] font-semibold tracking-[0.15em] text-[#8b8fa8] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Experience Design Leader
        </span>
      </motion.a>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 no-underline group"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => setActive(item.label)}
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#1c1b1f] group-hover:text-[#633484] transition-colors duration-200">
              {item.label}
            </span>
            <motion.div
              className="h-[2px] rounded-full bg-[#633484]"
              animate={{ width: active === item.label ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}
      </nav>
    </motion.header>
  )
}
