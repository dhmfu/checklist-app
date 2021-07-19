import { createAction, props } from "@ngrx/store"

import { ChecklistFormData } from "../../models/checklist-form.interface"
import { Checklist } from "../../models/checklist.interface"
import { ToggleQuestion } from "../../models/events/toggle-question.interface"

const CHECKLISTS_ACTION_TAG = 'Checklists'

export const createChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create checklist`,
  props<ChecklistFormData>()
)

export const toggleQuestion = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Toggle question`,
  props<ToggleQuestion>()
)

export const deleteChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Delete checklist`,
  props<Checklist>()
)