import { routerReducer } from "@ngrx/router-store"

import { authFeatureKey, authReducer } from "./auth"
import { routerFeatureKey } from "./router"
import { uiFeatureKey, uiReducer } from "./ui"

export const coreReducers = {
  [authFeatureKey]: authReducer,
  [uiFeatureKey]: uiReducer,
  [routerFeatureKey]: routerReducer
}

export { CoreState } from './core.state'