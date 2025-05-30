// Shadcn UI components
import { Card, CardContent } from "@/components/ui/card";

import { DropletIcon, ThermometerIcon, WindIcon } from "lucide-react";
import CityImage from "./cityImage";

import { scoreWeather } from "@/functions/scoreWeather";

type ForecastCardProps = {
  cityName: string;
  // weatherIcon: string;
  weatherDesc: string;
  feelsLike: number;
  temp: number;
  humidity: number;
  windSpeed: number;
  favTempMin: number;
  favTempMax: number;
  favHumMin: number;
  favHumMax: number;
  favWind: number;
  favWeatherCondition: string;
};

export default function ForecastCard({
  cityName,
  // weatherIcon,
  weatherDesc,
  feelsLike,
  temp,
  humidity,
  windSpeed,
  favTempMin,
  favTempMax,
  favHumMin,
  favHumMax,
  favWind,
  favWeatherCondition,
}: ForecastCardProps) {
  const weatherScore = scoreWeather(
    {
      temp,
      feels_like: feelsLike,
      humidity,
      wind: windSpeed,
      condition: weatherDesc,
    },
    {
      favTempMin,
      favTempMax,
      favHumMin,
      favHumMax,
      favWind,
      favWeatherCondition,
    }
  );

  return (
    <div>
      <Card className="bg-white/25 backdrop-blur text-center grid grid-cols-1 sm:grid-cols-3 py-4 gap-4 border-0 shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-mainAccent/30">
        <CardContent className="py-0 ">
          <img
            className="h-full cover rounded-md border border-gray-300 border-spacing-1 shadow-sm -rotate-2 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:cursor-pointer hover:backdrop-blur-0 "
            src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="city"
          />
        </CardContent>

        <CardContent>
          <h2 className="text-3xl font-bold ">{cityName}</h2>
          <hr />
          <div className="flex items-center justify-around">
            {/* <img
              className="mx-0"
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt={weatherDesc}
            /> */}
            <div className="py-4">
              <div className="text-3xl font-semibold ">
                {Math.round(temp / 10)} °C
              </div>
              <div className="capitalize text-xl">{weatherDesc}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-4">
            <div className="text-center transition-all duration-150 hover:bg-orange-200/50 hover:backdrop-blur-xl hover:rounded-full hover:ring-orange-200">
              {" "}
              <ThermometerIcon className="w-6 h-6 text-orange-500 mx-auto" />{" "}
              <div className="text-centr text-gray-600 ">Feels Like</div>
              <div className="text-l font-semibold">
                {Math.round(feelsLike / 10)} °C
              </div>
            </div>
            <div className="text-center">
              {" "}
              <DropletIcon className="w-6 h-6 text-blue-500 mx-auto" />{" "}
              <div className="text-centr text-gray-600">Humidity</div>
              <div className="text-l font-semibold">
                {Math.round(humidity)} %
              </div>
            </div>
            <div className="text-center">
              {" "}
              <WindIcon className="w-6 h-6 text-teal-500 mx-auto" />{" "}
              <div className="text-centr text-gray-600">Feels Like</div>
              <div className="text-l font-semibold">
                {Math.round(windSpeed)} m/s
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent>{weatherScore}</CardContent>
      </Card>
    </div>
  );
}
