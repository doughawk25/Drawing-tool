'use client'

import { useDrawingContext } from '@/context/drawing-context'
import { useP5Drawing } from '@/hooks/use-p5-drawing'
import { cn } from '@/lib/utils'

// Pen cursor SVG — 16x16, hotspot at bottom-left tip (1,15)
const PEN_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E") 1 15, crosshair`

const TOOL_CURSORS: Record<string, string> = {
  brush: '',
  eraser: 'cursor-cell',
  line: 'cursor-crosshair',
  rectangle: 'cursor-crosshair',
  ellipse: 'cursor-crosshair',
  triangle: 'cursor-crosshair',
}

/**
 * Full-viewport p5.js drawing surface. Unlike the site version, this is not an
 * overlay toggled on top of other page content — the canvas is always the
 * active drawing surface, so there's no cursor/pen mode switch to gate on.
 */
export function DrawingCanvas() {
  const { activeTool } = useDrawingContext()
  const { containerRef } = useP5Drawing()

  const cursorClass = TOOL_CURSORS[activeTool] || 'cursor-crosshair'

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed inset-0 z-0 pointer-events-auto [&_canvas]:!block [&_canvas]:!w-full [&_canvas]:!h-full',
        cursorClass
      )}
      style={{
        touchAction: 'none',
        ...(activeTool === 'brush' ? { cursor: PEN_CURSOR } : {}),
      }}
    />
  )
}
