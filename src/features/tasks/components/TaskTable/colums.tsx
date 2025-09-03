'use client'

import { ColumnDef } from "@tanstack/react-table"
import { TaskColumns } from "../../models"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { capitalize } from "@/utils/capitalize"

export const columns: ColumnDef<TaskColumns>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select task"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Task name",
  },
  {
    accessorKey: "due_date",
    header: () => <p className="text-center">Due Date</p>,
    cell: ({ row }) => (
      <p className="text-center">
        {row.original.due_date}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <div className="flex justify-center">
          <Badge variant={status} className="w-20">
            {capitalize(status)}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "board",
    header: () => <p className="text-center">Board</p>,
    cell: ({ row }) => (
      <p className="text-center">{row.original.board}</p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
