import { name_data } from '../data/portfolio'
import CopyEmail from './CopyEmail'
import Reveal from './ui/Reveal'

const Footer = () => (
    <footer className="mt-4 border-t border-border py-10">
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <CopyEmail variant="ghost" showAddress />
            <p className="text-sm text-muted">© {new Date().getFullYear()} {name_data}</p>
        </Reveal>
    </footer>
)

export default Footer
