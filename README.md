# Gnaneswar Tunga — Portfolio

A minimalist personal portfolio website built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Stack

| Layer | Choice |
|-------|--------|
| Build tool | Vite 8 |
| UI | React 18 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Icons | lucide-react |
| Animations | Framer Motion (used sparingly) |
| Fonts | Instrument Serif · Inter (Google Fonts) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check
npx tsc --noEmit

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/        # One file per UI section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx   # Light/dark theme state + persistence
├── data/
│   └── content.ts         # ALL copy lives here — edit without touching JSX
├── hooks/
│   └── useScrollReveal.ts # Lightweight IntersectionObserver hook
├── App.tsx
├── main.tsx
└── style.css              # Global styles + Tailwind v4 entry
```

## Editing Content

Open **`src/data/content.ts`** — every piece of copy (name, bio paragraphs, project list, skills, experience bullets, contact links) is typed and centralized there. No text is scattered in JSX files.

### Updating your links

```ts
// src/data/content.ts
export const siteData = {
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  resume: '/resume.pdf',        // put PDF in /public/resume.pdf
};
```

### Adding a project

```ts
// src/data/content.ts → projects array
{
  title: 'My New Project',
  description: 'A short description.',
  tags: ['Java', 'React'],
  github: 'https://github.com/you/repo',
  demo: 'https://myapp.vercel.app',
  featured: true,              // shows "Featured" badge
}
```

## Theme

- Defaults to system preference (`prefers-color-scheme`).
- User's choice is persisted in `localStorage`.
- Dark class is applied **before paint** (inline script in `index.html`) to avoid flash of unstyled content.
- Toggle button is top-right of the nav (sun/moon icon swap animation).

## Deployment

### Vercel / Netlify (recommended)

Push to GitHub, connect the repo — both platforms auto-detect Vite. No configuration needed.

### GitHub Pages

```bash
npm run build
# deploy the dist/ folder
```

Add `base: '/repo-name/'` to `vite.config.ts` if deploying to a sub-path.

### Manual static hosting

The `dist/` folder after `npm run build` is a fully self-contained static site.

## Customization Tips

- **Accent color**: Add a CSS variable in `src/style.css` and use it sparingly on links/CTAs.
- **Resume PDF**: Drop `resume.pdf` in the `/public` directory and update `siteData.resume` to `'/resume.pdf'`.
- **Favicon**: Replace `/public/favicon.svg` with your own SVG.
- **Font swap**: Change the Google Fonts `<link>` in `index.html` and update `--font-serif` / `--font-sans` in `style.css`.
