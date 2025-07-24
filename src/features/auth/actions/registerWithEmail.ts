// src/features/auth/actions/registerWithEmail.ts
'use client'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { saveUserToFirestore } from './saveUserToFirestore'

export async function registerWithEmail({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
    }

    await saveUserToFirestore({
      uid: result.user.uid,
      email: result.user.email,
      displayName: name,
      photoURL: null,
    })

    return result.user
  } catch (error) {
    console.error('Erro ao registrar:', error)
    throw error
  }
}
