import { uiFeatureKey, UiState } from "../layout/store/ui.reducer"

export interface AppState {
  [uiFeatureKey]: UiState
}