import { uiFeatureKey, UiState } from "./ui"

export interface CoreState {
  [uiFeatureKey]: UiState,
}