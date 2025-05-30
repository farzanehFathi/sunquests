"use client";

import { useSearchParams } from "next/navigation";

import { getWeatherData } from "../actions";
import { WeatherData } from "@/types/weather";
import { useEffect, useState } from "react";

import ForecastCard from "@/components/custom/forecastCard";

export default function Forecasts() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) {
        setError("City not provided");
        return;
      }

      const { data, error } = await getWeatherData(city);
      if (error) {
        setError(error);
        setWeather(null);
      } else if (data) {
        setWeather(data);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="font-architects_daughter">
      {error && (
        <div className="m-3 p-3 text-3xl  bg-red-500/25 text-center rounded-xl backdrop-blur  ">
          {error}
        </div>
      )}

      {weather && (
        <div className="m-3 ">
          <ForecastCard
            cityName={weather.name}
            weatherIcon={weather.weather[0].icon}
            weatherDesc={weather.weather[0].description}
            windSpeed={weather.wind.speed}
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            humidity={weather.main.humidity}
          />
        </div>
      )}
    </div>
  );
}
