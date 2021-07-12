import { getSelectors, RouterReducerState } from '@ngrx/router-store'
import { createFeatureSelector } from '@ngrx/store'

import { routerFeatureKey } from './router.feature-key'

export const selectRouter = createFeatureSelector<RouterReducerState>(routerFeatureKey)

export const { selectRouteParams } = getSelectors(selectRouter)