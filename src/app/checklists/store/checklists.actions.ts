import { createAction, props } from "@ngrx/store"

import { ChecklistForm } from "../models/checklist-form.interface"

export const createChecklist = createAction(
  '[Checklists] Create checklist',
  props<ChecklistForm>()
)