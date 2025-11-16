import React from 'react'
import { motion } from "framer-motion"
import { experience_data } from '../data/portfolio'

const Experience = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/4 flex flex-col gap-8 md:gap-12"
        >
            <h2 className="font-title text-xl md:text-2xl">Experiencia</h2>

            <div className="relative">
                {/* Línea vertical del timeline */}
                <div className="absolute left-0 md:left-2 top-0 bottom-0 w-[2px] bg-neutral-800" />

                {/* Experiencias */}
                <div className="space-y-8 md:space-y-12">
                    {experience_data.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Punto del timeline */}
                            <div className="absolute left-0 md:left-2 top-1 w-[10px] h-[10px] -translate-x-[4px] rounded-full bg-white border-2 border-neutral-900" />

                            {/* Contenido */}
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold text-white">
                                        {exp.position}
                                    </h3>
                                    <p className="text-xs md:text-sm text-neutral-500 mt-1">
                                        {exp.time}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {exp.description.map((detail, idx) => (
                                        <div key={idx} className="space-y-1.5">
                                            <p className="text-sm md:text-base text-neutral-300 font-medium">
                                                {detail.point}
                                            </p>
                                            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                                                {detail.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Experience