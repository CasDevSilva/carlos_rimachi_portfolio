import { Modal, buttonVariants } from '@heroui/react'
import { Github } from 'lucide-react'
import { links_data } from '../data/portfolio'

const QRModal = ({ state }) => (
    <Modal state={state}>
        <Modal.Backdrop variant="blur">
            <Modal.Container size="xs">
                <Modal.Dialog aria-label="QR de GitHub">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                        <Modal.Heading>Mi GitHub</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body className="flex flex-col items-center gap-3">
                        <div className="rounded-xl bg-white p-3">
                            <img src="/assets/github_qr.png" alt="Código QR del perfil de GitHub" className="h-48 w-48" />
                        </div>
                        <p className="text-xs text-muted">
                            Generado con{' '}
                            <a
                                href="https://www.npmjs.com/package/qr-forge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-foreground"
                            >
                                qr-forge
                            </a>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <a
                            href={links_data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonVariants({ variant: 'secondary', fullWidth: true })} gap-2`}
                        >
                            <Github size={16} />
                            Ir al perfil
                        </a>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    </Modal>
)

export default QRModal
