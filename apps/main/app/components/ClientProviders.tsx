"use client"

/**
 * ClientProviders - Wraps the app with necessary context providers
 *
 * Note: ThemeRegistry is used instead of ThemeProvider because it handles
 * Emotion cache setup for Next.js App Router (SSR compatibility).
 */

import { ThemeRegistry } from "@repo/ui/themes/ThemeRegistry"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ThemeRegistry>{children}</ThemeRegistry>
}
