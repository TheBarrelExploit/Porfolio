# Portafolio — Denuar Andrés Ramos Lezama

Portafolio personal de Denuar Andrés Ramos Lezama, Data & ML Engineer. Construido con Next.js 16, Tailwind CSS v4 y Framer Motion.

[![CI](https://github.com/TheBarrelExploit/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/TheBarrelExploit/Portfolio/actions/workflows/ci.yml)

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Estilos**: Tailwind CSS v4 + CSS custom properties
- **Animaciones**: Framer Motion
- **Iconos**: Tabler Icons
- **Tipografía**: Plus Jakarta Sans + Geist Mono (via `next/font`)
- **Deploy**: Vercel (free tier)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción + type-check |
| `npm run lint` | ESLint |

## Deploy

El deploy a producción es automático vía Vercel en cada push a `main`. El workflow de CI (`.github/workflows/ci.yml`) corre lint y build antes del deploy.
