import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, Chip, useOverlayState } from '@heroui/react'
import { ArrowUpRight } from 'lucide-react'
import { projects_data } from '../data/portfolio'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import PackageModal from './PackageModal'

const Packages = () => {
    const state = useOverlayState()
    const [selected, setSelected] = useState(null)

    const open = (project) => {
        setSelected(project)
        state.open()
    }

    return (
        <Section title="Paquetes npm">
            <div className="grid gap-3 sm:grid-cols-2">
                {projects_data.tools.map((project, i) => (
                    <Reveal key={project.id} delay={i * 0.06}>
                        <motion.div
                            className="group relative h-full"
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                        >
                            <Card className="h-full border border-border transition-colors group-hover:border-accent/60">
                                <Card.Header className="flex-row items-start justify-between gap-3">
                                    <Card.Title className="font-mono text-base">
                                        {/* El botón cubre toda la tarjeta (after:inset-0): clic accesible y válido en HTML */}
                                        <button
                                            type="button"
                                            onClick={() => open(project)}
                                            className="cursor-pointer text-left outline-none after:absolute after:inset-0 after:rounded-[inherit] focus-visible:after:ring-2 focus-visible:after:ring-accent"
                                        >
                                            {project.title}
                                        </button>
                                    </Card.Title>
                                    <ArrowUpRight
                                        size={18}
                                        className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                                    />
                                </Card.Header>
                                <Card.Content className="gap-4">
                                    <Card.Description>{project.summary}</Card.Description>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tools.slice(0, 3).map((tool) => (
                                            <Chip key={tool} size="sm" variant="secondary">{tool}</Chip>
                                        ))}
                                    </div>
                                </Card.Content>
                            </Card>
                        </motion.div>
                    </Reveal>
                ))}
            </div>

            <PackageModal state={state} project={selected} />
        </Section>
    )
}

export default Packages
