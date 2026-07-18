'use client'

import { useDrawingContext, type ToolType, type FillMode } from '@/context/drawing-context'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import {
  Pen,
  Eraser,
  CircleDot,
  Minus,
  Square,
  Circle,
  Triangle,
  RotateCcw,
  RotateCw,
  Trash2,
  Plus,
  X,
  SquareDashed,
  SquareIcon,
  Save,
} from 'lucide-react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import { Slider } from '@/components/ui/slider'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { transitions } from '@/lib/motion'
import { useIsMobile } from '@/hooks/use-mobile'

// Inline elements slide in from the left (they appear to the right of the toggle)
const slideFromLeft = {
  initial: { x: -8, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: transitions.fast },
  exit: { x: -8, opacity: 0, transition: transitions.fast },
}

// Color palette — toolbar expands smoothly, columns stagger in (top + bottom paired)
const PALETTE_COLUMNS = 14
const paletteReveal = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: 'auto',
    opacity: 1,
    transition: {
      width: transitions.normal,
      opacity: { duration: 0.15, delay: 0.03 },
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      width: { ...transitions.fast, delay: 0.02 },
      opacity: { duration: 0.1 },
    },
  },
}
const paletteColumn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.06 } },
}

// Token-based color palette — adapts to light/dark theme automatically
// Top row: full opacity, bottom row: 40% opacity of the same color
const TOKEN_PALETTE: { token: string; label: string; opacity?: number }[] = [
  // Row 1 — full opacity
  { token: '--foreground',       label: 'Foreground' },
  { token: '--tint-red-fg',      label: 'Red' },
  { token: '--tint-orange-fg',   label: 'Orange' },
  { token: '--tint-amber-fg',    label: 'Amber' },
  { token: '--tint-yellow-fg',   label: 'Yellow' },
  { token: '--tint-green-fg',    label: 'Green' },
  { token: '--tint-teal-fg',     label: 'Teal' },
  { token: '--tint-cyan-fg',     label: 'Cyan' },
  { token: '--tint-blue-fg',     label: 'Blue' },
  { token: '--tint-indigo-fg',   label: 'Indigo' },
  { token: '--tint-violet-fg',   label: 'Violet' },
  { token: '--tint-purple-fg',   label: 'Purple' },
  { token: '--tint-pink-fg',     label: 'Pink' },
  { token: '--tint-rose-fg',     label: 'Rose' },
  // Row 2 — 40% opacity (matched column-for-column)
  { token: '--foreground',       label: 'Light Foreground', opacity: 0.4 },
  { token: '--tint-red-fg',      label: 'Light Red',        opacity: 0.4 },
  { token: '--tint-orange-fg',   label: 'Light Orange',     opacity: 0.4 },
  { token: '--tint-amber-fg',    label: 'Light Amber',      opacity: 0.4 },
  { token: '--tint-yellow-fg',   label: 'Light Yellow',     opacity: 0.4 },
  { token: '--tint-green-fg',    label: 'Light Green',      opacity: 0.4 },
  { token: '--tint-teal-fg',     label: 'Light Teal',       opacity: 0.4 },
  { token: '--tint-cyan-fg',     label: 'Light Cyan',       opacity: 0.4 },
  { token: '--tint-blue-fg',     label: 'Light Blue',       opacity: 0.4 },
  { token: '--tint-indigo-fg',   label: 'Light Indigo',     opacity: 0.4 },
  { token: '--tint-violet-fg',   label: 'Light Violet',     opacity: 0.4 },
  { token: '--tint-purple-fg',   label: 'Light Purple',     opacity: 0.4 },
  { token: '--tint-pink-fg',     label: 'Light Pink',       opacity: 0.4 },
  { token: '--tint-rose-fg',     label: 'Light Rose',       opacity: 0.4 },
]

/** Encode token + optional opacity into a single string for brushColor state */
function encodeColor(token: string, opacity?: number): string {
  return opacity != null && opacity < 1 ? `${token}/${opacity}` : token
}

/** Decode brushColor string back to token + opacity */
function decodeColor(color: string): { token: string; opacity?: number } {
  const i = color.lastIndexOf('/')
  if (i === -1) return { token: color }
  const token = color.slice(0, i)
  const opacity = parseFloat(color.slice(i + 1))
  return isNaN(opacity) ? { token: color } : { token, opacity }
}

