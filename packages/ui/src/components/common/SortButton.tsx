"use client"

/**
 * SortButton - Clickable sort indicator with up/down arrows
 *
 * Displays ascending, descending, or neutral sort state.
 * Used in data tables and grids for column sorting.
 */

import React from "react"
import { Box, ArrowDropUpIcon, ArrowDropDownIcon } from "../.."
import { Theme } from "@mui/material/styles"

// ============================================================================
// CONFIGURABLE CONSTANTS
// ============================================================================
const ARROW_SIZE = "1.6rem"
const CIRCLE_SIZE = "20px"
const ARROW_GAP = "-9px" // Negative margin to overlap arrows

// ============================================================================
// TYPES
// ============================================================================
export interface SortButtonProps {
  sortState: "asc" | "desc" | null
  onAscClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  onDescClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  title?: string
}

// ============================================================================
// STYLES
// ============================================================================
const arrowButtonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0,
  transition: "all 0.15s ease", // theme.transition.quick equivalent
  "&:hover": {
    color: (theme: Theme) => theme.palette.blue.darkest,
  },
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================
interface ArrowButtonProps {
  direction: "up" | "down"
  isActive: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  columnName?: string
}

function ArrowButton({
  direction,
  isActive,
  onClick,
  columnName,
}: ArrowButtonProps) {
  const Icon = direction === "up" ? ArrowDropUpIcon : ArrowDropDownIcon
  const margin =
    direction === "up" ? { marginBottom: ARROW_GAP } : { marginTop: ARROW_GAP }

  // WCAG 4.1.2: Provide accessible name
  const ariaLabel =
    direction === "up"
      ? `Sort ${columnName || "column"} ascending${isActive ? " (currently active)" : ""}`
      : `Sort ${columnName || "column"} descending${isActive ? " (currently active)" : ""}`

  return (
    <Box
      component="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={isActive}
      sx={{
        ...arrowButtonStyles,
        ...margin,
        // WCAG 1.4.11: Improved contrast - use grey[500] instead of grey[400]
        color: (theme: Theme) =>
          isActive ? theme.palette.blue.bright : theme.palette.grey[500],
        // WCAG 2.4.7: Focus visible styles
        "&:focus-visible": {
          outline: (theme: Theme) => `2px solid ${theme.palette.blue.bright}`,
          outlineOffset: "1px",
          borderRadius: "2px",
        },
      }}
    >
      <Icon sx={{ fontSize: ARROW_SIZE }} />
    </Box>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function SortButton({
  sortState,
  onAscClick,
  onDescClick,
  title,
}: SortButtonProps) {
  const isSorted = sortState !== null

  return (
    <Box
      title={title}
      sx={{
        background: (theme: Theme) =>
          isSorted
            ? `${theme.palette.blue.bright}20`
            : `${theme.palette.grey[500]}15`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: (theme: Theme) => theme.borderRadius.circle,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        minWidth: CIRCLE_SIZE,
        minHeight: CIRCLE_SIZE,
        transition: (theme: Theme) => theme.transition.quick,
        "&:hover": {
          background: (theme: Theme) => `${theme.palette.blue.bright}30`,
        },
      }}
    >
      <ArrowButton
        direction="up"
        isActive={sortState === "asc"}
        onClick={onAscClick}
        columnName={title}
      />
      <ArrowButton
        direction="down"
        isActive={sortState === "desc"}
        onClick={onDescClick}
        columnName={title}
      />
    </Box>
  )
}

export default SortButton
