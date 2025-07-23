import { create } from 'zustand'

type Theme = 'light' | 'dark'

type User = {
  uid: string
  name: string
  email: string
  photoURL?: string
  theme?: 'light' | 'dark'
  token?: string
}

type UserStore = {
  user: User | null
  theme: Theme
  setUser: (user: User) => void
  clearUser: () => void
  setTheme: (theme: Theme) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  theme: 'light',

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  setTheme: (theme) => set({ theme }),
}))
