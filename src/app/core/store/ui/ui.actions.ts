import { createAction, props } from "@ngrx/store"

const UI_ACTION_TAG = 'UI'

export const toggleMenu = createAction(`[${UI_ACTION_TAG}] Toggle Menu`)

export const setNavbarHeight = createAction(`[${UI_ACTION_TAG}] Set Navbar height`, props<{ height: number }>())

export const setScreenSize = createAction(`[${UI_ACTION_TAG}] Set Screen size`, props<{ isSmall: boolean }>())