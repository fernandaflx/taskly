export type WeatherResponse = {
  location: {
    name: string
    region: string
    country: string
    lat: string
    lon: string
    tz_id: string
    localtime_epoch: string
    localtime: string
  }
  current: {
    temp_c: string
    is_day: string
    condition: {
      text: string
      icon: string
      code: string
    }
    humidity: string
    cloud: string
    feelslike_c: string
  }
}
