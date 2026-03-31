# CLAUDE.md

## Commands

```bash
npm run dev       # Start dev server (localhost:5173) with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test framework is configured.

## Architecture

React 19 SPA with Vite. Two-layer architecture: R3F canvas (fixed, background) + HTML overlay (absolute, z-index 10). Scroll state lives in `ScrollContext` (provides `p, vw, vh, u`); all canvas components consume it directly — no prop drilling. Page = 3vh (300vh). Camera travels Y-axis as `p` increases: `camera.y = -p * vh`.

**File structure:**

src/
├── main.jsx
├── App.jsx (ScrollProvider + 3vh relative div + HtmlOverlay + AppCanvas)
├── sections.js (SECTIONS array — 3 sections × 1vh)
├── index.css
├── contexts/
│   └── ScrollContext.jsx (useScroll hook → p, vw, vh, u)
├── components/
│   ├── Canvas.jsx (R3F Canvas wrapper, position: fixed)
│   ├── CameraRig.jsx (camera Z tied to vh; Y driven by p via useFrame)
│   ├── world/
│   │   ├── World.jsx (lights + BauhausWorld)
│   │   └── BauhausWorld.jsx (hand-placed 3D shapes + imported models, no text)
│   ├── html/ (HTML overlay — independent of camera)
│   │   ├── HtmlOverlay.jsx
│   │   ├── NavBar.jsx (position: fixed)
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ProjectsSection.jsx
│   └── three/ (reusable 3D primitives + model wrapper)
│       ├── BauCircle3D.jsx  — rotation: rotationX (radians)
│       ├── BauRect3D.jsx    — rotation: degrees, rotationX: radians
│       ├── BauTriangle3D.jsx — rotation: degrees, rotationX: radians
│       ├── BauLine3D.jsx    — rotation: degrees, rotationX: radians
│       ├── BauModel3D.jsx   — imported .glb models, original materials
│       ├── BauAxes.jsx
│       └── Box3D.jsx
├── constants/
│   ├── colors.js
│   └── layout.js (FOV)
└── utils/
    ├── easing.js
    └── coord.js (toW)

## Tech Stack + Libraries

- **Vite** — build tool, `@` alias resolves to `src/`
- **Three.js** — 3D / WebGL rendering
- **@react-three/fiber** — React renderer for Three.js
- **@react-three/drei** — utilities for R3F (OrbitControls, PerspectiveCamera, etc.)
- **Tailwind CSS 4** — minimal, overlay UI only (HUD/controls over canvas)

## Design Notes

**Two-layer system:** R3F canvas owns only 3D geometry (no text). HTML overlay owns all readable content and nav — unaffected by camera. Sections positioned at `top: 0 / 100vh / 200vh` inside the overlay.

**Bauhaus shape placement:** Kandinsky color-form pairings — circles=blue, triangles=yellow, rects=red, lines=black. Shapes distributed Y: 0 → -3×vh with varying Z depths (-20 to -295) for parallax. `rotation` prop = degrees; `rotationX` prop = radians.

**Model imports:** `BauModel3D` accepts `.glb` files loaded via `useGLTF` from drei. Models keep original PBR materials. Props: `path` (string to `/public/models/`), `position` (viewport-relative), `scale`, `rotation` (radians).

**Typography:** Big Shoulders Display (headings/logo) + IBM Plex Mono (labels, nav, body).

## CRITICAL RULES

- Always summarize my prompt before responding. Make sure you understand what I'm saying from my initial prompt, and confirm with me before proceeding. If the prompt is vague in any way, ask many clarifying questions. Do not make assumptions of my knowledge.
- Update CLAUDE.md with minimal text to save tokens.
- Components go in /src/components (own .jsx file).
- When creating new components or pages, use the existing pages to inform your implementation. Keep a consistent logic throughout the application. For example: if a button is implemented a certain way, new buttons should be implemented the same way.
- Verify the build after implementing changes.
- If the pages are not rendering as expected, check small things (typos, misreferences, css classes blocking other objects) before doing a deep dive.

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts most used in Bauhaus design

Color & Theme: Commit to a cohesive aesthetic.

Motion: Use animations for effects and micro-interactions. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>