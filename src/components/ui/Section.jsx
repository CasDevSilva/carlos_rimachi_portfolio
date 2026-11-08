import { motion } from 'framer-motion'
import Reveal from './Reveal'

const Section = ({ title, children, className = '' }) => (
    <section className={`flex flex-col gap-6 ${className}`}>
        <Reveal className="flex items-center gap-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-muted">{title}</h2>
            <motion.span
                aria-hidden="true"
                className="h-px flex-1 origin-left bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            />
        </Reveal>
        {children}
    </section>
)

export default Section
