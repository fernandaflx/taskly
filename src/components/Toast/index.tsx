"use client"

import { Toaster } from "sonner"
import { useEffect, useState } from "react"

export function Toast() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)")
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    setIsMobile(media.matches)
    media.addEventListener("change", handler)

    return () => media.removeEventListener("change", handler)
  }, [])

  return
  <Toaster
    position={isMobile ? "top-center" : "top-right"}
    toastOptions={{
      classNames: {
        title: '!text-red-900',
      },
    }}
  />
}
