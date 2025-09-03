import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export async function LogOut() {
  const auth = getAuth()

  try {
    await signOut(auth)
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    throw error
  }
}
