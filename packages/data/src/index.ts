/**
 * @repo/data - Shared data package for COEQWAL applications
 *
 * This package provides:
 * - Data fetching utilities (fetcher, hooks)
 * - Cache key management
 * - React providers (DataProvider)
 * - COEQWAL API types, fetchers, and hooks
 *
 * ## Usage
 *
 * ```typescript
 * // Fetching utilities
 * import { useLocalData, apiFetcher } from "@repo/data/fetching"
 *
 * // Cache keys
 * import { CACHE_KEYS } from "@repo/data/cache"
 *
 * // Providers
 * import { DataProvider } from "@repo/data/providers"
 *
 * // COEQWAL API (types, fetchers)
 * import { fetchTierList, fetchScenarioTiers } from "@repo/data/coeqwal"
 * import type { TierListItem, ScenarioTiersResponse } from "@repo/data/coeqwal"
 *
 * // COEQWAL hooks (for React components)
 * import { useTiers, useTierMapping, useScenarios } from "@repo/data/coeqwal/hooks"
 * ```
 */

// Re-export commonly used utilities for convenience
// (Full exports available via subpath imports)
export { CACHE_KEYS } from "./cache"
export { DataProvider } from "./providers"
export { useLocalData, apiFetcher, FetchError } from "./fetching"
