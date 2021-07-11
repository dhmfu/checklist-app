import { combineReducers } from "@ngrx/store"

import { checklistsFeatureKey, checklistsReducer } from "./checklists"

export const homeReducers = combineReducers({
  [checklistsFeatureKey]: checklistsReducer
})

export const homeFeatureKey = 'home'