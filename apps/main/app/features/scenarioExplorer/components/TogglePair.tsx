/**
 * TogglePair - Two-option toggle button component
 *
 * Displays two icons as toggle options with active state highlighting.
 * WCAG 4.1.2: Uses semantic buttons with accessible names.
 */

import React from "react"
import { Box, useTheme } from "@repo/ui/mui"

interface TogglePairProps {
  leftIcon: React.ReactNode
  rightIcon: React.ReactNode
  onLeftClick: () => void
  onRightClick: () => void
  /** Accessible label for left button */
  leftLabel: string
  /** Accessible label for right button */
  rightLabel: string
  /** Whether left option is currently active */
  leftActive?: boolean
  /** Whether right option is currently active */
  rightActive?: boolean
  gap?: number
  sx?: Record<string, unknown>
}

/**
 * Reusable toggle pair component for icon-based toggles
 * Each icon sets a specific state rather than toggling
 */
export default function TogglePair({
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
  leftLabel,
  rightLabel,
  leftActive = false,
  rightActive = false,
  gap = 0,
  sx,
}: TogglePairProps) {
  const theme = useTheme()

  // Shared button styles
  const buttonStyles = {
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // WCAG 2.4.7: Focus visible styles
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.blue.bright}`,
      outlineOffset: "2px",
      borderRadius: "4px",
    },
  }

  return (
    <Box sx={{ display: "flex", ...sx }} role="group">
      <Box
        component="button"
        type="button"
        aria-label={leftLabel}
        aria-pressed={leftActive}
        onClick={onLeftClick}
        sx={buttonStyles}
      >
        {leftIcon}
      </Box>
      <Box
        component="button"
        type="button"
        aria-label={rightLabel}
        aria-pressed={rightActive}
        onClick={onRightClick}
        sx={{ ...buttonStyles, marginLeft: gap }}
      >
        {rightIcon}
      </Box>
    </Box>
  )
}
