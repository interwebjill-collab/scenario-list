"use client"

/**
 * ScenarioExplorer - Main scenario exploration interface
 *
 * Simplified version that focuses on the list view.
 * Map and comparison modes are disabled in this code sample.
 */

import React from "react"
import { Box, useTheme } from "@repo/ui/mui"
import ListView from "./exploreView/ListView"
import SearchBar from "./components/SearchBar"
import { ViewModeControls } from "./components/ViewModeControls"
import SelectionBanner from "./components/SelectionBanner"

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
    </Box>
  )
}
