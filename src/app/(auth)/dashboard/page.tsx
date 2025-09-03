'use client'

import { columns } from "@/features/tasks/components/colums"
import { TaskTable } from "@/features/tasks/components/TaskTable"
import { TaskColumns } from "@/features/tasks/models"


export default function Dashboard() {

  const data: TaskColumns[] = [
    {
      id: '1',
      name: 'Comprar livros',
      due_date: '2025-09-03',
      status: 'pending',
      board: 'Personal',
    },
    {
      id: '2',
      name: 'Projeto Taskly',
      due_date: '2025-09-05',
      status: 'doing',
      board: 'Work',
    },
    {
      id: '3',
      name: 'Revisar portfólio',
      due_date: '2025-09-06',
      status: 'done',
      board: 'Personal',
    },
  ]


  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <TaskTable data={data} columns={columns} />
    </div>
  )
}
