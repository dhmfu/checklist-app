import { createAction, props } from "@ngrx/store"

import { LoginCredentials } from "../../models/credentials"

const AUTH_ACTION_TAG = 'Auth'

export const login = createAction(
  `[${AUTH_ACTION_TAG}] Login`,
  props<LoginCredentials>()
)

export const loginSuccess = createAction(
  `[${AUTH_ACTION_TAG}] Login Success`,
  props<{ token: string }>()
)

export const loginFailure = createAction(
  `[${AUTH_ACTION_TAG}] Login Failure`,
  props<{ error: string }>()
)