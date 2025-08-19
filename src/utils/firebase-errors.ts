import { FirebaseError } from 'firebase/app'

const firebaseAuthErrors: Record<string, string> = {
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
}

export function getFirebaseAuthError(error: unknown): string {
  console.log({ error })
  if (error && typeof error === 'object' && 'code' in error) {
    const err = error as FirebaseError
    return (
      firebaseAuthErrors[err.code] ||
      'Ocorreu um erro inesperado. Tente novamente.'
    )
  }
  return 'Erro desconhecido.'
}
