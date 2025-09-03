import { Button } from "@/components/ui/button";
import { TaskColumns } from "../../models";
import { columns } from "./colums";
import { DataTable } from "./data-table";
import { LuPlus } from "react-icons/lu";
import { NewTask } from "../NewTask";

export default function TaskTable() {
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
    {
      id: '3',
      name: 'Revisar portfólio',
      due_date: '2025-09-06',
      status: 'archived',
      board: 'Personal',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <DataTable data={data} columns={columns} />

      <NewTask />
    </div>
  )
}