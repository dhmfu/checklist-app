import { createAction, props } from "@ngrx/store"

import { ChecklistFormData } from "../../models/checklist-form.interface"
import { Checklist } from "../../models/checklist.interface"
import { ToggleQuestion } from "../../models/events/toggle-question.interface"

const CHECKLISTS_ACTION_TAG = 'Checklists'

export const loadChecklists = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Load Checklists`
)

export const loadChecklistsSuccess = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Load Checklists Success`,
  props<{ checklists: Checklist[] }>()
)

export const loadChecklistsFailure = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Load Checklists Failure`,
  props<{ error: string }>()
)

export const createChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create Checklist`,
  props<ChecklistFormData>()
)

export const createChecklistSuccess = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create Checklist Success`,
  props<Checklist>()
)

export const createChecklistFailure = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create Checklist Failure`,
  props<{ error: string }>()
)

export const deleteChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Delete Checklist`,
  props<Checklist>()
)

export const deleteChecklistSuccess = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Delete Checklist Success`,
  props<Checklist>()
)

export const deleteChecklistFailure = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Delete Checklist Failure`,
  props<{ error: string }>()
)

export const resetChecklists = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Reset Checklists`
)

export const toggleQuestion = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Toggle Question`,
  props<ToggleQuestion>()
)