import { authFeatureKey, AuthState } from "./auth"
import { uiFeatureKey, UiState } from "./ui"

export interface CoreState {
  [uiFeatureKey]: UiState,
  [authFeatureKey]: AuthState
}