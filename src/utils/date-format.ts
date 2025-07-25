'use client'

import { useMemo } from 'react'

export function useLongDate(locale: string = 'en-US') {
  const formattedDate = useMemo(() => {
    const now = new Date()
    return now.toLocaleDateString(locale, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }, [locale])

  return formattedDate
}
