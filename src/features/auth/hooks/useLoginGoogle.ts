'use client'

import { useState, useCallback } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { loginWithGoogle } from '@/features/auth/actions/loginWithGoogle'

export function useLoginWithGoogle() {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const login = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const user = await loginWithGoogle()
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
  }, [setUser])

  return { login, loading, error }
}
