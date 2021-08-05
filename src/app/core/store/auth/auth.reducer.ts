import { createReducer, on } from "@ngrx/store"

import { login, loginFailure, loginSuccess, logout } from "./auth.actions"

export interface AuthState {
  jwt: string | null
  loading: boolean
}

const initialState: AuthState = {
  loading: false,
  jwt: null
}

export const authReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, loading: true })),
  on(loginSuccess, (state, action) => ({ ...state, jwt: action.token, loading: false })),
  on(loginFailure, state => ({ ...state, loading: false })),
  on(logout, state => ({ ...state, jwt: null }))
)