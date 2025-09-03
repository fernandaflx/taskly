'use client'

import TaskTable from "@/features/tasks/components/TaskTable"

export default function Dashboard() {

  return (
    <div className="flex flex-col h-screen overflow-hidden px-20 py-5">
      <TaskTable />
    </div>
  )
}
