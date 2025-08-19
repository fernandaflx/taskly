'use client'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { saveUserToFirestore } from './saveUserToFirestore'
import { getFirebaseAuthError } from '@/utils/firebase-errors'

export async function loginWithEmail({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)

    await saveUserToFirestore({
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    })

    return result.user
  } catch (error) {
    throw getFirebaseAuthError(error)
  }
}
