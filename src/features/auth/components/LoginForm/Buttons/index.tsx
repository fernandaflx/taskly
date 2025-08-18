import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"
import { FaGoogle } from "react-icons/fa"

type EmailButtonProps = {
  loading: boolean
}

type GoogleButtonProps = {
  loading: boolean
  submit: () => void
}

export const LoginWithEmailButton = ({ loading }: EmailButtonProps) => {
  return (
    <Button type="submit" className="w-full m-0" disabled={loading}>
      {loading ? (
        <Loader2Icon className="animate-spin" />
      ) : "Login"}
    </Button>
  )
}

export const LoginWithGoogleButton = ({ loading, submit }: GoogleButtonProps) => {
  return (
    <Button
      variant="outline"
      className="w-full flex justify-center items-center gap-2"
      onClick={submit}
    >
      {loading ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        <>
          <FaGoogle />
          Login with Google
        </>
      )}
    </Button>
  )
}