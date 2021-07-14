import { createSelector } from "@ngrx/store"

import { selectRouteParams } from "../../../core/store/router/router.selectors"

import { selectHome } from "../home.selector"

import { checklistsFeatureKey } from "./checklists.feature-key"

export const selectChecklists = createSelector(selectHome, state => state[checklistsFeatureKey])

export const selectAsMenuItems = createSelector(
  selectChecklists,
  state => Object.values(state).map(({ name, id }) => ({ name, id }))
)

export const selectRoutedChecklist = createSelector(
  selectChecklists,
  selectRouteParams,
  (checkliststState, routeParams) => {
    const id = routeParams['id'] as string

    return checkliststState[id]
  }
)
