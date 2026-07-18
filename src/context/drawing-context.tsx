'use client'

import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import type p5 from 'p5'
import { saveToGallery, type GalleryEntry } from '@/lib/gallery-storage'

export type ToolType = 'brush' | 'eraser' | 'dot' | 'line' | 'rectangle' | 'ellipse' | 'triangle'
export type FillMode = 'outline' | 'filled'

export type DrawAction =
  | { type: 'freehand'; points: [number, number][]; color: string; size: number }
  | { type: 'eraser'; points: [number, number][]; size: number }
  | { type: 'dots'; dots: { x: number; y: number; size: number }[]; color: string }
  | { type: 'line'; start: [number, number]; end: [number, number]; color: string; size: number }
  | { type: 'rectangle'; start: [number, number]; end: [number, number]; color: string; size: number; fillMode: FillMode }
  | { type: 'ellipse'; start: [number, number]; end: [number, number]; color: string; size: number; fillMode: FillMode }
  | { type: 'triangle'; start: [number, number]; end: [number, number]; color: string; size: number; fillMode: FillMode }

interface DrawingContextType {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  activeTool: ToolType
  setActiveTool: (tool: ToolType) => void
  fillMode: FillMode
  setFillMode: (mode: FillMode) => void
  brushSize: number
  setBrushSize: (size: number) => void
  brushColor: string
  setBrushColor: (color: string) => void
  dotMaxSize: number
  setDotMaxSize: (size: number) => void
  history: DrawAction[]
  setHistory: React.Dispatch<React.SetStateAction<DrawAction[]>>
  clearCanvas: () => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
  clearRedoStack: () => void
  saveCanvas: () => Promise<GalleryEntry | null>
  p5Ref: React.MutableRefObject<p5 | null>
  viewTransformRef: React.MutableRefObject<{ zoom: number; offsetX: number; offsetY: number }>
}

const DrawingContext = createContext<DrawingContextType | undefined>(undefined)

const HISTORY_CAP = 100

export function DrawingProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(true)
  const [activeTool, setActiveTool] = useState<ToolType>('brush')
  const [fillMode, setFillMode] = useState<FillMode>('outline')
  const [brushSize, setBrushSize] = useState(2)
  const [brushColor, setBrushColor] = useState('--foreground')
  const [dotMaxSize, setDotMaxSize] = useState(36)
  const [history, setHistory] = useState<DrawAction[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = sessionStorage.getItem('drawingState')
      if (saved) {
        const parsed = JSON.parse(saved)
        return parsed.history || []
      }
    } catch {}
    return []
  })
  const [redoStack, setRedoStack] = useState<DrawAction[]>([])
  const p5Ref = useRef<p5 | null>(null)
  const viewTransformRef = useRef({ zoom: 1, offsetX: 0, offsetY: 0 })

  const saveToSession = useCallback((newHistory: DrawAction[]) => {
    try {
      sessionStorage.setItem('drawingState', JSON.stringify({ history: newHistory }))
    } catch {}
  }, [])

  const clearCanvas = useCallback(() => {
    setHistory([])
    setRedoStack([])
    saveToSession([])
    // Immediately clear the canvas pixels so stale drawings don't persist
    if (p5Ref.current) {
      p5Ref.current.clear()
    }
  }, [saveToSession])

  const undo = useCallback(() => {
    setHistory((prev) => {
      if (prev.length === 0) return prev
      const removed = prev[prev.length - 1]
      setRedoStack((rs) => [...rs, removed])
      const newHistory = prev.slice(0, -1)
      saveToSession(newHistory)
      return newHistory
    })
  }, [saveToSession])

  const redo = useCallback(() => {
    setRedoStack((prev) => {
      if (prev.length === 0) return prev
      const restored = prev[prev.length - 1]
      setHistory((h) => {
        const newHistory = [...h, restored]
        saveToSession(newHistory)
        return newHistory
      })
      return prev.slice(0, -1)
    })
  }, [saveToSession])

  const saveCanvas = useCallback(async (): Promise<GalleryEntry | null> => {
    try {
      // Use the p5 canvas directly — html2canvas can't reliably capture WebGL/p5 canvases
      const p5Canvas = p5Ref.current
      if (!p5Canvas) return null

      const cnv = (p5Canvas as unknown as { canvas: HTMLCanvasElement }).canvas
        ?? document.querySelector('canvas')
      if (!cnv) return null

      // Composite: background color + drawing
      const w = cnv.width
      const h = cnv.height
      const offscreen = document.createElement('canvas')
      offscreen.width = w
      offscreen.height = h
      const ctx = offscreen.getContext('2d')
      if (!ctx) return null

      // Fill with page background color
      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
      ctx.fillStyle = bgColor.startsWith('#') || bgColor.startsWith('rgb')
        ? bgColor
        : `oklch(${bgColor})`
      ctx.fillRect(0, 0, w, h)

      // Draw the p5 canvas on top
      ctx.drawImage(cnv, 0, 0)

      const dataUrl = offscreen.toDataURL('image/png')
      return saveToGallery(dataUrl, w, h)
    } catch (err) {
      console.error('Save failed:', err)
      return null
    }
  }, [])

  return (
    <DrawingContext.Provider
      value={{
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
        history,
        setHistory,
        clearCanvas,
        undo,
        redo,
        canUndo: history.length > 0,
        canRedo: redoStack.length > 0,
        clearRedoStack: useCallback(() => setRedoStack([]), []),
        saveCanvas,
        p5Ref,
        viewTransformRef,
      }}
    >
      {children}
    </DrawingContext.Provider>
  )
}

export function useDrawingContext() {
  const context = useContext(DrawingContext)
  if (context === undefined) {
    throw new Error('useDrawingContext must be used within a DrawingProvider')
  }
  return context
}

export { HISTORY_CAP }
