import { auth } from '@/lib/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { setCookie } from 'cookies-next'

export async function signInWithGoogle() {
  try {
    const googleProvider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    const token = await user.getIdToken()

    setCookie('token', token, {
      maxAge: 60 * 60,
      path: '/',
    })

    return user
  } catch (error) {
    console.error('Erro no login com Google:', error)
    throw error
  }
}

export async function logout() {
  await signOut(auth)
}
