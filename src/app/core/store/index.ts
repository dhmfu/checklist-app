import { routerReducer } from "@ngrx/router-store"

import { routerFeatureKey } from "./router"
import { uiFeatureKey, uiReducer } from "./ui"

export const coreReducers = {
  [uiFeatureKey]: uiReducer,
  [routerFeatureKey]: routerReducer
}

export { CoreState } from './core.state'