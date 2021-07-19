import { createReducer, on } from "@ngrx/store"

import { Checklist } from "../../models/checklist.interface"

import { createChecklist, deleteChecklist, toggleQuestion } from "./checklists.actions"

export interface ChecklistsState {
  [id: string]: Checklist
}

export const initialState: ChecklistsState = {}

export const checklistsReducer = createReducer(
  initialState,
  on(createChecklist, (state, action) => {
    const newChecklistId = uniqueId()

    return {
      ...state,
      [newChecklistId]: {
        id: newChecklistId,
        name: action.name,
        questions: action.questions.map(question => ({ checked: false, term: question }))
      }
    }
  }),
  on(toggleQuestion, (state, action) => {
    const checklist = state[action.id]
    const newChecklistQuestions = checklist.questions.map((question, i) => {
      if (i === action.index) {
        return { ...question, checked: action.checked }
      }
      
      return question
    })

    return {
      ...state,
      [action.id]: { ...checklist, questions: newChecklistQuestions }
    }
  }),
  on(deleteChecklist, (state, action) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [action.id]: removedChecklist, ...newState } = state

    return newState
  })
)

function uniqueId(): string { // TODO: temporary function 
  return Date.now().toString()
}