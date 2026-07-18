# Drawing Canvas

A full-screen, full-viewport drawing canvas built on [p5.js](https://p5js.org/). Brush, eraser, dot, line, rectangle, ellipse, and triangle tools, a token-based color palette, undo/redo, and a "save to gallery" flow that snapshots your drawing to `localStorage`.

**Live demo:** _add your deployed URL here_

## Built with the Monad design system

UI components (button, tooltip, toggle group, alert dialog, slider, sonner toaster) are installed from the public registry at `www.doughawk.design/r`, not vendored — pull any of them into your own project with the [shadcn CLI](https://ui.shadcn.com/docs/cli):

```bash
npx shadcn add @monad/<name>
```

for example:

```bash
npx shadcn add @monad/button
```

The registry is configured in [`components.json`](./components.json).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — the canvas fills the entire viewport, with a floating toolbar in the top-left corner.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve the production build

## Project structure

```
src/
  app/                    # Next.js App Router entry (layout, page, providers, globals.css)
  components/
    drawing/              # DrawingCanvas + DrawingToolbar
    ui/                   # Monad components installed via the shadcn registry
  context/
    drawing-context.tsx   # Shared drawing state — tools, history, undo/redo, save
  hooks/
    use-p5-drawing.ts     # p5.js sketch lifecycle + pointer handling
    use-mobile.ts         # Monad viewport hook
  lib/
    gallery-storage.ts    # localStorage-backed save gallery
    motion.ts             # Monad motion/transition tokens
    tokens.ts             # Monad color ramp tokens
    utils.ts              # cn() class helper
```

p5.js is loaded client-side only (`"use client"` + dynamic `import('p5')`, no SSR) since it depends on the DOM `canvas` API.

## License

MIT — see [LICENSE](./LICENSE).
