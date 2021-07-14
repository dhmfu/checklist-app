import { createAction, props } from "@ngrx/store"

import { ChecklistForm } from "../../models/checklist-form.interface"
import { ToggleChecklistQuestion } from "../../models/events/toggle-question.interface"

const CHECKLISTS_ACTION_TAG = 'Checklists'

export const createChecklist = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Create checklist`,
  props<ChecklistForm>()
)

export const toggleQuestion = createAction(
  `[${CHECKLISTS_ACTION_TAG}] Toggle question`,
  props<ToggleChecklistQuestion>()
)