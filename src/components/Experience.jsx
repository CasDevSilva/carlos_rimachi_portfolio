import { Accordion, Chip } from '@heroui/react'
import { experience_data } from '../data/portfolio'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

const Experience = () => (
    <Section title="Experiencia">
        <Reveal>
            <Accordion defaultExpandedKeys={[experience_data[0].id]} className="w-full">
                {experience_data.map((exp) => (
                    <Accordion.Item key={exp.id} id={exp.id}>
                        <Accordion.Heading>
                            <Accordion.Trigger className="items-start gap-4 py-4">
                                <span className="flex flex-1 flex-col gap-1 text-left">
                                    <span className="text-base font-medium text-foreground md:text-lg">{exp.position}</span>
                                    <span className="text-sm text-muted">
                                        <span className="text-foreground/80">{exp.company}</span> · {exp.time}
                                    </span>
                                </span>
                                <Accordion.Indicator />
                            </Accordion.Trigger>
                        </Accordion.Heading>
                        <Accordion.Panel>
                            <Accordion.Body className="flex flex-col gap-5 pb-5">
                                <ul className="flex flex-col gap-4">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                            <p className="text-sm leading-relaxed text-muted md:text-base">
                                                {item.title && <strong className="font-medium text-foreground">{item.title}. </strong>}
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                {exp.stack && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.stack.map((tech) => (
                                            <Chip key={tech} size="sm" variant="secondary">{tech}</Chip>
                                        ))}
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Reveal>
    </Section>
)

export default Experience
