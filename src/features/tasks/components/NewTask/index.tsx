"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { LuPlus } from "react-icons/lu"
import { DatePicker } from "./DatePicker"
import { TaskInput } from "./Taskinput"
import { Select } from "./Select"

export function NewTask() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-fit">
          <LuPlus />
          Add new task
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new task</DialogTitle>
        </DialogHeader>

        <TaskInput />

        <DatePicker />

        <Select
          label="Category"
          placeholder="Select category"
          items={['Personal', 'Home', 'Work']}
        />

        <Select
          label="Board"
          placeholder="Select board"
          items={['Board 1', 'Board 2', 'Board 3']}
        />

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Save task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
