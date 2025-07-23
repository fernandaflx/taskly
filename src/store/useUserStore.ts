// store.ts ou useUserStore.ts
import { create } from 'zustand'
import { onAuthStateChanged, getIdToken } from 'firebase/auth'
import { auth } from '@/lib/firebase' // importe aqui

type Theme = 'light' | 'dark'

type User = {
  uid: string
  name: string
  email: string
  photoURL?: string
  theme?: Theme
  token?: string
}

type UserStore = {
  user: User | null
  theme: Theme
  setUser: (user: User) => void
  clearUser: () => void
  setTheme: (theme: Theme) => void
  setupListener: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  theme: 'light',

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  setTheme: (theme) => set({ theme }),

  setupListener: () => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await getIdToken(firebaseUser)
        set({
          user: {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            photoURL: firebaseUser.photoURL || undefined,
            token,
            theme: 'light',
          },
          theme: 'light',
        })
      } else {
        set({ user: null })
      }
    })
  },
}))
