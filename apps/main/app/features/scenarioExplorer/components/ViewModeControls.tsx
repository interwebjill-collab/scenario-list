"use client"

/**
 * ViewModeControls - View mode buttons and hydroclimate chooser for explorer toolbar
 *
 * In this code sample, map and comparison modes are disabled.
 * Only the list view is functional.
 */

import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
  ViewListIcon,
  CompareArrowsIcon,
} from "@repo/ui/mui"
import Image from "next/image"
import { HydroclimateChooser } from "../../scenarios/components"

function Divider() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: "1px",
        alignSelf: "stretch",
        backgroundColor: theme.palette.grey[300],
        minHeight: theme.spacing(5),
      }}
    />
  )
}

export function ViewModeControls() {
  const theme = useTheme()

  const buttonSx = (isActive: boolean, includeColor = true) => ({
    width: { xs: 32, lg: 36 },
    height: { xs: 32, lg: 36 },
    backgroundColor: isActive
      ? theme.palette.interaction.selectedBackground
      : "transparent",
    ...(includeColor && {
      color: isActive ? theme.palette.blue.bright : theme.palette.grey[600],
    }),
    "&:hover": {
      backgroundColor: theme.palette.interaction.selectedBackground,
    },
  })

  const disabledButtonSx = {
    width: { xs: 32, lg: 36 },
    height: { xs: 32, lg: 36 },
    backgroundColor: "transparent",
    color: theme.palette.grey[400],
    cursor: "not-allowed",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }

  return (
    <>
      {/* Divider - hidden under 700px when layout is stacked */}
      <Box
        sx={{
          display: "none",
          "@media (min-width: 700px)": {
            display: "contents",
          },
        }}
      >
        <Divider />
      </Box>

      {/* Hydroclimate chooser */}
      <HydroclimateChooser
        layout="horizontal"
        showTitle={true}
        showLabels={false}
      />

      {/* View mode buttons - hidden under 1400px */}
      <Box
        sx={{
          display: "none",
          // Only show at 1400px+ (matches theme.scenarios.grid.fullBreakpoint)
          "@media (min-width: 1400px)": {
            display: "contents",
          },
        }}
      >
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.space.gap.md,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.palette.grey[900],
            }}
          >
            View data in different modes (disabled)
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: theme.space.gap.xs,
            }}
          >
            {/* List view - active */}
            <Tooltip title="List view (active)" arrow>
              <IconButton sx={buttonSx(true)} aria-label="List view (active)">
                <ViewListIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Tooltip>

            {/* Map view - disabled in code sample */}
            <Tooltip title="Map view (not available in code sample)" arrow>
              <span>
                <IconButton
                  disabled
                  sx={disabledButtonSx}
                  aria-label="Map view (not available in code sample)"
                >
                  <Image
                    src="/images/icons/map.svg"
                    alt="Map view"
                    width={24}
                    height={24}
                    style={{ opacity: 0.4 }}
                  />
                </IconButton>
              </span>
            </Tooltip>

            {/* Comparison view - disabled in code sample */}
            <Tooltip
              title="Comparison view (not available in code sample)"
              arrow
            >
              <span>
                <IconButton
                  disabled
                  sx={disabledButtonSx}
                  aria-label="Comparison view (not available in code sample)"
                >
                  <CompareArrowsIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  )
}
