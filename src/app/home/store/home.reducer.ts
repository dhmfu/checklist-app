import { combineReducers } from "@ngrx/store"

import { checklistsFeatureKey, checklistsReducer, ChecklistsState } from "./checklists"

export interface HomeState {
  [checklistsFeatureKey]: ChecklistsState
}

export const homeReducers = combineReducers({
  [checklistsFeatureKey]: checklistsReducer
})