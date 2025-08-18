import { Separator } from "@/components/ui/separator"

export const Divider = () => {
  return (
    <div className="flex items-center gap-2 my-4">
      <Separator className="flex-1" />
      <span className="text-sm text-muted-foreground">
        ou
      </span>
      <Separator className="flex-1" />
    </div>
  )
}