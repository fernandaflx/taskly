'use client'

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { LuEye, LuEyeClosed } from "react-icons/lu"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from 'react'
import { FaGoogle } from "react-icons/fa"

import { Divider } from "../commom/Divider"
import { useLoginWithEmail } from "@/features/auth/hooks/useLoginEmail"
import { useLoginWithGoogle } from "@/features/auth/hooks/useLoginGoogle"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"

const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const { login: loginWithEmail, loading: emailLoading } = useLoginWithEmail()
  const { login: loginWithGoogle } = useLoginWithGoogle()

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
      console.log(error)
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
                      <div className="flex items-center w-full">
                        <span>Password</span>
                        <a
                          href="/forgot-password"
                          className="text-sm ml-auto underline underline-offset-4"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <LuEyeClosed /> : <LuEye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={emailLoading}>
                {emailLoading ? (
                  <Spinner size='sm' />
                ) : "Login"}
              </Button>

              <Divider />

              <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
                onClick={loginWithGoogle}

              >
                <FaGoogle />
                Login with Google
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/register" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
