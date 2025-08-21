import { Button } from "@/components/ui/button"
import { useLoginWithGoogle } from "@/features/auth/hooks/useLoginGoogle"
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { FaGoogle } from "react-icons/fa"
import { toast } from "sonner"

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

export const LoginWithGoogleButton = () => {
  const { login, loading } = useLoginWithGoogle()
  const router = useRouter()


  const submit = async () => {
    try {
      await login()
      router.push("/dashboard")
    } catch (error) {
      toast.error("Erro ao fazer login com Google")
    }
  }

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