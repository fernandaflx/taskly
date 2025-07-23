'use client'

import { useEffect } from 'react'
import { useUserStore } from './useUserStore'

export default function RootClient() {
  const setupListener = useUserStore((state) => state.setupListener)

  useEffect(() => {
    setupListener()
  }, [setupListener])

  return null
}
