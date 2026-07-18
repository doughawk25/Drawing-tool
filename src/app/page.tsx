'use client'

import { DrawingProvider } from '@/context/drawing-context'
import { DrawingCanvas, DrawingToolbar } from '@/components/drawing'

export default function Home() {
  return (
    <DrawingProvider>
      <main className="relative h-dvh w-full overflow-hidden">
        <DrawingToolbar />
        <DrawingCanvas />
      </main>
    </DrawingProvider>
  )
}
