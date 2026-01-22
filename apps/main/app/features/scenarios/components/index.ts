// Scenario domain components
export { default as TierLegend } from "./TierLegend"
export {
  HydroclimateChooser,
  default as HydroclimateChooserDefault,
} from "./HydroclimateChooser"

// Layout components
export { ScenarioRow } from "./ScenarioRow"
export type { ScenarioRowProps } from "./ScenarioRow"

// Shared scenario/outcome components
export {
  OutcomeGlyphItem,
  OutcomeGrid,
  OperationsIconGroup,
  StrategyHeader,
  getScenarioIcons,
  getThemeIcon,
  getThemeIconDescription,
  getIconSize,
  isSingleValueTier,
} from "./shared"
export type {
  OutcomeGlyphItemProps,
  OutcomeGridProps,
  OperationsIconGroupProps,
  StrategyHeaderProps,
  ScenarioIcon,
  ChartDataPoint,
  OutcomeName,
  ScenarioForDisplay,
} from "./shared"
