import { createReducer, on } from "@ngrx/store"
import { toggleMenu } from "./ui.actions"

export interface UiState {
  menuVisible: boolean
}

export const initialState: UiState = {
  menuVisible: true
}

export const uiReducer = createReducer(
  initialState,
  on(toggleMenu, state => ({ ...state, menuVisible: !state.menuVisible }))
)