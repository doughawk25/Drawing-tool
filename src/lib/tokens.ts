export type ColorStep = { value: string; hex: string }

export const tailwindColorRamps: Record<string, Record<string, ColorStep>> = {
  zinc: {
    "50":  { value: "oklch(0.985 0 0)", hex: "#fafafa" },
    "100": { value: "oklch(0.967 0.001 286.375)", hex: "#f4f4f5" },
    "200": { value: "oklch(0.92 0.004 286.32)", hex: "#e4e4e7" },
    "300": { value: "oklch(0.871 0.006 286.286)", hex: "#d4d4d8" },
    "400": { value: "oklch(0.705 0.015 286.067)", hex: "#a1a1aa" },
    "500": { value: "oklch(0.553 0.013 285.938)", hex: "#71717a" },
    "600": { value: "oklch(0.442 0.017 285.786)", hex: "#52525b" },
    "700": { value: "oklch(0.372 0.013 285.805)", hex: "#3f3f46" },
    "800": { value: "oklch(0.274 0.006 286.033)", hex: "#27272a" },
    "900": { value: "oklch(0.21 0.006 285.885)", hex: "#18181b" },
    "950": { value: "oklch(0.145 0.005 286.067)", hex: "#09090b" },
  },
  neutral: {
    "50":  { value: "oklch(0.985 0 0)", hex: "#fafafa" },
    "100": { value: "oklch(0.97 0 0)", hex: "#f5f5f5" },
    "200": { value: "oklch(0.922 0 0)", hex: "#e5e5e5" },
    "300": { value: "oklch(0.87 0 0)", hex: "#d4d4d4" },
    "400": { value: "oklch(0.708 0 0)", hex: "#a3a3a3" },
    "500": { value: "oklch(0.556 0 0)", hex: "#737373" },
    "600": { value: "oklch(0.439 0 0)", hex: "#525252" },
    "700": { value: "oklch(0.371 0 0)", hex: "#404040" },
    "800": { value: "oklch(0.269 0 0)", hex: "#262626" },
    "900": { value: "oklch(0.205 0 0)", hex: "#171717" },
    "950": { value: "oklch(0.145 0 0)", hex: "#0a0a0a" },
  },
  slate: {
    "50":  { value: "oklch(0.984 0.003 247.858)", hex: "#f8fafc" },
    "100": { value: "oklch(0.968 0.007 247.896)", hex: "#f1f5f9" },
    "200": { value: "oklch(0.929 0.013 255.508)", hex: "#e2e8f0" },
    "300": { value: "oklch(0.869 0.022 252.894)", hex: "#cbd5e1" },
    "400": { value: "oklch(0.704 0.04 256.788)", hex: "#94a3b8" },
    "500": { value: "oklch(0.554 0.046 257.417)", hex: "#64748b" },
    "600": { value: "oklch(0.446 0.043 257.281)", hex: "#475569" },
    "700": { value: "oklch(0.372 0.044 257.287)", hex: "#334155" },
    "800": { value: "oklch(0.279 0.041 260.031)", hex: "#1e293b" },
    "900": { value: "oklch(0.208 0.042 265.755)", hex: "#0f172a" },
    "950": { value: "oklch(0.129 0.042 264.695)", hex: "#020617" },
  },
  stone: {
    "50":  { value: "oklch(0.985 0.001 106.423)", hex: "#fafaf9" },
    "100": { value: "oklch(0.97 0.001 106.424)", hex: "#f5f5f4" },
    "200": { value: "oklch(0.923 0.003 48.717)", hex: "#e7e5e4" },
    "300": { value: "oklch(0.869 0.005 56.366)", hex: "#d6d3d1" },
    "400": { value: "oklch(0.709 0.01 56.259)", hex: "#a8a29e" },
    "500": { value: "oklch(0.553 0.013 58.071)", hex: "#78716c" },
    "600": { value: "oklch(0.444 0.011 73.639)", hex: "#57534e" },
    "700": { value: "oklch(0.374 0.01 67.558)", hex: "#44403c" },
    "800": { value: "oklch(0.268 0.007 34.298)", hex: "#292524" },
    "900": { value: "oklch(0.216 0.006 56.043)", hex: "#1c1917" },
    "950": { value: "oklch(0.147 0.004 49.25)", hex: "#0c0a09" },
  },
  gray: {
    "50":  { value: "oklch(0.985 0.002 247.839)", hex: "#f9fafb" },
    "100": { value: "oklch(0.967 0.003 264.542)", hex: "#f3f4f6" },
    "200": { value: "oklch(0.928 0.006 264.531)", hex: "#e5e7eb" },
    "300": { value: "oklch(0.872 0.01 258.338)", hex: "#d1d5db" },
    "400": { value: "oklch(0.707 0.022 261.325)", hex: "#9ca3af" },
    "500": { value: "oklch(0.551 0.018 264.364)", hex: "#6b7280" },
    "600": { value: "oklch(0.446 0.03 256.802)", hex: "#4b5563" },
    "700": { value: "oklch(0.373 0.034 259.733)", hex: "#374151" },
    "800": { value: "oklch(0.278 0.033 256.848)", hex: "#1f2937" },
    "900": { value: "oklch(0.21 0.034 264.665)", hex: "#111827" },
    "950": { value: "oklch(0.13 0.028 261.692)", hex: "#030712" },
  },
  red: {
    "50":  { value: "oklch(0.971 0.013 17.38)", hex: "#fef2f2" },
    "100": { value: "oklch(0.936 0.032 17.717)", hex: "#fee2e2" },
    "200": { value: "oklch(0.885 0.062 18.334)", hex: "#fecaca" },
    "300": { value: "oklch(0.808 0.114 19.571)", hex: "#fca5a5" },
    "400": { value: "oklch(0.704 0.191 22.216)", hex: "#f87171" },
    "500": { value: "oklch(0.637 0.237 25.331)", hex: "#ef4444" },
    "600": { value: "oklch(0.577 0.245 27.325)", hex: "#dc2626" },
    "700": { value: "oklch(0.505 0.213 27.518)", hex: "#b91c1c" },
    "800": { value: "oklch(0.444 0.177 26.899)", hex: "#991b1b" },
    "900": { value: "oklch(0.396 0.141 25.723)", hex: "#7f1d1d" },
    "950": { value: "oklch(0.258 0.092 26.042)", hex: "#450a0a" },
  },
  orange: {
    "50":  { value: "oklch(0.98 0.016 73.684)", hex: "#fff7ed" },
    "100": { value: "oklch(0.954 0.038 75.164)", hex: "#ffedd5" },
    "200": { value: "oklch(0.901 0.076 70.697)", hex: "#fed7aa" },
    "300": { value: "oklch(0.837 0.128 66.29)", hex: "#fdba74" },
    "400": { value: "oklch(0.75 0.183 55.934)", hex: "#fb923c" },
    "500": { value: "oklch(0.705 0.213 47.604)", hex: "#f97316" },
    "600": { value: "oklch(0.646 0.222 41.116)", hex: "#ea580c" },
    "700": { value: "oklch(0.553 0.195 38.402)", hex: "#c2410c" },
    "800": { value: "oklch(0.47 0.157 37.304)", hex: "#9a3412" },
    "900": { value: "oklch(0.408 0.123 38.172)", hex: "#7c2d12" },
    "950": { value: "oklch(0.266 0.079 36.259)", hex: "#431407" },
  },
  amber: {
    "50":  { value: "oklch(0.987 0.022 95.277)", hex: "#fffbeb" },
    "100": { value: "oklch(0.962 0.059 95.617)", hex: "#fef3c7" },
    "200": { value: "oklch(0.924 0.12 95.746)", hex: "#fde68a" },
    "300": { value: "oklch(0.879 0.169 91.605)", hex: "#fcd34d" },
    "400": { value: "oklch(0.828 0.189 84.429)", hex: "#fbbf24" },
    "500": { value: "oklch(0.769 0.188 70.08)", hex: "#f59e0b" },
    "600": { value: "oklch(0.666 0.179 58.318)", hex: "#d97706" },
    "700": { value: "oklch(0.555 0.163 48.998)", hex: "#b45309" },
    "800": { value: "oklch(0.473 0.137 46.201)", hex: "#92400e" },
    "900": { value: "oklch(0.414 0.112 45.904)", hex: "#78350f" },
    "950": { value: "oklch(0.279 0.077 45.635)", hex: "#451a03" },
  },
  yellow: {
    "50":  { value: "oklch(0.987 0.026 102.212)", hex: "#fefce8" },
    "100": { value: "oklch(0.973 0.071 103.193)", hex: "#fef9c3" },
    "200": { value: "oklch(0.945 0.129 101.54)", hex: "#fef08a" },
    "300": { value: "oklch(0.905 0.182 98.111)", hex: "#fde047" },
    "400": { value: "oklch(0.852 0.199 91.936)", hex: "#facc15" },
    "500": { value: "oklch(0.795 0.184 86.047)", hex: "#eab308" },
    "600": { value: "oklch(0.681 0.162 75.834)", hex: "#ca8a04" },
    "700": { value: "oklch(0.554 0.135 66.442)", hex: "#a16207" },
    "800": { value: "oklch(0.476 0.114 61.907)", hex: "#854d0e" },
    "900": { value: "oklch(0.421 0.095 57.708)", hex: "#713f12" },
    "950": { value: "oklch(0.286 0.066 53.813)", hex: "#422006" },
  },
  green: {
    "50":  { value: "oklch(0.982 0.018 155.826)", hex: "#f0fdf4" },
    "100": { value: "oklch(0.962 0.044 156.743)", hex: "#dcfce7" },
    "200": { value: "oklch(0.925 0.084 155.995)", hex: "#bbf7d0" },
    "300": { value: "oklch(0.871 0.15 154.449)", hex: "#86efac" },
    "400": { value: "oklch(0.792 0.209 151.711)", hex: "#4ade80" },
    "500": { value: "oklch(0.723 0.219 149.579)", hex: "#22c55e" },
    "600": { value: "oklch(0.627 0.194 149.214)", hex: "#16a34a" },
    "700": { value: "oklch(0.527 0.154 150.069)", hex: "#15803d" },
    "800": { value: "oklch(0.448 0.119 151.328)", hex: "#166534" },
    "900": { value: "oklch(0.393 0.095 152.535)", hex: "#14532d" },
    "950": { value: "oklch(0.266 0.065 152.934)", hex: "#052e16" },
  },
  teal: {
    "50":  { value: "oklch(0.984 0.014 180.72)", hex: "#f0fdfa" },
    "100": { value: "oklch(0.953 0.051 180.801)", hex: "#ccfbf1" },
    "200": { value: "oklch(0.91 0.096 180.426)", hex: "#99f6e4" },
    "300": { value: "oklch(0.855 0.138 181.071)", hex: "#5eead4" },
    "400": { value: "oklch(0.777 0.152 181.912)", hex: "#2dd4bf" },
    "500": { value: "oklch(0.704 0.14 182.503)", hex: "#14b8a6" },
    "600": { value: "oklch(0.6 0.118 184.704)", hex: "#0d9488" },
    "700": { value: "oklch(0.511 0.096 186.391)", hex: "#0f766e" },
    "800": { value: "oklch(0.437 0.078 188.216)", hex: "#115e59" },
    "900": { value: "oklch(0.386 0.063 188.416)", hex: "#134e4a" },
    "950": { value: "oklch(0.277 0.046 192.524)", hex: "#042f2e" },
  },
  cyan: {
    "50":  { value: "oklch(0.984 0.019 200.873)", hex: "#ecfeff" },
    "100": { value: "oklch(0.956 0.045 203.388)", hex: "#cffafe" },
    "200": { value: "oklch(0.917 0.08 205.041)", hex: "#a5f3fc" },
    "300": { value: "oklch(0.865 0.127 207.078)", hex: "#67e8f9" },
    "400": { value: "oklch(0.789 0.154 211.53)", hex: "#22d3ee" },
    "500": { value: "oklch(0.715 0.143 215.221)", hex: "#06b6d4" },
    "600": { value: "oklch(0.609 0.126 221.723)", hex: "#0891b2" },
    "700": { value: "oklch(0.52 0.105 223.128)", hex: "#0e7490" },
    "800": { value: "oklch(0.45 0.085 224.283)", hex: "#155e75" },
    "900": { value: "oklch(0.398 0.07 227.392)", hex: "#164e63" },
    "950": { value: "oklch(0.302 0.056 229.695)", hex: "#083344" },
  },
  blue: {
    "50":  { value: "oklch(0.97 0.014 254.604)", hex: "#eff6ff" },
    "100": { value: "oklch(0.932 0.032 255.585)", hex: "#dbeafe" },
    "200": { value: "oklch(0.882 0.059 254.128)", hex: "#bfdbfe" },
    "300": { value: "oklch(0.809 0.105 251.813)", hex: "#93c5fd" },
    "400": { value: "oklch(0.707 0.165 254.624)", hex: "#60a5fa" },
    "500": { value: "oklch(0.623 0.214 259.815)", hex: "#3b82f6" },
    "600": { value: "oklch(0.546 0.245 262.881)", hex: "#2563eb" },
    "700": { value: "oklch(0.488 0.243 264.376)", hex: "#1d4ed8" },
    "800": { value: "oklch(0.424 0.199 265.638)", hex: "#1e40af" },
    "900": { value: "oklch(0.379 0.146 265.522)", hex: "#1e3a8a" },
    "950": { value: "oklch(0.282 0.091 267.935)", hex: "#172554" },
  },
  indigo: {
    "50":  { value: "oklch(0.962 0.018 272.314)", hex: "#eef2ff" },
    "100": { value: "oklch(0.93 0.034 272.788)", hex: "#e0e7ff" },
    "200": { value: "oklch(0.87 0.065 274.039)", hex: "#c7d2fe" },
    "300": { value: "oklch(0.785 0.115 274.713)", hex: "#a5b4fc" },
    "400": { value: "oklch(0.673 0.182 276.935)", hex: "#818cf8" },
    "500": { value: "oklch(0.585 0.233 277.117)", hex: "#6366f1" },
    "600": { value: "oklch(0.511 0.262 276.966)", hex: "#4f46e5" },
    "700": { value: "oklch(0.457 0.24 277.023)", hex: "#4338ca" },
    "800": { value: "oklch(0.398 0.195 277.366)", hex: "#3730a3" },
    "900": { value: "oklch(0.359 0.144 278.697)", hex: "#312e81" },
    "950": { value: "oklch(0.257 0.09 281.288)", hex: "#1e1b4b" },
  },
  violet: {
    "50":  { value: "oklch(0.969 0.016 293.756)", hex: "#f5f3ff" },
    "100": { value: "oklch(0.943 0.029 294.588)", hex: "#ede9fe" },
    "200": { value: "oklch(0.894 0.057 293.283)", hex: "#ddd6fe" },
    "300": { value: "oklch(0.811 0.111 293.571)", hex: "#c4b5fd" },
    "400": { value: "oklch(0.702 0.183 293.541)", hex: "#a78bfa" },
    "500": { value: "oklch(0.606 0.25 292.717)", hex: "#8b5cf6" },
    "600": { value: "oklch(0.541 0.281 293.009)", hex: "#7c3aed" },
    "700": { value: "oklch(0.491 0.27 292.581)", hex: "#6d28d9" },
    "800": { value: "oklch(0.432 0.232 292.759)", hex: "#5b21b6" },
    "900": { value: "oklch(0.38 0.189 293.745)", hex: "#4c1d95" },
    "950": { value: "oklch(0.283 0.141 291.089)", hex: "#2e1065" },
  },
  purple: {
    "50":  { value: "oklch(0.977 0.014 308.299)", hex: "#faf5ff" },
    "100": { value: "oklch(0.946 0.033 307.174)", hex: "#f3e8ff" },
    "200": { value: "oklch(0.902 0.063 306.703)", hex: "#e9d5ff" },
    "300": { value: "oklch(0.827 0.119 306.383)", hex: "#d8b4fe" },
    "400": { value: "oklch(0.714 0.203 305.504)", hex: "#c084fc" },
    "500": { value: "oklch(0.627 0.265 303.9)", hex: "#a855f7" },
    "600": { value: "oklch(0.558 0.288 302.321)", hex: "#9333ea" },
    "700": { value: "oklch(0.496 0.265 301.924)", hex: "#7e22ce" },
    "800": { value: "oklch(0.438 0.218 303.724)", hex: "#6b21a8" },
    "900": { value: "oklch(0.381 0.176 304.987)", hex: "#581c87" },
    "950": { value: "oklch(0.291 0.149 302.717)", hex: "#3b0764" },
  },
  pink: {
    "50":  { value: "oklch(0.971 0.014 343.198)", hex: "#fdf2f8" },
    "100": { value: "oklch(0.948 0.028 342.258)", hex: "#fce7f3" },
    "200": { value: "oklch(0.899 0.061 343.231)", hex: "#fbcfe8" },
    "300": { value: "oklch(0.823 0.12 346.018)", hex: "#f9a8d4" },
    "400": { value: "oklch(0.718 0.202 349.761)", hex: "#f472b6" },
    "500": { value: "oklch(0.656 0.241 354.308)", hex: "#ec4899" },
    "600": { value: "oklch(0.592 0.249 0.584)", hex: "#db2777" },
    "700": { value: "oklch(0.525 0.223 3.958)", hex: "#be185d" },
    "800": { value: "oklch(0.459 0.187 3.815)", hex: "#9d174d" },
    "900": { value: "oklch(0.408 0.153 2.432)", hex: "#831843" },
    "950": { value: "oklch(0.284 0.109 3.907)", hex: "#500724" },
  },
  rose: {
    "50":  { value: "oklch(0.969 0.015 12.422)", hex: "#fff1f2" },
    "100": { value: "oklch(0.941 0.03 12.58)", hex: "#ffe4e6" },
    "200": { value: "oklch(0.892 0.058 10.001)", hex: "#fecdd3" },
    "300": { value: "oklch(0.81 0.117 11.638)", hex: "#fda4af" },
    "400": { value: "oklch(0.712 0.194 13.428)", hex: "#fb7185" },
    "500": { value: "oklch(0.645 0.246 16.439)", hex: "#f43f5e" },
    "600": { value: "oklch(0.586 0.253 17.585)", hex: "#e11d48" },
    "700": { value: "oklch(0.514 0.222 16.935)", hex: "#be123c" },
    "800": { value: "oklch(0.455 0.188 13.697)", hex: "#9f1239" },
    "900": { value: "oklch(0.41 0.159 10.539)", hex: "#881337" },
    "950": { value: "oklch(0.271 0.105 12.094)", hex: "#4c0519" },
  },
} as const

