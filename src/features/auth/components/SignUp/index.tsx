'use client'


import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormDefaultValues } from "./schema"
import { formFields } from "./fields"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"

import { Divider } from "@/components/Divider"
import { useLoginWithGoogle } from "@/features/auth/hooks/useLoginGoogle";
import { useRegisterWithEmail } from "@/features/auth/hooks/useRegisterWithEmail";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";


export const SignUpForm = () => {
  const router = useRouter()
  const { login: loginWithGoogle } = useLoginWithGoogle()
  const { register, loading } = useRegisterWithEmail()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: FormDefaultValues,
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await register(data.name, data.email, data.password)

      router.push("/dashboard")
    } catch (err) {
      console.error("Erro ao registrar:", err)
    }
  }


  return (
    <div className="bg-white rounded-xl max-w-sm w-full px-4 py-8 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {formFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof typeof FormDefaultValues}
              render={({ field: controller }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...controller}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="block mx-auto" disabled={loading}>
            {loading ?
              <Loader2Icon className="animate-spin" />
              : 'Create account'}
          </Button>

          <Divider />

          <Button
            className=" mx-auto w-max flex items-center gap-2"
            type="submit"
            onClick={loginWithGoogle}>
            <FaGoogle />
            Continue with Gmail
          </Button>
        </form>
      </Form>

    </div>

  )
}
