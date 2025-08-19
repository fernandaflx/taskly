"use client"

import { Toaster } from "sonner"
import { useEffect, useState } from "react"
import { IoAlertCircle as WarningIcon, IoCloseCircle as ErrorIcon, IoCheckmarkCircle as SuccessIcon } from "react-icons/io5";

export function Toast() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)")
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    setIsMobile(media.matches)
    media.addEventListener("change", handler)

    return () => media.removeEventListener("change", handler)
  }, [])

  return <Toaster
    position={isMobile ? "top-center" : "top-right"}
    // toastOptions={{
    //   classNames: {
    //     title: '!text-red-900',
    //   },
    // }}
    icons={{
      success: <SuccessIcon size='1.125rem' color="#22bb33" />,
      // info: <InfoIcon />,
      warning: <WarningIcon size='1.125rem' color='#f0ad4e' />,
      error: <ErrorIcon size='1.125rem' color='#bb2124' />,
      // loading: <LoadingIcon />,
    }}
  />
}
