import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { WeatherResponse } from '@/types/weather'

const API_KEY = '2864a9b2e5364120a7553419252407'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json'

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

  const { data } = await axios.get<WeatherResponse>(BASE_URL, {
    params: {
      key: API_KEY,
      q: `${location.latitude},${location.longitude}`,
      lang: language,
    },
  })

  return data
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
