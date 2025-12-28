export const name_data = "Carlos Rimachi Silva"
export const about_data = {
    intro: "Ingeniero de Software (Analista Programador) versátil. Especializado en el desarrollo de soluciones críticas y de alto impacto, impulsando la eficiencia del código con visión Cloud y apoyo de IA.",
    bio: [
        "Profesional con 3 años de experiencia en un rol de Ingeniería de Software altamente demandante y versátil. Mi experiencia se extiende a través de todo el ciclo de desarrollo, cubriendo desde el Backend y la implementación de funcionalidades ERP/sistemas de misión crítica, hasta la garantía de calidad (Testing, JUnits) y el análisis de datos.",
        "Mi stack se consolida en torno a JavaScript y SQL, con una lógica de programación avanzada que prioriza la entrega de soluciones funcionales rápidas que se optimizan de forma continua. Acelero la productividad y el refactoring mediante la integración inteligente de herramientas de Inteligencia Artificial."
    ]
};

export const skills_data = [
    {
        id: 1,
        title: "Lenguajes Dominantes",
        description: "JavaScript (ES6+), SQL (PL/SQL, T-SQL). Python/Java.",
    },
    {
        id: 2,
        title: "Backend & Runtime",
        description: "Node.js (Desarrollo de APIs/Tools), API REST Design, Arquitectura de Microservicios (implícito en la migración/WMS).",
    },
    {
        id: 3,
        title: "Bases de Datos",
        description: "Diseño de BBDD relacionales (Tablas, Procedures, Triggers), Optimización de Consultas, MongoDB (por MVPs), Prisma (ORM, por MVPs).",
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description: "Microsoft Azure (AZ-900, DP-900), Gestión de Migraciones, Contenerización (futuro), CI/CD.",

    },
    {
        id: 5,
        title: "Dev Tools & Metodología",
        description: "Gestión de Versiones (GIT), Testing (JUnits), Análisis Funcional, Optimización con IA, Refactoring de código legacy.",
    },
    {
        id: 6,
        title: "Desarrollo de Producto",
        description: "Desarrollo de NPM Packages (Chronoxjs, Passforgejs), Prototipado rápido de MVPs, Desarrollo Fullstack (React/Interfaces Específicas).",
    }
]

