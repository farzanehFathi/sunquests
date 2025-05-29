"use client";

import {
  DropletIcon,
  PaperclipIcon,
  PinIcon,
  ThermometerIcon,
  WindIcon,
} from "lucide-react";
import { getWeatherData } from "./actions";
import { WeatherData } from "@/types/weather";
import { useState } from "react";

// custom components
import SubmitButton from "@/components/custom/submitButton";
import FavItem from "@/components/custom/favitem";
import Header from "@/components/custom/header";

// Shadcn UI components
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    setError("");
    const city = formData.get("city1") as string;
    const { data, error: weatherError } = await getWeatherData(city);

    if (weatherError) {
      setError(weatherError);
      setWeather(null);
    }

    if (data) {
      setWeather(data);
    }
  };

  return (
    <div className="bg-mainBg text-mainText min-h-screen">
      <div className=" flex flex-col items-center p-4">
        <Header />

        <form action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full max-w-6xl ">
            <div
              className="col-span-1 backdrop-blur bg-mainAccent/25 shadow-md shadow-mainAccent rounded-lg flex flex-col item-center justify-center p-6 transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl hover:-translate-y-1
            cursor-pointer"
            >
              <PaperclipIcon
                size={36}
                className="relative -inset-y-12 text-zinc-400"
              />
              <h2 className="text-3xl font-architects_daughter pb-9  ">
                What's your ideal weather?
              </h2>
              <>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <FavItem
                    labelText="Min Temparature"
                    inputName="favTempMin"
                    inputType="number"
                    InputUnit="°C"
                    inputDefaultValue="21"
                  />
                  <FavItem
                    labelText="Max Temparature"
                    inputName="favTempMax"
                    inputType="number"
                    InputUnit="°C"
                    inputDefaultValue="25"
                  />
                  <FavItem
                    labelText="Min Humidity"
                    inputName="favHumMin"
                    inputType="number"
                    InputUnit="%"
                    inputDefaultValue="30"
                  />
                  <FavItem
                    labelText="Max Humidity"
                    inputName="favHumMax"
                    inputType="number"
                    InputUnit="%"
                    inputDefaultValue="50"
                  />

                  <FavItem
                    labelText="Wind Speed"
                    inputName="favWind"
                    inputType="number"
                    InputUnit="m/s"
                    inputDefaultValue="2"
                  />
                  <FavItem
                    labelText="Weather Condition"
                    inputName="favWeatherCondition"
                    inputType="text"
                    InputUnit=""
                    inputDefaultValue="Sunny"
                  />
                </div>
              </>
            </div>
            <div className="col-span-1 p-6">
              <div className="invisible md:visible ">
                <SubmitButton />
              </div>
              <h2 className="font-architects_daughter text-3xl pb-6">
                {" "}
                Where you're dreaming of?
              </h2>

              <div className="space-y-4">
                <Input name="city1" placeholder="London" required />
                <Input placeholder="Madrid" />
                <Input placeholder="Paris" />
                <Input placeholder="Tokyo" />
                <Input placeholder="Milan" />{" "}
              </div>
            </div>
          </div>
          <div className="visible md:invisible ">
            <SubmitButton />
          </div>
        </form>

        {error && (
          <div className="m-3 p-3 text-3xl font-patrick_hand bg-red-500/25 text-center rounded-xl backdrop-blur  ">
            {error}
          </div>
        )}

        {weather && (
          <div className="m-3 font-patrick_hand">
            <Card className="bg-white/25 backdrop-blur text-center">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold ">{weather.name}</h2>
                <hr />
                <div className="flex items-center justify-around">
                  <img
                    className="mx-0"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                  />
                  <div>
                    <div className="text-3xl font-semibold">
                      {Math.round(weather.main.temp / 10)} °C
                    </div>
                    <div className="capitalize text-xl">
                      {weather.weather[0].description}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-4">
                  <div className="text-center">
                    {" "}
                    <ThermometerIcon className="w-6 h-6 text-orange-500 mx-auto" />{" "}
                    <div className="text-centr text-gray-600">Feels Like</div>
                    <div className="text-l font-semibold">
                      {Math.round(weather.main.feels_like / 10)} °C
                    </div>
                  </div>
                  <div className="text-center">
                    {" "}
                    <DropletIcon className="w-6 h-6 text-blue-500 mx-auto" />{" "}
                    <div className="text-centr text-gray-600">Humidity</div>
                    <div className="text-l font-semibold">
                      {Math.round(weather.main.humidity)} %
                    </div>
                  </div>
                  <div className="text-center">
                    {" "}
                    <WindIcon className="w-6 h-6 text-teal-500 mx-auto" />{" "}
                    <div className="text-centr text-gray-600">Feels Like</div>
                    <div className="text-l font-semibold">
                      {Math.round(weather.wind.speed / 10)} m/s
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
