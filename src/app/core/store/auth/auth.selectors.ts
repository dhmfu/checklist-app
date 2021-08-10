import { createFeatureSelector, createSelector } from "@ngrx/store"

import jwtDecode from "jwt-decode"

import { CoreState } from "../core.state"

import { authFeatureKey } from "./auth.feature-key"
import { AuthState } from "./auth.reducer"

export const selectAuthFeature = createFeatureSelector<CoreState, AuthState>(authFeatureKey)

export const selectToken = createSelector(
  selectAuthFeature,
  state => state.jwt
)

export const selectUserName = createSelector(
  selectToken,
  jwtToken => {
    let name = ''

    
    if (jwtToken) {
      try {
        const jwtDecoded = jwtDecode<{ name: string }>(jwtToken)

        name = jwtDecoded.name
      } catch (e) {
        console.log(e)
      }
    }

    return name
  }
)

export const selectLoggedIn = createSelector(
  selectToken,
  state => !!state
)

export const selectAuthLoading = createSelector(
  selectAuthFeature,
  state => state.loading
)