const TOOLS: { value: ToolType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'brush', label: 'Brush', icon: Pen },
  { value: 'eraser', label: 'Eraser', icon: Eraser },
  { value: 'dot', label: 'Dot', icon: CircleDot },
  { value: 'line', label: 'Line', icon: Minus },
  { value: 'rectangle', label: 'Rectangle', icon: Square },
  { value: 'ellipse', label: 'Ellipse', icon: Circle },
  { value: 'triangle', label: 'Triangle', icon: Triangle },
]

// Mobile only shows brush + eraser + dot
const MOBILE_TOOLS = TOOLS.slice(0, 3)

const SHAPE_TOOLS: ToolType[] = ['rectangle', 'ellipse', 'triangle']
const TOOLS_WITH_SIZE: ToolType[] = ['brush', 'eraser', 'dot', 'line', 'rectangle', 'ellipse', 'triangle']

const MAX_BRUSH_SIZE = 50
const BRUSH_SIZES = [2, 8, 20] as const

function Separator({ className }: { className?: string }) {
  return <div className={cn("self-stretch w-px bg-foreground/10 mx-1", className)} />
}

/**
 * Floating toolbar for the drawing canvas. In the site this component also
 * supported a "header-embed" layout so it could sit inline in the docs nav —
 * that variant only made sense wired into the site header, so the standalone
 * app always renders the floating, fixed-position layout.
 */
