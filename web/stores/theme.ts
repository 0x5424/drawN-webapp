// Stores and helpers for the app theme
import { writable } from 'svelte/store'

export type ThemeType = 'auto' | 'light' | 'dark'

// If the theme is set to auto, get the current browser setting (should match OS)
export const getAutoSetting = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const THEMES = {
  auto: 'auto',
  light: 'light',
  dark: 'dark'
} as const

// Initialize theme
const initialTheme: ThemeType = THEMES[localStorage.getItem('THEME')] || 'auto'
export const activeTheme = writable<ThemeType>(initialTheme)