// ---------------------------------------------------------------------------
// System Color Tokens (semantic aliases used by components via CSS vars)
// ---------------------------------------------------------------------------

export const colorTokens = {
  brand: {
    primary: { value: "oklch(0.205 0 0)", cssVar: "--primary", label: "Primary", description: "Main brand color, used for primary actions and emphasis" },
    "primary-foreground": { value: "oklch(0.985 0 0)", cssVar: "--primary-foreground", label: "Primary Foreground", description: "Text on primary backgrounds" },
    secondary: { value: "oklch(0.97 0 0)", cssVar: "--secondary", label: "Secondary", description: "Secondary actions and subtle backgrounds" },
    "secondary-foreground": { value: "oklch(0.205 0 0)", cssVar: "--secondary-foreground", label: "Secondary Foreground", description: "Text on secondary backgrounds" },
    accent: { value: "oklch(0.97 0 0)", cssVar: "--accent", label: "Accent", description: "Accent highlights and interactive states" },
    "accent-foreground": { value: "oklch(0.205 0 0)", cssVar: "--accent-foreground", label: "Accent Foreground", description: "Text on accent backgrounds" },
  },
  semantic: {
    destructive: { value: "oklch(0.577 0.245 27.325)", cssVar: "--destructive", label: "Destructive", description: "Error states, destructive actions" },
    success: { value: "oklch(0.627 0.194 149.214)", cssVar: "--success", label: "Success", description: "Success states, confirmations" },
    warning: { value: "oklch(0.769 0.188 70.08)", cssVar: "--warning", label: "Warning", description: "Warning states, caution indicators" },
    info: { value: "oklch(0.623 0.214 259.815)", cssVar: "--info", label: "Info", description: "Informational states" },
  },
  surface: {
    background: { value: "oklch(1 0 0)", cssVar: "--background", label: "Background", description: "Page background" },
    foreground: { value: "oklch(0.145 0 0)", cssVar: "--foreground", label: "Foreground", description: "Default text color" },
    card: { value: "oklch(1 0 0)", cssVar: "--card", label: "Card", description: "Card surfaces" },
    "card-foreground": { value: "oklch(0.145 0 0)", cssVar: "--card-foreground", label: "Card Foreground", description: "Text on card surfaces" },
    muted: { value: "oklch(0.97 0 0)", cssVar: "--muted", label: "Muted", description: "Subdued backgrounds" },
    "muted-foreground": { value: "oklch(0.556 0 0)", cssVar: "--muted-foreground", label: "Muted Foreground", description: "Secondary text" },
    popover: { value: "oklch(1 0 0)", cssVar: "--popover", label: "Popover", description: "Popover/dropdown backgrounds" },
    "popover-foreground": { value: "oklch(0.145 0 0)", cssVar: "--popover-foreground", label: "Popover Foreground", description: "Text in popovers" },
  },
  ui: {
    border: { value: "oklch(0.922 0 0)", cssVar: "--border", label: "Border", description: "Default borders and dividers" },
    input: { value: "oklch(0.922 0 0)", cssVar: "--input", label: "Input", description: "Input field borders" },
    ring: { value: "oklch(0.708 0 0)", cssVar: "--ring", label: "Ring", description: "Focus ring color" },
  },
} as const

