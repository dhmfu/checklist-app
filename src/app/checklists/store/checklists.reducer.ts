import { createReducer, on } from "@ngrx/store"
import { Question } from "../models/question.interface"
import { createChecklist } from "./checklists.actions"

export interface Checklist { // TODO: may be moved
  id: string
  name: string
  questions: Question[]
}

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
  })
)

function uniqueId(): string { // TODO: temporary function 
  return Date.now().toString()
}


export const checklistsFeatureKey = 'checklists'