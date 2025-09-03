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
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Task name",
  },
  {
    accessorKey: "due_date",
    header: "Due date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <Badge variant={status} className="w-20">
          {capitalize(status)}
        </Badge>
      )
    },
  },
  {
    accessorKey: "board",
    header: "Board",
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
