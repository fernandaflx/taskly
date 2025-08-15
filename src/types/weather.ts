export type WeatherResponse = {
  location: {
    name: string
    region: string
    country: string
  }
  current: {
    temperature: number
    is_day: number
    text: string
    icon: string
  }
  forecast: {
    max_temp: number
    min_temp: number
  }

  loading: boolean
  error: boolean
}
