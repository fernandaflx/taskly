'use client'

import { useState, useCallback } from 'react'
import { signInWithGoogle } from '@/features/auth/actions'
import { useUserStore } from '@/store/useUserStore'

export const useLoginWithGoogle = () => {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const login = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const user = await signInWithGoogle()
      setUser(user)
    } catch (err) {
      setError(err as Error)
      console.error('Falha ao logar com Google:', err)
    } finally {
      setLoading(false)
    }
  }, [setUser])

  return { login, loading, error }
}
