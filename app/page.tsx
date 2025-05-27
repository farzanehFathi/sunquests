"use client";

import FavItem from "@/components/custom/favitem";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckIcon,
  Divide,
  DropletIcon,
  ThermometerIcon,
  WindIcon,
} from "lucide-react";
import { getWeatherData } from "./actions";
import { WeatherData } from "@/types/weather";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

function SubmitButton() {
  return (
    <Button className="w-full mt-4 bg-black/50 hover:bg-white/50 text-white hover:text-black font-bold py-2 px-4 rounded">
      <div className="flex items-center justify-center gap-2">
        <p>Let's Compare</p> <CheckIcon />
      </div>
    </Button>
  );
}

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
    <div className="  bg-[url('https://wallpapershome.com/images/pages/pic_h/11591.jpg')] bg-cover bg-center bg-opacity-35 bg-no-repeat">
      <div className="fixed inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <Header />

        <form action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl ">
            <div className="col-span-1 backdrop-blur bg-blue-100/25 shadow-md rounded-lg p-6 ">
              <h2 className="font-patrick_hand text-3xl pb-6">
                {" "}
                Where you're dreaming of?
              </h2>

              <>
                {" "}
                <div className="space-y-4">
                  <Input
                    name="city1"
                    placeholder="London"
                    className="bg-white/25 font-spinnaker"
                    required
                  />
                  <Input
                    placeholder="Madrid"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Paris"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Tokyo"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Milan"
                    className="bg-white/25 font-spinnaker"
                  />{" "}
                </div>
              </>
            </div>
            <div className="col-span-1 backdrop-blur flex flex-col item-center justify-center bg-blue-100/25 shadow-md rounded-lg p-6">
              <h2 className="text-3xl font-patrick_hand  pb-6  ">
                What's your ideal weather?
              </h2>
              <>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <FavItem
                    labelText="Min Temparature"
                    inputName="favTempMin"
                    inputType="number"
                    inputDefaultValue="21"
                  />
                  <FavItem
                    labelText="Max Temparature"
                    inputName="favTempMax"
                    inputType="number"
                    inputDefaultValue="25"
                  />
                  <FavItem
                    labelText="Min Humidity"
                    inputName="favHumMin"
                    inputType="number"
                    inputDefaultValue="30"
                  />
                  <FavItem
                    labelText="Max Humidity"
                    inputName="favHumMax"
                    inputType="number"
                    inputDefaultValue="50"
                  />
                  <FavItem
                    labelText="Weather Condition"
                    inputName="favWeatherCondition"
                    inputType="text"
                    inputDefaultValue="Sunny"
                  />
                </div>
              </>
            </div>
          </div>
          <SubmitButton />
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
