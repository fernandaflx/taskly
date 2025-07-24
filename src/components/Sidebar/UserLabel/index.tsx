import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  name: string | undefined
  photoUrl: string | undefined
}

export const UserLabel = ({ name, photoUrl }: Props) => {
  return (
    <div className="flex min-w-full items-center gap-4 p-2">
      <Avatar>
        <AvatarImage src={photoUrl} />
        <AvatarFallback className="bg-amber-300">{name?.substring(0, 1)}</AvatarFallback>
      </Avatar>
      <p className="font-semibold">{name}</p>
    </div>
  )
}