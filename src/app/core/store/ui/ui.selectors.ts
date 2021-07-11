import { createFeatureSelector, createSelector } from "@ngrx/store"

import { CoreState } from ".."

import { uiFeatureKey, UiState } from "./ui.reducer"

export const selectUiFeature = createFeatureSelector<CoreState, UiState>(uiFeatureKey)

export const selectMenuVisible = createSelector(
  selectUiFeature,
  (state: UiState) => state.menuVisible
)