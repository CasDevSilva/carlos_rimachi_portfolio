import { ArrowUpRight } from 'lucide-react'
import { certifications_data, education_data } from '../data/portfolio'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

const Education = () => (
    <Section title="Formación">
        <Reveal className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-4">
                <h3 className="text-sm text-muted">Estudios</h3>
                <ul className="flex flex-col gap-4">
                    {education_data.map((edu) => (
                        <li key={edu.id} className="flex flex-col gap-0.5">
                            <span className="font-medium">{edu.specialization}</span>
                            <span className="text-sm text-muted">
                                {edu.college} · {edu.time} · {edu.status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-sm text-muted">Certificaciones</h3>
                <ul className="flex flex-col gap-4">
                    {certifications_data.map((cert) => (
                        <li key={cert.id}>
                            <a
                                href={cert.credential}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col gap-0.5"
                            >
                                <span className="flex items-center gap-1.5 font-medium transition-colors group-hover:text-accent">
                                    {cert.name}
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </span>
                                <span className="text-sm text-muted">Microsoft · {cert.code}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Reveal>
    </Section>
)

export default Education
