import { createFeatureSelector } from "@ngrx/store"

import { homeFeatureKey } from "./home.feature-key"
import { HomeState } from "./home.reducer"

export const selectHome = createFeatureSelector<HomeState>(homeFeatureKey)
