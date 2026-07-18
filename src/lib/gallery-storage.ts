// Gallery storage — persists canvas snapshots to localStorage
// Each entry includes an owner ID so users can only delete their own drawings

const STORAGE_KEY = 'monad-gallery'
const OWNER_KEY = 'monad-gallery-owner'

export interface GalleryEntry {
  id: string
  dataUrl: string
  width: number
  height: number
  createdAt: number
  ownerId: string
}

/** Get or create a persistent owner ID for this browser */
function getOwnerId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem(OWNER_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(OWNER_KEY, id)
  }
  return id
}

/** Load all gallery entries */
export function loadGallery(): GalleryEntry[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

/** Save a new canvas snapshot to the gallery */
export function saveToGallery(dataUrl: string, width: number, height: number): GalleryEntry {
  const entry: GalleryEntry = {
    id: crypto.randomUUID(),
    dataUrl,
    width,
    height,
    createdAt: Date.now(),
    ownerId: getOwnerId(),
  }
  const gallery = loadGallery()
  gallery.push(entry)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery))
  } catch {
    // localStorage full — remove oldest entry and retry
    if (gallery.length > 1) {
      gallery.shift()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery))
    }
  }
  return entry
}

/** Delete a gallery entry (only if owned by this browser) */
export function deleteFromGallery(id: string): boolean {
  const gallery = loadGallery()
  const idx = gallery.findIndex((e) => e.id === id)
  if (idx === -1) return false
  if (gallery[idx].ownerId !== getOwnerId()) return false
  gallery.splice(idx, 1)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery))
  return true
}

/** Check if the current user owns a gallery entry */
export function isOwnEntry(entry: GalleryEntry): boolean {
  return entry.ownerId === getOwnerId()
}
