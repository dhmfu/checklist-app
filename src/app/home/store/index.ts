import { combineReducers, createFeatureSelector, createSelector } from "@ngrx/store"

import { checklistsFeatureKey, checklistsReducer, ChecklistsState } from "./checklists"

export interface HomeState {
  [checklistsFeatureKey]: ChecklistsState
}

export const homeReducers = combineReducers({
  [checklistsFeatureKey]: checklistsReducer
})

export const homeFeatureKey = 'home'

export const selectHome = createFeatureSelector<HomeState>(homeFeatureKey)

export const selectChecklists = createSelector(selectHome, state => state[checklistsFeatureKey])

export const selectAsMenuItems = createSelector(
  selectChecklists,
  state => Object.values(state).map(({ name, id }) => ({ name, id }))
)