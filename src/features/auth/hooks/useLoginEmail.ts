'use client'

import { useState, useCallback } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { loginWithEmail } from '@/features/auth/actions/loginWithEmail'

export function useLoginWithEmail() {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      setError(null)
      try {
        const user = await loginWithEmail({ email, password })
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

  return { login, loading, error }
}