export const typographyTokens = {
  fontFamily: {
    sans: { value: "IBM Plex Sans, system-ui, sans-serif", label: "IBM Plex Sans", description: "Primary typeface for body text and UI" },
    mono: { value: "IBM Plex Mono, monospace", label: "IBM Plex Mono", description: "Code and technical content" },
  },
  fontSize: {
    xs: { value: "0.75rem", px: "12px", lineHeight: "1rem", label: "Extra Small" },
    sm: { value: "0.875rem", px: "14px", lineHeight: "1.25rem", label: "Small" },
    base: { value: "1rem", px: "16px", lineHeight: "1.5rem", label: "Base" },
    lg: { value: "1.125rem", px: "18px", lineHeight: "1.75rem", label: "Large" },
    xl: { value: "1.25rem", px: "20px", lineHeight: "1.75rem", label: "Extra Large" },
    "2xl": { value: "1.5rem", px: "24px", lineHeight: "2rem", label: "2XL" },
    "3xl": { value: "1.875rem", px: "30px", lineHeight: "2.25rem", label: "3XL" },
    "4xl": { value: "2.25rem", px: "36px", lineHeight: "2.5rem", label: "4XL" },
    "5xl": { value: "3rem", px: "48px", lineHeight: "1", label: "5XL" },
  },
  fontWeight: {
    light: { value: "300", label: "Light" },
    normal: { value: "400", label: "Normal" },
    medium: { value: "500", label: "Medium" },
    semibold: { value: "600", label: "Semibold" },
    bold: { value: "700", label: "Bold" },
  },
  letterSpacing: {
    tighter: { value: "-0.05em", label: "Tighter" },
    tight: { value: "-0.025em", label: "Tight" },
    normal: { value: "0em", label: "Normal" },
    wide: { value: "0.025em", label: "Wide" },
    wider: { value: "0.05em", label: "Wider" },
  },
} as const

