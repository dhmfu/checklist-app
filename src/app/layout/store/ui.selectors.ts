import { createFeatureSelector, createSelector } from "@ngrx/store"

import { AppState } from "../../store/app.state"

import { uiFeatureKey, UiState } from "./ui.reducer"

export const selectFeature = createFeatureSelector<AppState, UiState>(uiFeatureKey)

export const selectMenuVisible = createSelector(
  selectFeature,
  (state: UiState) => state.menuVisible
)