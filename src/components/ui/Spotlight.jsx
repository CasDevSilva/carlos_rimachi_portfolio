import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Halo suave que sigue al cursor. Solo en dispositivos con puntero fino.
const Spotlight = () => {
    const reduce = useReducedMotion()
    const [enabled, setEnabled] = useState(false)
    const x = useMotionValue(-400)
    const y = useMotionValue(-400)
    const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 })
    const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 })
    const background = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--accent) 11%, transparent), transparent 70%)`

    useEffect(() => {
        if (reduce || !window.matchMedia('(pointer: fine)').matches) return
        setEnabled(true)
        const onMove = (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }
        window.addEventListener('pointermove', onMove)
        return () => window.removeEventListener('pointermove', onMove)
    }, [reduce, x, y])

    if (!enabled) return null

    return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{ background }} />
}

export default Spotlight
