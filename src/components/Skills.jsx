import { motion } from 'framer-motion'
import { Chip } from '@heroui/react'
import { skills_data } from '../data/portfolio'
import Section from './ui/Section'

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.025 } },
}

const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

const Skills = () => (
    <Section title="Stack">
        <dl className="flex flex-col gap-5">
            {skills_data.map((group) => (
                <div key={group.id} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="pt-1 text-sm text-muted">{group.title}</dt>
                    <motion.dd
                        className="flex flex-wrap gap-1.5"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-40px' }}
                    >
                        {group.items.map((skill) => (
                            <motion.span key={skill} variants={item}>
                                <Chip size="sm" variant="secondary">{skill}</Chip>
                            </motion.span>
                        ))}
                    </motion.dd>
                </div>
            ))}
        </dl>
    </Section>
)

export default Skills
