import { useState } from 'react'
import { Button } from '@heroui/react'
import { Check, Copy, Mail } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { email_data } from '../data/portfolio'

// Copia el correo al portapapeles; si el navegador lo bloquea, abre mailto.
const CopyEmail = ({ variant = 'secondary', showAddress = false }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email_data)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${email_data}`
        }
    }

    return (
        <Button variant={variant} onPress={handleCopy} className="gap-2">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={copied ? 'ok' : 'idle'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                >
                    {copied ? <Check size={16} /> : showAddress ? <Copy size={16} /> : <Mail size={16} />}
                    {copied ? 'Correo copiado' : showAddress ? email_data : 'Contacto'}
                </motion.span>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">{copied ? 'Correo copiado al portapapeles' : ''}</span>
        </Button>
    )
}

export default CopyEmail
