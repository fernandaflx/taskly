'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLoginWithEmail } from "@/features/auth/hooks/useLoginEmail"
import { useLoginWithGoogle } from "@/features/auth/hooks/useLoginGoogle"
import { useRouter } from "next/navigation"
import { Divider } from "@/components/Divider"
import Link from "next/link"
import { LoginWithEmailButton, LoginWithGoogleButton } from "./Buttons"
import { PasswordInput } from "./CustomInput"
import { toast } from "sonner"

const loginSchema = z.object({
  email: z.email({ message: "Enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const router = useRouter()

  const { login: loginWithEmail, loading: emailLoading } = useLoginWithEmail()
  const { login: loginWithGoogle, loading: googleLoading } = useLoginWithGoogle()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginFormValues) {
    try {
      await loginWithEmail(data.email, data.password)
      router.push("/dashboard")
    } catch (error) {
      toast.error(error as string)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 max-w-sm w-full")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password
                    </FormLabel>

                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                    <Link
                      href="/forgot-password"
                      className="text-sm ml-auto underline underline-offset-4 font-medium"
                    >
                      Forgot your password?
                    </Link>
                  </FormItem>
                )}
              />

              <LoginWithEmailButton loading={emailLoading} />

              <Divider />
            </form>
          </Form>

          <LoginWithGoogleButton />

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline underline-offset-4 font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
