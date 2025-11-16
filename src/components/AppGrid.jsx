import React, { useState } from 'react'
import { motion } from "framer-motion"
import Viewer from './Viewer'

const AppGrid = ({ title, projects, columns = "lg:grid-cols-4" }) => {
const [selectedProject, setSelectedProject] = useState(null)

return (
    <>
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-3 md:gap-4'
        >
            <h2 className='font-title text-xl md:text-2xl'>{title}</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-3 md:gap-4 font-content`}>
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedProject(project)}
                        className='relative h-64 rounded-lg bg-cover bg-center overflow-hidden group cursor-pointer'
                        style={{
                        backgroundImage: `url(${project.poster})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60 transition-all"></div>
                        <h3 className='absolute bottom-4 left-4 text-white text-lg font-bold z-10'>
                        {project.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        {selectedProject && (
            <Viewer
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        )}
    </>
    )
}

export default AppGrid;