/**
 * Root Layout - Application root with providers
 *
 */

import { StrictMode } from "react"
import type { Metadata } from "next"
import { ThemeRegistry } from "@repo/ui/themes/ThemeRegistry"
import { DataProvider } from "@repo/data/providers"

export const metadata: Metadata = {
  title: "Scenario Explorer - Code Sample",
  description:
    "Code sample demonstrating CSS Grid/Subgrid, Zustand state management, and MUI theming",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StrictMode>
          <DataProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
          </DataProvider>
        </StrictMode>
      </body>
    </html>
  )
}
