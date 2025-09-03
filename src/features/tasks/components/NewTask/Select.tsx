import { Label } from "@/components/ui/label";
import {
  Select as DefaultSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  label: string
  placeholder: string
  items: string[]
}

export function Select({ label, placeholder, items }: Props) {


  return (
    <div className="flex flex-col gap-2 relative">
      <Label htmlFor="category">{label}</Label>

      <DefaultSelect>
        <SelectTrigger className="w-[190px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem value={item}>
              {item}
            </SelectItem>

          ))}
        </SelectContent>
      </DefaultSelect>
    </div>
  )
}