export const projects_data = {
    tools: [
        {
            id: 1,
            title: "passforgejs",
            poster: "/assets/projects/passforge/passforge.png",
            category: "CLI Tool",
            year: "2025",
            description: "Generador de contraseñas seguro y personalizable desde línea de comandos. Permite configurar longitud (1-40 chars), tipos de caracteres (mayúsculas, minúsculas, números, símbolos), cantidad de contraseñas a generar y copia automática al portapapeles. Publicado en NPM con arquitectura modular.",
            tools: [
                "Node.js",
                "Commander.js",
                "Randexp",
                "copy-paste",
                "kleur"
            ],
            features: [
                "Longitud configurable (1-40 caracteres)",
                "Control granular: mayúsculas, minúsculas, números, símbolos",
                "Generación múltiple (hasta 25 contraseñas)",
                "Copia automática al portapapeles con --copy",
                "Validación de parámetros con mensajes de error claros",
                "Output colorizado en terminal",
                "Arquitectura modular (commands/utils)"
            ],
            images: [
                "/assets/projects/passforge/passforge.png"
            ],
            links: {
                npm: "https://www.npmjs.com/package/passforgejs",
                github: "https://github.com/CasDevSilva/passforge.git"
            }
        },
        {
            id: 2,
            title: "chronoxjs",
            poster: "/assets/projects/chronox/chronox.png",
            category: "CLI Tool",
            year: "2025",
            description: "CLI de productividad para desarrolladores que permite trackear tiempo por proyecto, calcular costos por hora, generar reportes visuales en consola y exportar datos a Excel (.xlsx). Almacenamiento local con SQLite, sin dependencia de internet. Ideal para freelancers y equipos pequeños.",
            tools: [
                "Node.js",
                "better-sqlite3",
                "cli-table3",
                "ExcelJS",
                "chalk",
                "Day.js"
            ],
            features: [
                "Gestión de proyectos con alias cortos",
                "Tracking automático de duración de sesiones",
                "Configuración de tarifa por hora por proyecto",
                "Reportes visuales en consola con cli-table3",
                "Exportación a Excel (.xlsx) con dos hojas",
                "Almacenamiento local SQLite (offline-first)",
                "10 comandos CLI: init, add, close, list, start, stop, sessions, set-rate, report, export"
            ],
            images: [
                "/assets/projects/chronox/chronox.png"
            ],
            links: {
                npm: "https://www.npmjs.com/package/chronoxjs",
                github: "https://github.com/CasDevSilva/chronox.git"
            }
        },
        {
            id: 3,
            title: "qr-forge",
            poster: "/assets/projects/qr-forge/qr-forge.png",
            category: "CLI Tool",
            year: "2025",
            description: "Generador de códigos QR desde línea de comandos con colores personalizables, incrustación de logos, procesamiento batch y múltiples formatos de salida. Soporta PNG, SVG, HTML embed e IMG tag con preview en terminal.",
            tools: [
                "Node.js",
                "Commander.js",
                "QRCode",
                "Sharp",
                "Chalk",
                "Figures"
            ],
            features: [
                "Colores QR y fondo configurables (hex #RGB, #RRGGBB, #RRGGBBAA)",
                "Incrustación de logo con tamaño ajustable (5-40%)",
                "Procesamiento batch desde archivo de texto",
                "Formatos: PNG, SVG, HTML embed, IMG tag base64",
                "Preview en terminal antes de guardar",
                "Nivel de corrección de errores automático (H con logo)",
                "Directorio de exportación por defecto (~/.qr-forge/exports/)"
            ],
            images: [
                "/assets/projects/qr-forge/qr-forge.png"
            ],
            links: {
                npm: "https://www.npmjs.com/package/qr-forge",
                github: "https://github.com/CasDevSilva/qr-forge.git"
            }
        },
        {
            id: 4,
            title: "placeholdjs",
            poster: "/assets/projects/placehold/placehold.png",
            category: "CLI Tool",
            year: "2025",
            description: "Generador offline de imágenes placeholder desde línea de comandos. Crea placeholders con dimensiones, colores y texto personalizables. Soporta batch processing y múltiples formatos sin dependencia de servicios externos.",
            tools: [
                "Node.js",
                "Commander.js",
                "Sharp",
                "Chalk",
                "Figures"
            ],
            features: [
                "Dimensiones personalizables (WIDTHxHEIGHT, máx 10000px)",
                "Colores de fondo y texto configurables (hex)",
                "Texto personalizado o auto-display de dimensiones",
                "Font size automático o manual (1-200px)",
                "Procesamiento batch (hasta 1000 imágenes)",
                "Formatos: PNG, JPG, WebP",
                "Opción de borde integrada",
                "100% offline, sin rate limits"
            ],
            images: [
                "/assets/projects/placehold/placehold.png"
            ],
            links: {
                npm: "https://www.npmjs.com/package/placeholdjs",
                github: "https://github.com/CasDevSilva/placehold.git"
            }
        }
    ],
    mvps: [
        {
            id: 1,
            title: "CodeSnap",
            poster: "/assets/projects/codesnap/codesnap.png",
            category: "Developer Tool",
            year: "2025",
            description: "Aplicación web fullstack que transforma fragmentos de código en imágenes estilizadas y compartibles. Permite personalizar temas de sintaxis, fuentes, colores y efectos de sombra. Genera URLs públicas con expiración automática de 1 hora.",
            tools: ["React 19", "Vite", "TailwindCSS", "Prism.js", "html2canvas", "Express.js", "MongoDB", "Mongoose"],
            features: [
                "Preview en tiempo real con syntax highlighting",
                "8 temas de color + 3 fuentes personalizables",
                "Generación de imagen PNG con html2canvas",
                "URLs compartibles con TTL de 1 hora",
                "Historial local (últimos 5 snippets)",
                "Rate limiting (20 req/15 min)",
                "Diseño responsive mobile-first"
            ],
            images: [
                "/assets/projects/codesnap/codesnap_main.png",
                "/assets/projects/codesnap/codesnap_modal.png",
                "/assets/projects/codesnap/codesnap_share.png"
            ],
            links: {
                live: "https://codesnap-frontend.vercel.app",
                github: "https://github.com/CasDevSilva/codesnap_frontend.git",
                api: "https://codesnap-api.onrender.com"
            }
        },
    ]
}

