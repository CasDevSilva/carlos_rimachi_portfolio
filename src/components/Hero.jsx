import { motion, useReducedMotion } from 'framer-motion'
import { buttonVariants, useOverlayState } from '@heroui/react'
import { Award, FileText, Github, Linkedin, QrCode } from 'lucide-react'
import { about_data, links_data, location_data, name_data, role_data } from '../data/portfolio'
import CopyEmail from './CopyEmail'
import QRModal from './QRModal'
import IconLink from './ui/IconLink'

const ease = [0.22, 1, 0.36, 1]

const Hero = () => {
    const reduce = useReducedMotion()
    const qrState = useOverlayState()
    const words = name_data.split(' ')

    const fade = (delay) => ({
        initial: { opacity: 0, y: reduce ? 0 : 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease },
    })

    return (
        <header className="flex min-h-[85vh] flex-col justify-center gap-7 py-20">
            <motion.p {...fade(0.05)} className="flex items-center gap-3 text-sm text-muted">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                {role_data} · {location_data}
            </motion.p>

            <h1 className="font-title text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
                {words.map((word, i) => (
                    <span key={word} className="inline-block overflow-hidden pb-1 pr-[0.25em] align-bottom">
                        <motion.span
                            className="inline-block"
                            initial={{ y: reduce ? 0 : '110%', opacity: 0, filter: reduce ? 'none' : 'blur(8px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <motion.p {...fade(0.6)} className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {about_data.intro}
            </motion.p>

            <motion.div {...fade(0.75)} className="flex flex-wrap items-center gap-3">
                <a
                    href={links_data.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonVariants({ variant: 'primary' })} gap-2`}
                >
                    <FileText size={16} />
                    Ver CV
                </a>
                <CopyEmail />

                <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />

                <div className="flex items-center gap-1">
                    <IconLink href={links_data.linkedin} label="LinkedIn">
                        <Linkedin size={18} />
                    </IconLink>
                    <IconLink href={links_data.github} label="GitHub">
                        <Github size={18} />
                    </IconLink>
                    <IconLink href={links_data.recommendation} label="Carta de recomendación" className="text-amber-300">
                        <Award size={18} />
                    </IconLink>
                    <button
                        type="button"
                        aria-label="Ver QR de GitHub"
                        title="QR de GitHub"
                        onClick={qrState.open}
                        className={buttonVariants({ variant: 'ghost', isIconOnly: true })}
                    >
                        <QrCode size={18} />
                    </button>
                </div>
            </motion.div>

            <QRModal state={qrState} />
        </header>
    )
}

export default Hero
