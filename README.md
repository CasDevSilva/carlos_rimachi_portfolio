# Portfolio · Carlos Rimachi Silva

Portfolio-CV minimalista de una sola página: experiencia, paquetes npm, stack y formación.

[Ver en vivo](https://carlosrimachi.netlify.app/)

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 + [HeroUI v3](https://heroui.com) (tema oscuro propio)
- Framer Motion (animaciones)
- Lucide React (iconos)

## Estructura

```
src/
├── components/
│   ├── Hero.jsx            # Nombre, intro y accesos (CV, correo, redes, QR)
│   ├── Experience.jsx      # Experiencia (Accordion de HeroUI)
│   ├── Packages.jsx        # Paquetes npm + PackageModal.jsx
│   ├── Skills.jsx          # Stack agrupado
│   ├── Education.jsx       # Estudios y certificaciones
│   ├── Footer.jsx
│   └── ui/                 # Reveal, Section, Spotlight, ScrollProgress, IconLink
├── data/portfolio.js       # Todo el contenido vive aquí
└── index.css               # Tokens de tema sobre HeroUI
```

## Actualizar contenido

Todo se edita en [`src/data/portfolio.js`](src/data/portfolio.js): experiencia, stack, paquetes, estudios y certificaciones. Los componentes solo pintan esos datos.

## Scripts

```bash
npm install
npm run dev       # desarrollo
npm run build     # producción (dist/)
npm run preview   # previsualizar el build
npm run lint
```

## Despliegue

Netlify: build command `npm run build`, publish directory `dist`.
