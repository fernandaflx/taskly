'use client'

import { useState, useCallback } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { registerWithEmail } from '@/features/auth/actions/registerWithEmail'

export function useRegisterWithEmail() {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      setLoading(true)
      setError(null)
      try {
        const user = await registerWithEmail({ name, email, password })
        setUser({
          uid: user.uid,
          name: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || undefined,
          token: await user.getIdToken(),
          theme: 'light',
        })
        return user
      } catch (err) {
        setError(err as Error)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [setUser]
  )

  return { register, loading, error }
}
