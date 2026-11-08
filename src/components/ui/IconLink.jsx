import { Tooltip, buttonVariants } from '@heroui/react'

// Enlace con forma de botón de icono y tooltip accesible.
const IconLink = ({ href, label, children, className = '' }) => (
    <Tooltip delay={250}>
        <Tooltip.Trigger
            render={(props) => (
                <a
                    {...props}
                    role={undefined}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`${buttonVariants({ variant: 'ghost', isIconOnly: true })} ${className}`}
                >
                    {children}
                </a>
            )}
        />
        <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
)

export default IconLink
