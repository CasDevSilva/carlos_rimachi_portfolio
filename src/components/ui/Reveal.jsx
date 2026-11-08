import { motion, useReducedMotion } from 'framer-motion'

// Aparición suave al entrar en pantalla. Respeta "reducir movimiento".
const Reveal = ({ children, delay = 0, y = 16, className = '' }) => {
    const reduce = useReducedMotion()

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: reduce ? 0 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
