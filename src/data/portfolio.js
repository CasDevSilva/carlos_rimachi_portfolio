export const name_data = "Carlos Rimachi Silva"
export const role_data = "Analista de Sistemas Empresariales"
export const location_data = "Lima, Perú"
export const email_data = "sca.dev.silva@gmail.com"

export const links_data = {
    linkedin: "https://www.linkedin.com/in/carlos-alberto-rimachi-silva-365839258/",
    github: "https://github.com/CasDevSilva",
    cv: "/assets/docs/CV_Carlos_Rimachi_Silva.pdf",
    recommendation: "/assets/docs/Carta_recomendacion_CarlosRimachi.pdf",
}

export const about_data = {
    intro: "Mi fuerte es la lógica de negocio y los datos: SQL y PL/SQL avanzados, backend en Java y JavaScript, y llevar un requerimiento del análisis al despliegue. Acelero la entrega con IA.",
}

// Cifras de cabecera: solo datos verificables.
export const facts_data = [
    { id: 1, value: "+3", label: "años de experiencia" },
    { id: 2, value: "30+", label: "módulos desplegados" },
    { id: 3, value: "4", label: "paquetes en npm" },
]

export const experience_data = [
    {
        id: 1,
        position: "Analista de Sistemas Empresariales",
        company: "Fonbienes Perú EAFC S.A.",
        time: "Enero 2026 – Presente",
        stack: ["Oracle 19c", "PL/SQL", "Java 21", "Spring Boot", "JSP", "Flutter", "Docker"],
        highlights: [
            {
                title: "Alcance",
                text: "Más de 30 módulos desplegados entre el ERP, la plataforma interna y las aplicaciones para asociados, del modelado en Oracle a la interfaz web y móvil. Entre ellos, ASOX (Spring Boot y Flutter) y un motor de comisiones con reglas configurables.",
            },
            {
                title: "Arquitectura y datos",
                text: "Modelado Oracle y lógica en PL/SQL con reglas parametrizables que el área de negocio administra sin intervención de desarrollo, capas reutilizables entre módulos y diseño alineado a la normativa SMV.",
            },
            {
                title: "Integraciones",
                text: "Diseño de la recaudación multibanco (Scotiabank ISO 8583, BCP REST) con idempotencia ante doble cobro. Firma digital con Certezia operativa en desarrollo.",
            },
            {
                title: "Legacy y despliegue",
                text: "Ingeniería inversa de +3,000 objetos Oracle, auditoría y corrección de datos en producción, y despliegue con Docker y Podman en Rocky Linux 9 con flujo GitLab.",
            },
        ],
    },
    {
        id: 2,
        position: "Ingeniero de Software y Desarrollador Fullstack",
        company: "Deister Software Perú",
        time: "Enero 2024 – Diciembre 2025",
        stack: ["PL/SQL", "SQL", "JavaScript", "Java", "Git"],
        highlights: [
            {
                text: "Diseño e implementación desde cero de un Warehouse Management System: tablas, procedures, triggers y lógica de negocio.",
            },
            {
                text: "Interfaces de radiofrecuencia para operarios y apoyo en la migración de sistemas clave, como Nóminas.",
            },
        ],
    },
    {
        id: 3,
        position: "Pasantía · Migración y Optimización de Backend",
        company: "Deister Software BCN",
        time: "Septiembre 2023 – Diciembre 2023",
        stack: ["Java", "JavaScript", "XML", "REST", "SQL"],
        highlights: [
            {
                text: "Migración de ERP (Synlab/FedeFarma): transcripción de lógica XML a JavaScript y optimización de backend Java/APIs REST.",
            },
            {
                text: "Validación de requisitos con clientes en España y diseño de pantallas de radiofrecuencia.",
            },
        ],
    },
    {
        id: 4,
        position: "Analista Programador y Soporte de Producción",
        company: "Deister Software Perú",
        time: "Febrero 2023 – Septiembre 2023",
        stack: ["SQL", "PL/SQL", "JavaScript"],
        highlights: [
            {
                text: "Soporte directo a clientes (Bonpreu), nuevos requerimientos, y triggers y procedures para datos de alto volumen.",
            },
        ],
    },
]

export const skills_data = [
    {
        id: 1,
        title: "Datos",
        items: ["Oracle 19c", "PL/SQL", "T-SQL", "Modelado de datos", "Optimización de consultas"],
    },
    {
        id: 2,
        title: "Backend",
        items: ["Java 21", "Spring Boot 3", "Java EE / JSP", "Node.js", "JavaScript", "Python", "REST", "JWT"],
    },
    {
        id: 3,
        title: "Frontend y móvil",
        items: ["React", "Flutter", "Tailwind CSS"],
    },
    {
        id: 4,
        title: "Cloud y DevOps",
        items: ["Azure", "AWS Bedrock", "Docker", "Podman", "Linux", "GitLab"],
    },
    {
        id: 5,
        title: "Método",
        items: ["Análisis funcional", "Scrumban", "Ingeniería inversa", "Desarrollo asistido por IA"],
    },
]

