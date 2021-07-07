import { createSelector } from "@ngrx/store"
import { AppState } from "./app.state"
import { UiState } from "./ui.reducer"

export const selectMenuVisible = createSelector(
  (state: AppState) => state.ui,
  (state: UiState) => state.menuVisible
)