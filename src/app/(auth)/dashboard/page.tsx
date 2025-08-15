'use client'

import { WeatherCard } from "@/features/weather/components/WeatherCard.tsx"

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <WeatherCard />
    </div>
  )
}