export const projects_data = {
    tools: [
        {
            id: 1,
            title: "passforgejs",
            poster: "/assets/projects/passforge/passforge.png",
            category: "CLI Tool",
            year: "2025",
            summary: "Generador de contraseñas seguras desde la terminal.",
            description: "Generador de contraseñas seguro y personalizable desde línea de comandos. Permite configurar longitud (1-40 chars), tipos de caracteres (mayúsculas, minúsculas, números, símbolos), cantidad de contraseñas a generar y copia automática al portapapeles. Publicado en NPM con arquitectura modular.",
            tools: ["Node.js", "Commander.js", "Randexp", "copy-paste", "kleur"],
            features: [
                "Longitud configurable (1-40 caracteres)",
                "Control granular: mayúsculas, minúsculas, números, símbolos",
                "Generación múltiple (hasta 25 contraseñas)",
                "Copia automática al portapapeles con --copy",
                "Validación de parámetros con mensajes de error claros",
                "Arquitectura modular (commands/utils)",
            ],
            links: {
                npm: "https://www.npmjs.com/package/passforgejs",
                github: "https://github.com/CasDevSilva/passforge.git",
            },
        },
        {
            id: 2,
            title: "chronoxjs",
            poster: "/assets/projects/chronox/chronox.png",
            category: "CLI Tool",
            year: "2025",
            summary: "Time tracking por proyecto con reportes y exportación a Excel.",
            description: "CLI de productividad para desarrolladores que permite trackear tiempo por proyecto, calcular costos por hora, generar reportes visuales en consola y exportar datos a Excel (.xlsx). Almacenamiento local con SQLite, sin dependencia de internet. Ideal para freelancers y equipos pequeños.",
            tools: ["Node.js", "better-sqlite3", "cli-table3", "ExcelJS", "chalk", "Day.js"],
            features: [
                "Gestión de proyectos con alias cortos",
                "Tracking automático de duración de sesiones",
                "Tarifa por hora configurable por proyecto",
                "Reportes visuales en consola",
                "Exportación a Excel (.xlsx) con dos hojas",
                "Almacenamiento local SQLite (offline-first)",
            ],
            links: {
                npm: "https://www.npmjs.com/package/chronoxjs",
                github: "https://github.com/CasDevSilva/chronox.git",
            },
        },
        {
            id: 3,
            title: "qr-forge",
            poster: "/assets/projects/qr-forge/qr-forge.png",
            category: "CLI Tool",
            year: "2025",
            summary: "Códigos QR con colores, logo y procesamiento batch.",
            description: "Generador de códigos QR desde línea de comandos con colores personalizables, incrustación de logos, procesamiento batch y múltiples formatos de salida. Soporta PNG, SVG, HTML embed e IMG tag con preview en terminal.",
            tools: ["Node.js", "Commander.js", "QRCode", "Sharp", "Chalk", "Figures"],
            features: [
                "Colores de QR y fondo configurables (hex)",
                "Incrustación de logo con tamaño ajustable (5-40%)",
                "Procesamiento batch desde archivo de texto",
                "Formatos: PNG, SVG, HTML embed, IMG tag base64",
                "Preview en terminal antes de guardar",
                "Corrección de errores automática (H con logo)",
            ],
            links: {
                npm: "https://www.npmjs.com/package/qr-forge",
                github: "https://github.com/CasDevSilva/qr-forge.git",
            },
        },
        {
            id: 4,
            title: "placeholdjs",
            poster: "/assets/projects/placehold/placehold.png",
            category: "CLI Tool",
            year: "2025",
            summary: "Imágenes placeholder offline, sin servicios externos.",
            description: "Generador offline de imágenes placeholder desde línea de comandos. Crea placeholders con dimensiones, colores y texto personalizables. Soporta batch processing y múltiples formatos sin dependencia de servicios externos.",
            tools: ["Node.js", "Commander.js", "Sharp", "Chalk", "Figures"],
            features: [
                "Dimensiones personalizables (WIDTHxHEIGHT, máx 10000px)",
                "Colores de fondo y texto configurables (hex)",
                "Font size automático o manual",
                "Procesamiento batch (hasta 1000 imágenes)",
                "Formatos: PNG, JPG, WebP",
                "100% offline, sin rate limits",
            ],
            links: {
                npm: "https://www.npmjs.com/package/placeholdjs",
                github: "https://github.com/CasDevSilva/placehold.git",
            },
        },
    ],
}

export const education_data = [
    {
        id: 1,
        specialization: "Computación e Informática",
        college: "Cibertec",
        time: "2019 – 2021",
        status: "Egresado",
    },
    {
        id: 2,
        specialization: "Ingeniería de Software",
        college: "Universidad Tecnológica del Perú",
        time: "2024",
        status: "Convalidando",
    },
]

export const certifications_data = [
    {
        id: 1,
        name: "Azure Fundamentals",
        code: "AZ-900",
        credential: "https://learn.microsoft.com/api/credentials/share/es-es/CarlosAlbertoRimachiSilva-1159/5AAA956AFBF8B151?sharingId=F4E1307CF6252DC3",
    },
    {
        id: 2,
        name: "Data Fundamentals",
        code: "DP-900",
        credential: "https://learn.microsoft.com/api/credentials/share/es-es/CarlosAlbertoRimachiSilva-1159/4F09E4207AEBCC21?sharingId=F4E1307CF6252DC3",
    },
]
