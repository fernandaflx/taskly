'use client'

import { useWeather } from "@/hooks/use-weather"
import { useEffect } from "react"

export default function Dashboard() {
  const { data, isLoading, isError, refetch } = useWeather()


  return (
    <div className="flex flex-col items-center justify-center min-w-full w-screen h-full">
      <h1 className="text-4xl font-bold">Dashboard</h1>
    </div>
  )
}
