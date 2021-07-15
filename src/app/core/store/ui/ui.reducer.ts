import { createReducer, on } from "@ngrx/store"

import { setNavbarHeight, toggleMenu } from "./ui.actions"

export interface UiState {
  menuVisible: boolean
  navbarHeight: number
}

export const uiFeatureKey = 'ui'

export const initialState: UiState = {
  menuVisible: true,
  navbarHeight: 0
}

export const uiReducer = createReducer(
  initialState,
  on(toggleMenu, state => ({ ...state, menuVisible: !state.menuVisible })),
  on(setNavbarHeight, (state, action) => ({ ...state, navbarHeight: action.height }))
)