export const spacingTokens = {
  "0": { value: "0px", rem: "0rem", label: "0" },
  "0.5": { value: "2px", rem: "0.125rem", label: "0.5" },
  "1": { value: "4px", rem: "0.25rem", label: "1" },
  "1.5": { value: "6px", rem: "0.375rem", label: "1.5" },
  "2": { value: "8px", rem: "0.5rem", label: "2" },
  "2.5": { value: "10px", rem: "0.625rem", label: "2.5" },
  "3": { value: "12px", rem: "0.75rem", label: "3" },
  "3.5": { value: "14px", rem: "0.875rem", label: "3.5" },
  "4": { value: "16px", rem: "1rem", label: "4" },
  "5": { value: "20px", rem: "1.25rem", label: "5" },
  "6": { value: "24px", rem: "1.5rem", label: "6" },
  "8": { value: "32px", rem: "2rem", label: "8" },
  "10": { value: "40px", rem: "2.5rem", label: "10" },
  "12": { value: "48px", rem: "3rem", label: "12" },
  "16": { value: "64px", rem: "4rem", label: "16" },
  "20": { value: "80px", rem: "5rem", label: "20" },
  "24": { value: "96px", rem: "6rem", label: "24" },
} as const

export const radiiTokens = {
  none: { value: "0px", label: "None", tailwind: "rounded-none" },
  sm: { value: "calc(0.625rem * 0.6)", label: "Small", tailwind: "rounded-sm" },
  md: { value: "calc(0.625rem * 0.8)", label: "Medium", tailwind: "rounded-md" },
  lg: { value: "0.625rem", label: "Large", tailwind: "rounded-lg" },
  xl: { value: "calc(0.625rem * 1.4)", label: "Extra Large", tailwind: "rounded-xl" },
  "2xl": { value: "calc(0.625rem * 1.8)", label: "2XL", tailwind: "rounded-2xl" },
  full: { value: "9999px", label: "Full", tailwind: "rounded-full" },
} as const

