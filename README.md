# Portfolio - Carlos Rimachi Silva

Portfolio personal minimalista showcaseando proyectos, experiencia y certificaciones como Ingeniero de Software y Desarrollador Fullstack.

## 🚀 Demo

[Ver portfolio en vivo](#) ← Actualiza con tu URL de Vercel/Netlify

## ✨ Features

- **Diseño minimalista** - Single page scroll con diseño limpio y profesional
- **Totalmente responsive** - Mobile-first approach
- **Animaciones fluidas** - Implementadas con Framer Motion
- **Grid dinámico de proyectos** - Showcaseando MVPs y herramientas npm
- **Timeline de experiencia** - Visualización clara de trayectoria profesional
- **Sistema de certificaciones** - Diferenciación visual entre obtenidas y en progreso
- **Modal interactivo** - Para visualizar detalles de proyectos
- **SEO optimizado** - Meta tags y estructura semántica

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.jsx              # Sección principal con intro
│   ├── ProjectGrid.jsx       # Componente reutilizable para grids
│   ├── Viewer.jsx            # Modal para detalles de proyectos
│   ├── Certifications.jsx    # Grid de certificaciones
│   ├── Experience.jsx        # Timeline de experiencia laboral
│   ├── About.jsx             # Información personal
│   ├── Skills.jsx            # Stack técnico
│   └── Footer.jsx            # Contacto y enlaces
├── data/
│   └── portfolio.js          # Toda la data del portfolio
├── App.jsx                   # Componente raíz
└── main.jsx                  # Entry point
```

## 🎨 Componentes Principales

### ProjectGrid (DRY Implementation)
Componente reutilizable que renderiza tanto aplicaciones como herramientas:

```jsx
<ProjectGrid
  title="Aplicaciones"
  projects={projects_data.mvps}
  columns="lg:grid-cols-4"
/>
```

### Certifications
Sistema visual que diferencia certificaciones obtenidas (verde) vs en progreso (gris):
- Iconos dinámicos (CheckCircle / Clock)
- Links externos a credenciales de Microsoft
- Grid responsive de 2 columnas

### Experience Timeline
Timeline vertical con:
- Línea de tiempo animada
- Puntos interactivos por posición
- Descripción detallada de logros y responsabilidades

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/tu-portfolio.git
cd tu-portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ⚙️ Configuración

### 1. Actualizar Información Personal

Edita `src/data/portfolio.js`:

```javascript
export const personal_info = {
  name: "Tu Nombre",
  title: "Tu Título Profesional",
  bio: "Tu descripción...",
  // ...
}
```

### 2. Agregar Proyectos

```javascript
export const projects_data = {
  mvps: [
    {
      id: 1,
      title: "Nombre del Proyecto",
      poster: "/path/to/image.jpg",
      description: "Descripción del proyecto",
      tech: ["React", "Node.js", "PostgreSQL"],
      links: {
        github: "url",
        demo: "url"
      }
    }
  ],
  tools: [/* similar structure */]
}
```

### 3. Actualizar Certificaciones

```javascript
export const certifications_data = [
  {
    id: 1,
    name: "Nombre de la Certificación",
    credential: "URL_de_credencial" // o "#" si está en progreso
  }
]
```

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy 🎉

O usando CLI:

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
# Build settings
Build command: npm run build
Publish directory: dist
```

## 🎯 Personalización

### Colores

Actualiza `tailwind.config.js` para cambiar la paleta de colores:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // ...
      }
    }
  }
}
```

### Tipografía

Las fuentes se configuran en `index.html` y `tailwind.config.js`.

Por defecto usa:
- **Títulos:** Inter Bold
- **Contenido:** Inter Regular

## 📊 SEO

Actualiza meta tags en `index.html`:

```html
<title>Carlos Rimachi Silva - Ingeniero de Software</title>
<meta name="description" content="Portfolio de Ingeniero de Software...">
<meta property="og:title" content="Tu nombre">
<meta property="og:description" content="Tu descripción">
```

## 🔧 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run preview    # Preview del build
npm run lint       # Linter
```

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu propio portfolio.

## 🤝 Contacto

- **Email:** [sca.dev.silva@gmail.com](mailto:sca.dev.silva@gmail.com)
- **LinkedIn:** [Carlos Rimachi Silva](https://www.linkedin.com/in/carlos-alberto-rimachi-silva-365839258/)
- **GitHub:** [CasDevSilva](https://github.com/CasDevSilva)

---

**Desarrollado con 💚 por Carlos Rimachi Silva**

*Portfolio diseñado para showcasear experiencia en desarrollo fullstack, proyectos indie y certificaciones Microsoft Azure.*
