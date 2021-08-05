import { createFeatureSelector, createSelector } from "@ngrx/store"

import { CoreState } from "../core.state"

import { authFeatureKey } from "./auth.feature-key"
import { AuthState } from "./auth.reducer"

export const selectAuthFeature = createFeatureSelector<CoreState, AuthState>(authFeatureKey)

export const selectToken = createSelector(
  selectAuthFeature,
  state => state.jwt
)

export const selectLoginLoading = createSelector(
  selectAuthFeature,
  state => state.loading
)