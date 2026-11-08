import { Chip, Modal, buttonVariants } from '@heroui/react'
import { Check, Github, Package } from 'lucide-react'

const PackageModal = ({ state, project }) => (
    <Modal state={state}>
        <Modal.Backdrop variant="blur">
            <Modal.Container size="lg" scroll="inside">
                <Modal.Dialog aria-label={project?.title}>
                    <Modal.CloseTrigger />
                    {project && (
                        <>
                            <Modal.Header className="gap-1">
                                <Modal.Heading className="font-title text-xl">{project.title}</Modal.Heading>
                                <p className="text-sm text-muted">{project.category} · {project.year}</p>
                            </Modal.Header>
                            <Modal.Body className="flex flex-col gap-5">
                                <img
                                    src={project.poster}
                                    alt={`Vista de ${project.title}`}
                                    className="h-44 w-full rounded-lg border border-border bg-surface-secondary object-contain p-3"
                                />
                                <p className="text-sm leading-relaxed text-muted md:text-base">{project.description}</p>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                                            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tools.map((tool) => (
                                        <Chip key={tool} size="sm" variant="secondary">{tool}</Chip>
                                    ))}
                                </div>
                            </Modal.Body>
                            <Modal.Footer className="gap-2">
                                <a
                                    href={project.links.npm}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${buttonVariants({ variant: 'primary' })} gap-2`}
                                >
                                    <Package size={16} />
                                    npm
                                </a>
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${buttonVariants({ variant: 'secondary' })} gap-2`}
                                >
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </Modal.Footer>
                        </>
                    )}
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    </Modal>
)

export default PackageModal
