import { routerReducer } from "@ngrx/router-store"

import { routerFeatureKey } from "./router"
import { uiFeatureKey, UiState, uiReducer } from "./ui"

export interface CoreState {
  [uiFeatureKey]: UiState,
}

export const coreReducers = {
  [uiFeatureKey]: uiReducer,
  [routerFeatureKey]: routerReducer
}