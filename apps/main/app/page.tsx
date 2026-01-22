/**
 * Main app entry point
 *
 * This code sample demonstrates the Scenario Explorer list view
 */

import { ClientProviders } from "./components/ClientProviders"
import ScenarioExplorer from "./features/scenarioExplorer/ScenarioExplorer"
import { FloatingGlossary } from "./features/glossary"
import { SkipLink } from "@repo/ui"

export default function Home() {
  return (
    <ClientProviders>
      {/* WCAG 2.4.1: Skip links MUST be first focusable elements in DOM */}
      <SkipLink />
      <SkipLink
        targetId="glossary-button"
        label="Skip to glossary"
        offsetIndex={1}
      />

      {/* Glossary panel - opens from drawer when clicking terms like TUCP, SGMA */}
      <FloatingGlossary />

      {/* WCAG 2.4.1: Skip link target - main content area */}
      <main
        id="main-content"
        tabIndex={-1}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          outline: "none", // Remove focus outline when skip link targets this
        }}
      >
        <ScenarioExplorer />
      </main>
    </ClientProviders>
  )
}
