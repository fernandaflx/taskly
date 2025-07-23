import { auth } from '@/lib/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    // const user = result.user
    return result.user
  } catch (error) {
    console.error('Erro no login com Google:', error)
    throw error
  }
}

export async function logout() {
  await signOut(auth)
}
