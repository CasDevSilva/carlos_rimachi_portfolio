import React from 'react'
import { Award, FileUser, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div
            className='flex flex-row gap-4 md:gap-5 lg:gap-6'
        >
            <Mail
                className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
            />
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='https://www.linkedin.com/in/carlos-alberto-rimachi-silva-365839258/'
            >
                <Linkedin
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
                />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='https://github.com/CasDevSilva'
            >
                <Github
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
                />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='#'
            >
                <FileUser
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-neutral-400 transition"
                />
            </motion.a>
            <motion.a
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                href='/assets/docs/Carta_recomendacion_CarlosRimachi.pdf'
                target="_blank"
                rel="noopener noreferrer"
                title="Carta de Recomendación"
            >
                <Award
                    className="w-6 h-6 md:w-7 md:h-7 hover:text-yellow-400 transition"
                />
            </motion.a>
        </div>
    )
}

export default Contact