export function DrawingToolbar() {
  const {
    menuOpen,
    setMenuOpen,
    activeTool,
    setActiveTool,
    fillMode,
    setFillMode,
    brushSize,
    setBrushSize,
    brushColor,
    setBrushColor,
    dotMaxSize,
    setDotMaxSize,
    undo,
    redo,
    canUndo,
    canRedo,
    clearCanvas,
    saveCanvas,
  } = useDrawingContext()

  const isMobile = useIsMobile()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [trashDialogOpen, setTrashDialogOpen] = useState(false)
  const [colorPickerOpen, setColorPickerOpen] = useState(true)

  // Default color picker closed on mobile
  useEffect(() => {
    if (isMobile) setColorPickerOpen(false)
  }, [isMobile])

  const [sizeInput, setSizeInput] = useState(String(brushSize))

  const handleSave = useCallback(async () => {
    const entry = await saveCanvas()
    if (entry) {
      toast.success('Saved to gallery')
    } else {
      toast.error('Nothing to save')
    }
  }, [saveCanvas])

  const handleToolChange = (values: string[]) => {
    if (values.length > 0) {
      setActiveTool(values[0] as ToolType)
    }
  }

  const handleFillModeChange = (values: string[]) => {
    if (values.length > 0) {
      setFillMode(values[0] as FillMode)
    }
  }

  const cycleBrushSize = useCallback(() => {
    const idx = BRUSH_SIZES.indexOf(brushSize as typeof BRUSH_SIZES[number])
    const next = BRUSH_SIZES[idx === -1 ? 0 : (idx + 1) % BRUSH_SIZES.length]
    setBrushSize(next)
    setSizeInput(String(next))
  }, [brushSize, setBrushSize])

  const brushSizeIndex = useMemo(() => {
    const idx = BRUSH_SIZES.indexOf(brushSize as typeof BRUSH_SIZES[number])
    return idx === -1 ? 0 : idx
  }, [brushSize])

  if (!mounted) return null

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex items-center gap-1 pointer-events-auto h-14 fixed left-4 top-4 max-md:max-w-[calc(100vw-2rem)]",
          trashDialogOpen ? 'z-40' : 'z-[60]'
        )}
      >
        {/* Menu Toggle — +/X button */}
        <Button
          variant="outline"
          size="icon-lg"
          className="rounded-full bg-background dark:bg-background"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close tool menu' : 'Open tool menu'}
        >
          <Plus
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              menuOpen && 'rotate-45'
            )}
          />
        </Button>

        {/* Trash — next to +/X, only while the tool menu is open so it never
            lingers as a stray button when the menu is collapsed */}
        {menuOpen && canUndo && (
          <Button
            onClick={() => setTrashDialogOpen(true)}
            variant="destructive"
            size="icon-lg"
            aria-label="Clear canvas"
          >
            <Trash2 className="h-3.5 w-3.5 shrink-0" />
          </Button>
        )}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="tool-menu"
              {...slideFromLeft}
              className="flex items-center gap-2 rounded-[16px] border border-border bg-background dark:bg-muted px-[--spacing(3)] py-[--spacing(1.5)] shadow-xs">
            {/* Color swatch — far left */}
            <div className="flex items-center gap-1.5">
              {/* Current color indicator + toggle */}
              <button
                onClick={() => setColorPickerOpen((v) => !v)}
                className="h-6 w-6 rounded-full border border-foreground/15 cursor-pointer transition-transform hover:scale-110 shrink-0"
                style={{
                  backgroundColor: brushColor.startsWith('--')
                    ? `var(${decodeColor(brushColor).token})`
                    : brushColor,
                  opacity: decodeColor(brushColor).opacity ?? 1,
                }}
                aria-label="Toggle color palette"
              />

              {/* Expanded swatch grid — desktop only (mobile uses dropdown) */}
              <AnimatePresence>
                {colorPickerOpen && !isMobile && (
                  <motion.div
                    key="swatch-grid"
                    variants={paletteReveal}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex gap-px"
                  >
                    {Array.from({ length: PALETTE_COLUMNS }, (_, colIdx) => (
                      <motion.div
                        key={colIdx}
                        variants={paletteColumn}
                        className="flex flex-col gap-px"
                      >
                        {[TOKEN_PALETTE[colIdx], TOKEN_PALETTE[colIdx + PALETTE_COLUMNS]].map((entry) => {
                          const colorKey = encodeColor(entry.token, entry.opacity)
                          return (
                            <button
                              key={colorKey}
                              onClick={() => setBrushColor(colorKey)}
                              className={cn(
                                'h-3.5 w-3.5 rounded-[2px] border border-foreground/15 transition-transform hover:scale-125 cursor-pointer',
                                brushColor === colorKey && 'ring-1 ring-foreground ring-offset-1 ring-offset-background scale-110'
                              )}
                              style={{
                                backgroundColor: `var(${entry.token})`,
                                opacity: entry.opacity ?? 1,
                              }}
                              aria-label={entry.label}
                            />
                          )
                        })}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* Tool Selector — full on desktop, brush+eraser on mobile */}
            <ToggleGroup
              value={[activeTool]}
              onValueChange={handleToolChange}
              size="sm"
            >
              {/* Mobile: only brush + eraser */}
              <div className="flex md:hidden">
                {MOBILE_TOOLS.map(({ value, label, icon: Icon }) => (
                  <ToggleGroupItem key={value} value={value} aria-label={label}>
                    <Icon className="size-3.5" />
                  </ToggleGroupItem>
                ))}
              </div>
              {/* Desktop: all tools */}
              <div className="hidden md:flex">
                {TOOLS.map(({ value, label, icon: Icon }) => (
                  <ToggleGroupItem key={value} value={value} aria-label={label}>
                    <Icon className="size-3.5" />
                  </ToggleGroupItem>
                ))}
              </div>
            </ToggleGroup>

            {/* Mobile only: stroke weight cycling button */}
            {isMobile && (
              <button
                className="inline-flex items-center justify-center h-7 min-w-7 rounded-[min(var(--radius-component-sm),12px)] px-1.5 border border-border bg-transparent hover:bg-muted transition-all cursor-pointer"
                onClick={cycleBrushSize}
                aria-label={`Line width: ${brushSize}px`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" className="text-current">
                  <circle cx="7" cy="7" r={[2, 3.5, 5.5][brushSizeIndex]} fill="currentColor" />
                </svg>
              </button>
            )}

            {/* Desktop only: shape fill mode + brush size */}
            <div className="hidden md:contents">

              {/* Contextual Sub-options */}
              <div className="flex items-center gap-1.5">
                {/* Fill mode for shapes */}
                <AnimatePresence>
                  {SHAPE_TOOLS.includes(activeTool) && (
                    <motion.div
                      key="fill-mode"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1, transition: transitions.normal }}
                      exit={{ width: 0, opacity: 0, transition: transitions.fast }}
                      className="overflow-hidden"
                    >
                      <ToggleGroup
                        value={[fillMode]}
                        onValueChange={handleFillModeChange}
                        size="sm"
                      >
                        <ToggleGroupItem value="outline" aria-label="Outline">
                          <SquareDashed className="size-3.5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="filled" aria-label="Filled">
                          <SquareIcon className="size-3.5 fill-current" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </motion.div>
                  )}
                  {activeTool === 'dot' && (
                    <motion.div
                      key="dot-slider"
                      {...slideFromLeft}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">Max</span>
                        <div className="w-16 shrink-0">
                          <Slider
                            value={[dotMaxSize]}
                            onValueChange={(v) => setDotMaxSize(Array.isArray(v) ? v[0] : v)}
                            min={8}
                            max={100}
                          />
                        </div>
                        <span className="text-[10px] tabular-nums text-muted-foreground w-5 text-right">{dotMaxSize}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Brush size input */}
                {TOOLS_WITH_SIZE.includes(activeTool) ? (
                  <input
                    type="text"
                    inputMode="numeric"
                    value={sizeInput}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '')
                      setSizeInput(raw)
                    }}
                    onBlur={() => {
                      const num = parseInt(sizeInput, 10)
                      if (isNaN(num) || num < 1) {
                        setBrushSize(1)
                        setSizeInput('1')
                      } else if (num > MAX_BRUSH_SIZE) {
                        setBrushSize(MAX_BRUSH_SIZE)
                        setSizeInput(String(MAX_BRUSH_SIZE))
                      } else {
                        setBrushSize(num)
                        setSizeInput(String(num))
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
                    }}
                    className="w-9 h-[30px] text-xs text-foreground tabular-nums text-center rounded-[min(var(--radius-component-sm),10px)] border border-border bg-transparent outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/20 px-1"
                  />
                ) : null}
              </div>
            </div>

            <Separator />

            {/* Undo / Redo / Save */}
            <div className="flex items-center gap-0.5">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      onClick={undo}
                      disabled={!canUndo}
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Undo"
                    />
                  }
                >
                  <RotateCcw className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Undo</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      onClick={redo}
                      disabled={!canRedo}
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Redo"
                    />
                  }
                >
                  <RotateCw className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Redo</TooltipContent>
              </Tooltip>

              {/* Save to gallery — visible when color palette is collapsed */}
              <AnimatePresence>
                {!colorPickerOpen && canUndo && (
                  <motion.div key="save-btn" {...slideFromLeft}>
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            onClick={handleSave}
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Save to gallery"
                          />
                        }
                      >
                        <Save className="size-3.5" />
                      </TooltipTrigger>
                      <TooltipContent side="bottom">Save to gallery</TooltipContent>
                    </Tooltip>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: color palette dropdown below toolbar */}
      <AnimatePresence>
        {menuOpen && colorPickerOpen && isMobile && (
          <motion.div
            key="mobile-palette"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0, transition: transitions.fast }}
            exit={{ opacity: 0, y: -4, transition: transitions.fast }}
            className="fixed inset-x-0 top-[4.5rem] z-[60] pointer-events-auto px-4"
          >
            <div className="flex justify-between gap-1 rounded-[min(var(--radius-component-sm),12px)] border border-border bg-background dark:bg-muted px-1.5 py-1 shadow-lg">
              {Array.from({ length: PALETTE_COLUMNS }, (_, colIdx) => (
                <div key={colIdx} className="flex flex-1 flex-col gap-1">
                  {[TOKEN_PALETTE[colIdx], TOKEN_PALETTE[colIdx + PALETTE_COLUMNS]].map((entry) => {
                    const colorKey = encodeColor(entry.token, entry.opacity)
                    return (
                      <button
                        key={colorKey}
                        onClick={() => {
                          setBrushColor(colorKey)
                          setColorPickerOpen(false)
                        }}
                        className={cn(
                          'aspect-square w-full rounded-sm border border-foreground/15 transition-transform hover:scale-110 cursor-pointer',
                          brushColor === colorKey && 'ring-2 ring-foreground ring-offset-1 ring-offset-background scale-105'
                        )}
                        style={{
                          backgroundColor: `var(${entry.token})`,
                          opacity: entry.opacity ?? 1,
                        }}
                        aria-label={entry.label}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog open={trashDialogOpen} onOpenChange={setTrashDialogOpen}>
        <AlertDialogContent size="sm" className="relative">
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute top-3 right-3"
            onClick={() => setTrashDialogOpen(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear canvas?</AlertDialogTitle>
            <AlertDialogDescription>
              Would you like to save your drawing before clearing?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              variant="outline"
              className="hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
              onClick={() => {
                clearCanvas()
                setTrashDialogOpen(false)
              }}
            >
              <Trash2 className="h-3.5 w-3.5 mr-1.5" />
              Delete
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={async () => {
                await handleSave()
                clearCanvas()
                setTrashDialogOpen(false)
              }}
            >
              <Save className="h-3.5 w-3.5 mr-1.5" />
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  )
}
