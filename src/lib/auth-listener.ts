import { onAuthStateChanged, getIdToken } from 'firebase/auth'
import { useUserStore } from '@/store/useUserStore'
import { auth } from './firebase'

export function setupAuthListener() {
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      const token = await getIdToken(firebaseUser)

      useUserStore.getState().setUser({
        name: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        uid: firebaseUser.uid,
        photoURL: firebaseUser.photoURL || '',
        token,
        theme: 'light', // pode vir do Firebase depois se quiser
      })
    } else {
      useUserStore.getState().clearUser()
    }
  })
}
