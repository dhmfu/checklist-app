import { createReducer, on } from "@ngrx/store"

import { login, authFailure, loginSuccess, logout, signUp } from "./auth.actions"

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
  on(authFailure, state => ({ ...state, loading: false })),
  on(logout, state => ({ ...state, jwt: null })),
  on(signUp, state => ({ ...state, loading: true }))
)