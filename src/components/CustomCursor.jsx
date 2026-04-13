import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      const interactive = el.closest('a, button, [role="button"], input, select, textarea, label')
      setHovering(!!interactive)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: clicking ? 0.6 : 1 }}
        transition={{ type: 'spring', stiffness: 900, damping: 40, mass: 0.3 }}
      >
        <div
          className="rounded-full"
          style={{
            width: hovering ? 20 : 12,
            height: hovering ? 20 : 12,
            background: hovering ? 'rgba(99,52,132,0.9)' : '#633484',
            transition: 'width 0.2s, height 0.2s',
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
        style={{ borderColor: hovering ? '#8144ab' : 'rgba(99,52,132,0.4)' }}
        animate={{
          x: pos.x - (hovering ? 22 : 18),
          y: pos.y - (hovering ? 22 : 18),
          width: hovering ? 44 : 36,
          height: hovering ? 44 : 36,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 0.8 }}
      />
    </>
  )
}
