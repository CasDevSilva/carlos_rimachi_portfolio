import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Server, Check, Package } from 'lucide-react'

const Viewer = ({ project, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null)

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                if (selectedImage) {
                    setSelectedImage(null)
                    setSelectedIndex(null)
                } else {
                    onClose()
                }
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose, selectedImage])

    const handleImageClick = (image, index) => {
        setSelectedImage(image)
        setSelectedIndex(index)
    }

    const handlePrevImage = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
            setSelectedImage(project.images[selectedIndex - 1])
        }
    }

    const handleNextImage = () => {
        if (selectedIndex < project.images.length - 1) {
            setSelectedIndex(selectedIndex + 1)
            setSelectedImage(project.images[selectedIndex + 1])
        }
    }

    useEffect(() => {
        const handleArrows = (e) => {
            if (selectedImage) {
                if (e.key === 'ArrowLeft') handlePrevImage()
                if (e.key === 'ArrowRight') handleNextImage()
            }
        }
        window.addEventListener('keydown', handleArrows)
        return () => window.removeEventListener('keydown', handleArrows)
    }, [selectedImage, selectedIndex])

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
                onClick={onClose}
            >
                <div
                    className="min-h-screen w-full px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Botón cerrar */}
                    <button
                        onClick={onClose}
                        className="fixed top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-white hover:text-neutral-400 transition z-50"
                    >
                        <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </button>

                    {/* Contenido */}
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="font-title text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 text-sm md:text-base text-neutral-400 mb-6 md:mb-8">
                                <span>{project.category}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                            </div>
                        </motion.div>

                        {/* Links (si existen) */}
                        {project.links && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                                className="flex flex-wrap gap-3 mb-6 md:mb-8"
                            >
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                                {project.links.npm && (
                                    <a
                                        href={project.links.npm}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
                                    >
                                        <Package className="w-4 h-4" />
                                        NPM
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition border border-neutral-700"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                                {project.links.api && (
                                    <a
                                        href={project.links.api}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition border border-neutral-700"
                                    >
                                        <Server className="w-4 h-4" />
                                        API
                                    </a>
                                )}
                            </motion.div>
                        )}

                        {/* Descripción */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl"
                        >
                            {project.description}
                        </motion.p>

                        {/* Features (si existen) */}
                        {project.features && project.features.length > 0 && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="mb-6 md:mb-8"
                            >
                                <h3 className="text-white text-sm md:text-base font-semibold mb-3">
                                    Features
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-neutral-400 text-sm"
                                        >
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Tools */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-8 md:mb-10 lg:mb-12"
                        >
                            <h3 className="text-white text-sm md:text-base font-semibold mb-3">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-neutral-800 text-white rounded-full text-xs md:text-sm"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Galería de imágenes */}
                        {project.images && project.images.length > 0 && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3 className="text-white text-sm md:text-base font-semibold mb-3">
                                    Screenshots
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                                    {project.images.map((image, i) => (
                                        <img
                                            key={i}
                                            src={image}
                                            alt={`${project.title} - ${i + 1}`}
                                            className="w-full rounded-lg cursor-pointer hover:opacity-80 transition"
                                            onClick={() => handleImageClick(image, i)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Video (opcional) */}
                        {project.video && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 md:mt-8"
                            >
                                <h3 className="text-white text-sm md:text-base font-semibold mb-3">
                                    Demo Video
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                                    <video
                                        controls
                                        className="w-full rounded-lg"
                                    >
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Lightbox de imagen */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8"
                        onClick={() => {
                            setSelectedImage(null)
                            setSelectedIndex(null)
                        }}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={() => {
                                setSelectedImage(null)
                                setSelectedIndex(null)
                            }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-white hover:text-neutral-400 transition z-[110]"
                        >
                            <X className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                        </button>

                        {/* Navegación prev */}
                        {selectedIndex > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handlePrevImage()
                                }}
                                className="absolute left-2 md:left-4 lg:left-8 text-white hover:text-neutral-400 transition z-[110]"
                            >
                                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                            </button>
                        )}

                        {/* Imagen */}
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={selectedImage}
                            alt="Vista ampliada"
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Navegación next */}
                        {selectedIndex < project.images.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleNextImage()
                                }}
                                className="absolute right-2 md:right-4 lg:right-8 text-white hover:text-neutral-400 transition z-[110]"
                            >
                                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                            </button>
                        )}

                        {/* Contador */}
                        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 text-white text-xs md:text-sm">
                            {selectedIndex + 1} / {project.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Viewer