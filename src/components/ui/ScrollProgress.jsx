import { motion, useScroll, useSpring } from 'framer-motion'

// Línea fina de progreso de lectura (en lugar de una navbar).
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

    return (
        <motion.div
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
            style={{ scaleX }}
        />
    )
}

export default ScrollProgress
