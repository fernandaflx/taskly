'use client'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { saveUserToFirestore } from './saveUserToFirestore'

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    await saveUserToFirestore({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    })

    return user
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error)
    throw error
  }
}
