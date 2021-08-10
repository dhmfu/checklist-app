import { createAction, props } from "@ngrx/store"

import { LoginCredentials, SignUpCredentials } from "../../models/credentials"

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

export const logout = createAction(
  `[${AUTH_ACTION_TAG}] Logout`
)

export const signUp = createAction(
  `[${AUTH_ACTION_TAG}] Sign Up`,
  props<SignUpCredentials>()
)