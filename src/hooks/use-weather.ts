import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { WeatherResponse } from '@/types/weather'
import { useState } from 'react'

const API_KEY = '2864a9b2e5364120a7553419252407'
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json'

const getUserLocation = (): Promise<{
  latitude: number
  longitude: number
}> => {
  return new Promise((resolve) => {
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          resolve({ latitude, longitude })
        },
        () => {
          resolve({ latitude: -23.55052, longitude: -46.633308 })
        }
      )
    } else {
      resolve({ latitude: -23.55052, longitude: -46.633308 })
    }
  })
}

const getUserLanguage = (): string => {
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.split('-')[0] || 'en'
  }
  return 'en'
}

const fetchWeather = async (): Promise<WeatherResponse> => {
  const language = getUserLanguage()
  const location = await getUserLocation()

  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: `${location.latitude},${location.longitude}`,
      lang: language,
    },
  })

  const response: WeatherResponse = {
    location: {
      name: data?.location?.name as string,
      region: data?.location?.region as string,
      country: data?.location?.country as string,
    },
    current: {
      temperature: data?.current?.temp_c as number,
      is_day: data?.current?.is_day as number,
      text: data?.current?.condition?.text as string,
      icon: data?.current?.condition?.icon as string,
    },
    forecast: {
      max_temp: data?.forecast?.forecastday[0]?.day?.maxtemp_c as number,
      min_temp: data?.forecast?.forecastday[0]?.day?.mintemp_c as number,
    },
    loading: false,
    error: false,
  }
  return response
}

export const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    staleTime: 1000 * 60 * 10, // 10 min
    refetchInterval: 1000 * 60 * 60 * 2, // 2h
    refetchOnWindowFocus: false,
  })
}
