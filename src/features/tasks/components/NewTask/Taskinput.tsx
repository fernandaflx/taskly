import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TaskInput() {
  return (
    <div className="flex flex-col gap-2">
      <Label>Task</Label>
      <Textarea placeholder="Describe your task" />
    </div>
  )
}