export const education_data = [
    {
        id: 1,
        specialization: "Computación e Informática",
        college: "Cibertec",
        time: "2019 - 2021",
        status: "Egresado"
    },
    {
        id: 2,
        specialization: "Ingeniería de Software",
        college: "Universidad Tecnológica del Perú [UTP]",
        time: "2024",
        status: "Convalidando"
    }
]

export const experience_data = [
    {
        id: 1,
        position: "Ingeniero de Software y Desarrollador Fullstack",
        time: "Enero 2024 - Diciembre 2025",
        description: [
            {
                point: "Arquitectura de Software, Desarrollo End-to-End, Lógica de Negocio, Dominio de SQL/BBDD.",
                description: "Diseño, desarrollo e implementación completa (tablas, procedures, triggers, lógica) de un Warehouse Management System desde cero. Desarrollo Fullstack de interfaces de radiofrecuencia para operarios."
            },
            {
                point: "Migración de Sistemas, Documentación Técnica, Visión Cloud (por la modernización).",
                description: "Gestión de Migraciones y Soluciones Cloud. Integración de nuevas funcionalidades y apoyo en la migración de sistemas clave (ej. Nóminas), asegurando la documentación técnica (pantallas de radiofrecuencia) y la modernización de los procesos."
            }
        ]
    },
    {
        id: 2,
        position: "Pasantia a Barcelona (BCN) - Especialista en Migración y Optimización de Backend",
        time: "Septiembre 2023 - Diciembre 2023",
        description: [
            {
                point: "Refactoring de Código, Optimización de Rendimiento, Integración de Sistemas (WMS/Robots).",
                description: "Optimización y Desarrollo Backend. Participación en la migración de ERP (Synlab/FedeFarma), transcripción de lógica (XML a JavaScript) y optimización significativa del rendimiento Backend (Java/JavaScript/APIs REST)."
            },
            {
                point: "Comunicación con Clientes, Análisis Funcional, Desarrollo de Interfaces Específicas.",
                description: "Desarrollo Funcional y Gestión de Requerimientos. Diseño de pantallas de radiofrecuencia y mantenimiento de la comunicación con clientes (España) para la validación de requisitos técnicos/funcionales."
            }
        ]
    },
    {
        id: 3,
        position: "Analista Programador y Soporte de Producción",
        time: "Febrero 2023 - Septiembre 2023",
        description: [
            {
                point: "Soporte en Producción, Manejo de BBDD (Triggers), Requerimientos Rápidos.",
                description: "Soporte Crítico y Desarrollo de Módulos. Soporte directo a clientes (Bonpreu), desarrollando nuevos requerimientos y optimizando funcionalidades. Creación de triggers y procedures avanzados para el manejo de datos de alto volumen."
            }
        ]
    },
]

export const certifications_data = [
    {
        id: 1,
        name: "Azure Fundamentals (AZ-900)",
        credential: "https://learn.microsoft.com/api/credentials/share/es-es/CarlosAlbertoRimachiSilva-1159/5AAA956AFBF8B151?sharingId=F4E1307CF6252DC3"
    },
    {
        id: 2,
        name: "Data Fundamentals (DP-900)",
        credential: "https://learn.microsoft.com/api/credentials/share/es-es/CarlosAlbertoRimachiSilva-1159/4F09E4207AEBCC21?sharingId=F4E1307CF6252DC3"
    },
    {
        id: 3,
        name: "Security Fundamentals (SC-900)",
        credential: "#"
    },
    {
        id: 4,
        name: "Azure Developer Associate (AZ-204)",
        credential: "#"
    },
    {
        id: 5,
        name: "Devops Designer (AZ-400)",
        credential: "#"
    },
    {
        id: 6,
        name: "Azure Security Engineer (AZ-500)",
        credential: "#"
    },
]
