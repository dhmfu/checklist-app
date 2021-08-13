import { createSelector } from "@ngrx/store"

import { selectRouteParams } from "../../../core/store/router/router.selectors"

import { selectHome } from "../home.selector"

import { checklistsFeatureKey } from "./checklists.feature-key"

export const selectChecklistsFeature = createSelector(selectHome, state => state[checklistsFeatureKey])

export const selectChecklistsEntities = createSelector(selectChecklistsFeature, state => state.entities)
export const selectChecklistsLoading = createSelector(selectChecklistsFeature, state => state.loading)
export const selectChecklistsLoaded = createSelector(selectChecklistsFeature, state => state.loaded)
export const selectChecklistsCreating = createSelector(selectChecklistsFeature, state => state.creating)
export const selectChecklistsDeleting = createSelector(selectChecklistsFeature, state => state.deleting)

export const selectAsMenuItems = createSelector(
  selectChecklistsEntities,
  state => Object.values(state).map(({ name, id }) => ({ name, id }))
)

export const selectRoutedChecklist = createSelector(
  selectChecklistsEntities,
  selectRouteParams,
  (checkliststEntities, routeParams) => {
    const id = routeParams['id'] as string

    return checkliststEntities[id]
  }
)
