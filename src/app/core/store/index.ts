import { uiFeatureKey, UiState, uiReducer } from "./ui"

export interface CoreState {
  [uiFeatureKey]: UiState,
}

export const coreReducers = {
  [uiFeatureKey]: uiReducer,
}