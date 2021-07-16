import { createReducer, on } from "@ngrx/store"

import { setNavbarHeight, setScreenSize, toggleMenu } from "./ui.actions"

export interface UiState {
  menuVisible: boolean
  navbarHeight: number,
  isSmallScreen: boolean
}

export const uiFeatureKey = 'ui'

export const initialState: UiState = {
  menuVisible: true,
  navbarHeight: 0,
  isSmallScreen: false
}

export const uiReducer = createReducer(
  initialState,
  on(toggleMenu, state => ({ ...state, menuVisible: !state.menuVisible })),
  on(setNavbarHeight, (state, action) => ({ ...state, navbarHeight: action.height })),
  on(setScreenSize, (state, action) => ({ ...state, isSmallScreen: action.isSmall }))
)