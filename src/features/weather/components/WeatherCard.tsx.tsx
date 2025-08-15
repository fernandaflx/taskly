import { useWeather } from "@/hooks/use-weather"

export const WeatherCard = () => {
  const { data, isLoading, error, refetch } = useWeather()

  function formatDate(date: Date) {
    return date
      .toLocaleDateString("pt-BR", { month: "long", day: "2-digit" })
      .replace(" ", ", ")
      .replace(/^./, (char: string) => char.toUpperCase());
  }

  function formatTemperatures(
    temp: number,
  ): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "unit",
      unit: 'celsius',
      maximumFractionDigits: 0
    }).format(temp);
  }

  return (
    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 border border-b-blue-700">
      {/* <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-50 dark:text-gray-800"> */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{data?.location.name}</h2>
        <p className="text-sm dark:text-gray-600">{formatDate(new Date())}</p>
      </div>

      <img src={data?.current.icon} />

      <div className="mb-2 text-3xl font-semibold">
        {formatTemperatures(data?.current.temperature as number)}
      </div>

      <div className="mb-1 font-semibold">
        {formatTemperatures(data?.forecast.max_temp as number)}
        <span className="mx-1 font-normal">/</span>
        {formatTemperatures(data?.forecast.min_temp as number)}
      </div>
      <p className="dark:text-gray-600">{data?.current.text}</p>

    </div>


  )
}