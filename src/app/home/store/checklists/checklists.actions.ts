import { createAction, props } from "@ngrx/store"

import { ChecklistFormData } from "../../models/checklist-form.interface"
import { ToggleQuestion } from "../../models/events/toggle-question.interface"
import { MenuItem } from "../../models/menu-item.interface"

const CHECKLISTS_ACTION_TAG = 'Checklists'

export const createChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create checklist`,
  props<ChecklistFormData>()
)

export const toggleQuestion = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Toggle question`,
  props<ToggleQuestion>()
)

export const removeChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Remove checklist`,
  props<MenuItem>()
)