"use client"

/**
 * ScenarioExplorer - Main scenario exploration interface
 *
 * Simplified version that focuses on the list view.
 * Map and comparison modes are disabled in this code sample.
 */

import React from "react"
import { Box, Typography, useTheme } from "@repo/ui/mui"
import ListView from "./exploreView/ListView"
import SearchBar from "./components/SearchBar"
import { ViewModeControls } from "./components/ViewModeControls"
import SelectionBanner from "./components/SelectionBanner"
import KeyboardShortcuts from "./components/KeyboardShortcuts"

export default function ScenarioExplorer() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.explore.background,
        color: theme.palette.text.primary,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* WCAG 1.3.1: Page must have an h1 heading */}
      <Typography
        component="h1"
        variant="h4"
        sx={{
          // Visually hidden but accessible to screen readers
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Scenario Explorer
      </Typography>

      {/* WCAG 1.3.1: Header landmark for search and controls */}
      <Box
        component="header"
        role="banner"
        aria-label="Scenario explorer controls"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: theme.zIndex.pageContent,
          flexShrink: 0,
        }}
      >
        {/* Search toolbar */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <SearchBar
            placeholder="Search scenarios by name or description"
            rightContent={<ViewModeControls />}
          />
        </Box>

        {/* Selection banner - shows when scenarios are selected */}
        <SelectionBanner />
      </Box>

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <ListView />
      </Box>

      {/* Global keyboard shortcuts handler */}
      <KeyboardShortcuts />
    </Box>
  )
}
