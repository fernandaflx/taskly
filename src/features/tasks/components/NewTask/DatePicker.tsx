"use client"


import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"

export function DatePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-2 relative">
      <Label htmlFor="date">Due date</Label>

      <Button
        variant="outline"
        className="w-48 justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {date ? date.toLocaleDateString() : "Select date"}
        <ChevronDownIcon />
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-16 shadow-lg bg-white dark:bg-gray-800 border rounded-md">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              setIsOpen(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
