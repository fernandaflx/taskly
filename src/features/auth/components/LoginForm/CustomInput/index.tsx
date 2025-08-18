"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { LuEye, LuEyeClosed } from "react-icons/lu"
import { cn } from "@/lib/utils"

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const PasswordInput = ({ className, error, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="*******"
        className={cn("pr-10", className, error && "border-red-500")}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <LuEyeClosed /> : <LuEye />}
      </button>
    </div>
  )
}
