import { Question } from "./question.interface"

export interface Checklist {
  id: string
  name: string
  questions: Question[]
}