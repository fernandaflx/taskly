import { useWeather } from "@/hooks/use-weather"

export const WeatherCard = () => {
  const { data, isLoading, error, refetch } = useWeather()


  return (
    <div className="border border-red-500 p-8 rounded-2xl flex items-center gap-10">
      <div className="w-28 flex flex-col items-center justify-between h-34">
        <img src={data?.current.condition.icon} />
        <p className="text-center">
          {data?.current.condition.text}
        </p>
      </div>

      <div className="w-28 flex flex-col items-center justify-between h-30">
        <p className="text-4xl text-center">
          {data?.current.temp_c}
        </p>

        <p className="text-center">
          {`${data?.location.region}, ${data?.location.country}`}
        </p>
      </div>

    </div>
  )
}