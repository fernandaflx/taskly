'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useUserStore } from '@/store/useUserStore'

export function useLogout() {
  const router = useRouter()
  const clearUser = useUserStore((state) => state.clearUser)

  async function logout() {
    try {
      await signOut(auth)
      clearUser()
      router.push('/')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      throw error
    }
  }

  return logout
}
