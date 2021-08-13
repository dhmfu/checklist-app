import { createReducer, on } from "@ngrx/store"

import { Checklist } from "../../models/checklist.interface"

import {
  createChecklist,
  createChecklistFailure,
  createChecklistSuccess,
  deleteChecklist,
  deleteChecklistSuccess,
  loadChecklists,
  loadChecklistsSuccess,
  resetChecklists,
  toggleQuestion
} from "./checklists.actions"

export interface ChecklistsState {
  entities: { [id: string]: Checklist }
  loaded: boolean
  loading: boolean,
  creating: boolean
}

export const initialState: ChecklistsState = {
  entities: {},
  loading: false,
  loaded: false,
  creating: false
}

export const checklistsReducer = createReducer(
  initialState,
  on(loadChecklists, state => ({ ...state, loading: true })),
  on(loadChecklistsSuccess, (state, action) => {
    const entities = action.checklists.reduce((currentValue, checklist) => {
      currentValue[checklist.id] = checklist

      return currentValue
    }, { ...state.entities })

    return { ...state, entities, loading: false, loaded: true }
  }),
  on(createChecklist, state => ({...state, creating: true })),
  on(createChecklistSuccess, (state, { id, name, questions }) => {
    const entities = { ...state.entities, [id]: { id, name, questions } }

    return ({ ...state, entities, creating: false })
  }),
  on(createChecklistFailure, state => ({ ...state, creating: false })),
  on(toggleQuestion, (state, action) => {
    const checklist = state.entities[action.id]
    const newChecklistQuestions = checklist.questions.map((question, i) => {
      if (i === action.index) {
        return { ...question, checked: action.checked }
      }
      
      return question
    })
    const entities = {
      ...state.entities,
      [action.id]: { ...checklist, questions: newChecklistQuestions }
    }

    return { ...state, entities }
  }),
  on(deleteChecklist, (state) => {
    // TODO: Implement some transition-state
    return state
  }),
  on(deleteChecklistSuccess, (state, action) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [action.id]: removedChecklist, ...entities } = state.entities

    return { ...state, entities }
  }),
  on(resetChecklists, () => ({ ...initialState }))
)