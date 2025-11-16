import React from 'react'
import { motion } from "framer-motion"
import { certifications_data } from '../data/portfolio'
import { ExternalLink, CheckCircle2, Clock } from 'lucide-react'

const Certifications = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-4 md:gap-6'
        >
            <h2 className='font-title text-xl md:text-2xl'>Certificaciones</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
                {certifications_data.map((cert, index) => {
                    const isObtained = cert.credential !== "#"

                    return (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`
                                relative p-4 md:p-5 rounded-lg border
                                ${isObtained
                                    ? 'border-green-500/30 bg-green-500/5'
                                    : 'border-neutral-700 bg-neutral-800/30'}
                                hover:border-neutral-600 transition-all group
                            `}
                        >
                            {/* Badge de estado */}
                            <div className="absolute top-3 right-3">
                                {isObtained ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Clock className="w-5 h-5 text-neutral-500" />
                                )}
                            </div>

                            {/* Contenido */}
                            <div className="pr-8">
                                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                                    {cert.name}
                                </h3>

                                {isObtained ? (
                                    <a
                                        href={cert.credential}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs md:text-sm text-green-400 hover:text-green-300 transition-colors"
                                    >
                                        Ver credencial
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                ) : (
                                    <span className="text-xs md:text-sm text-neutral-500 italic">
                                        En progreso
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.section>
    )
}

export default Certifications