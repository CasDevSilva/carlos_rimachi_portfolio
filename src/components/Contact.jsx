import React, { useState } from 'react'
import { Award, FileUser, Github, Linkedin, Mail, X, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { email_data } from '../data/portfolio'

const Contact = () => {
    const [showEmailPopup, setShowEmailPopup] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email_data)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <div className='flex flex-row gap-4 md:gap-5 lg:gap-6'>
                <motion.button
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setShowEmailPopup(true)}
                >
                    <Mail className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition cursor-pointer" />
                </motion.button>
                <motion.a
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    href='https://www.linkedin.com/in/carlos-alberto-rimachi-silva-365839258/'
                >
                    <Linkedin className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition" />
                </motion.a>
                <motion.a
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    href='https://github.com/CasDevSilva'
                >
                    <Github className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition" />
                </motion.a>
                <motion.a
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    href='#'
                >
                    <FileUser className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition" />
                </motion.a>
                <motion.a
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    href='/assets/docs/Carta_recomendacion_CarlosRimachi.pdf'
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Carta de Recomendación"
                >
                    <Award className="w-6 h-6 md:w-7 md:h-7 hover:text-yellow-400 transition" />
                </motion.a>
            </div>

            {/* Email Popup */}
            <AnimatePresence>
                {showEmailPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowEmailPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 md:p-8 max-w-md w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={() => setShowEmailPopup(false)}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Contenido */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-title text-lg text-white">Contáctame</h3>

                                {/* Email con botón copiar */}
                                <div className="flex items-center gap-2 bg-neutral-800 rounded-lg px-4 py-3 w-full">
                                    <span className="text-neutral-300 text-sm md:text-base flex-1 text-center">
                                        {email_data}
                                    </span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="text-neutral-400 hover:text-white transition p-1"
                                        title="Copiar email"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>

                                {/* Botón enviar email */}
                                <a
                                    href={`mailto:${email_data}`}
                                    className="w-full bg-white text-black font-medium py-2.5 rounded-lg text-center text-sm hover:bg-neutral-200 transition"
                                >
                                    Enviar email
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Contact