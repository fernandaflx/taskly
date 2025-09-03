type TaskStatus = 'pending' | 'doing' | 'done' | 'archived'

export type Tasks = {
  id: string
  name: string
  description: string
  due_date: string
  status: TaskStatus
  board: string
}

export type TaskColumns = {
  id: string
  name: string
  due_date: string
  status: TaskStatus
  board: string
}