/** Semantic radii — use these for components. Nested containers use *-inner (concentric). */
export const radiiSemanticTokens = {
  component: { value: "var(--radius-component)", label: "Component", description: "Buttons, inputs, cards, accordion" },
  "component-sm": { value: "var(--radius-component-sm)", label: "Component (small)", description: "Small buttons, toggles, menu items" },
  "component-inner": { value: "var(--radius-component-inner)", label: "Component (nested)", description: "Elements inside component containers" },
  surface: { value: "var(--radius-surface)", label: "Surface", description: "Cards, popovers, dropdown containers" },
  "surface-inner": { value: "var(--radius-surface-inner)", label: "Surface (nested)", description: "Elements inside surfaces — concentric" },
  overlay: { value: "var(--radius-overlay)", label: "Overlay", description: "Modals, dialogs, elevated surfaces" },
  "overlay-inner": { value: "var(--radius-overlay-inner)", label: "Overlay (nested)", description: "Elements inside overlays — concentric" },
  badge: { value: "var(--radius-badge)", label: "Badge", description: "kbd, small labels" },
  pill: { value: "var(--radius-pill)", label: "Pill", description: "Avatar, pill badges" },
} as const

/** Shadow tokens — Tailwind v4 defaults. Use via shadow-sm, shadow-md, etc. or var(--shadow-*). */
export const shadowTokens = {
  "2xs": { value: "0 1px rgb(0 0 0 / 0.05)", label: "2XS", description: "Minimal shadow", tailwind: "shadow-2xs" },
  xs: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", label: "XS", description: "Subtle shadow", tailwind: "shadow-xs" },
  sm: { value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", label: "SM", description: "Cards, hover states", tailwind: "shadow-sm" },
  md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", label: "MD", description: "Dropdowns, popovers", tailwind: "shadow-md" },
  lg: { value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", label: "LG", description: "Modals, overlays", tailwind: "shadow-lg" },
  xl: { value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", label: "XL", description: "Elevated surfaces", tailwind: "shadow-xl" },
  "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", label: "2XL", description: "Strong elevation", tailwind: "shadow-2xl" },
} as const

/** Inner shadow tokens — inset highlights for glass/container effects. */
export const innerShadowTokens = {
  subtle: { value: "inset 0 0 0 1px rgba(255,255,255,0.1)", label: "Subtle", description: "Faint white inner border", tailwind: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" },
  light: { value: "inset 0 0 0 1px rgba(255,255,255,0.15)", label: "Light", description: "Soft white inner glow", tailwind: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" },
  medium: { value: "inset 0 1px 0 0 rgba(255,255,255,0.2)", label: "Medium", description: "Top edge highlight", tailwind: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]" },
} as const

/** Blur tokens — Tailwind v4 defaults. Use via backdrop-blur-sm, etc. or var(--blur-*). */
export const blurTokens = {
  xs: { value: "4px", label: "XS", description: "Subtle backdrop blur", tailwind: "backdrop-blur-xs" },
  sm: { value: "8px", label: "SM", description: "Light blur", tailwind: "backdrop-blur-sm" },
  md: { value: "12px", label: "MD", description: "Modal overlays", tailwind: "backdrop-blur-md" },
  lg: { value: "16px", label: "LG", description: "Strong blur", tailwind: "backdrop-blur-lg" },
  xl: { value: "24px", label: "XL", description: "Heavy blur", tailwind: "backdrop-blur-xl" },
  "2xl": { value: "40px", label: "2XL", description: "Maximum blur", tailwind: "backdrop-blur-2xl" },
  "3xl": { value: "64px", label: "3XL", description: "Extreme blur", tailwind: "backdrop-blur-3xl" },
} as const

export const motionTokens = {
  duration: {
    fast: { value: "150ms", label: "Fast", description: "Micro-interactions, toggles, tooltips" },
    normal: { value: "250ms", label: "Normal", description: "Standard transitions, hover states" },
    slow: { value: "400ms", label: "Slow", description: "Page transitions, modals, complex animations" },
    slower: { value: "600ms", label: "Slower", description: "Elaborate entrances, staggered lists" },
  },
  easing: {
    "ease-in": { value: "cubic-bezier(0.4, 0, 1, 1)", label: "Ease In", description: "Elements leaving the screen" },
    "ease-out": { value: "cubic-bezier(0, 0, 0.2, 1)", label: "Ease Out", description: "Elements entering the screen" },
    "ease-in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)", label: "Ease In Out", description: "Elements moving across screen" },
    spring: { value: "cubic-bezier(0.34, 1.56, 0.64, 1)", label: "Spring", description: "Playful, bouncy interactions" },
  },
} as const

// ---------------------------------------------------------------------------
// Component list — every installed shadcn component gets a page
// ---------------------------------------------------------------------------

export const componentList = [
  "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar",
  "badge", "breadcrumb", "button", "button-group",
  "calendar", "card", "carousel", "chart", "checkbox",
  "collapsible", "combobox", "command", "context-menu",
  "dialog", "drawer", "dropdown-menu",
  "hover-card",
  "input", "input-group", "input-otp",
  "label",
  "menubar",
  "nav-pill", "navigation-menu",
  "pagination", "popover", "progress",
  "radio-group", "resizable",
  "scroll-area", "select", "separator", "sheet",
  "skeleton", "slider", "spinner", "switch",
  "table", "tabs", "textarea", "toggle", "toggle-group", "tooltip",
] as const

// Navigation structure for the docs sidebar
export const navigation = [
  {
    title: "Logo",
    items: [
      { title: "Logo", href: "/foundation/logo" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "Color", href: "/tokens/color" },
      { title: "Typography", href: "/tokens/typography" },
      { title: "Spacing", href: "/tokens/spacing" },
      { title: "Radii", href: "/tokens/radii" },
      { title: "Effects", href: "/tokens/effects" },
      { title: "Motion", href: "/tokens/motion" },
    ],
  },
  {
    title: "Components",
    items: componentList.map((c) => ({
      title: c.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
      href: `/components/${c}`,
    })),
  },
] as const

// Section name by route (for page header)
export const sectionByPath: Record<string, string> = {
  "/system": "System",
  "/components": "Components",
  ...Object.fromEntries(
    navigation.flatMap((section) =>
      section.items.map((item) => [item.href, section.title])
    )
  ),
}

// Page number by route (01, 02, etc. — restarts per section; accordion is 01)
export const pageNumberByPath: Record<string, string> = (() => {
  const result: Record<string, string> = { "/system": "01" }
  for (const section of navigation) {
    for (const [index, item] of section.items.entries()) {
      result[item.href] = String(index + 1).padStart(2, "0")
    }
  }
  return result
})()
